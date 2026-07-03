import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import puppeteer_base from 'puppeteer'
import type { Page as PuppeteerPage } from 'puppeteer'
import { addExtra } from 'puppeteer-extra'
import assert from '#lib/assert.ts'

import StealthPlugin from 'puppeteer-extra-plugin-stealth'

const puppeteer = addExtra(puppeteer_base as unknown as Parameters<typeof addExtra>[0])
puppeteer.use(StealthPlugin())

const debug_port = 9222
const browser_url = `http://127.0.0.1:${debug_port}`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type ProductData = {
	url: string
	title: string
}

const is_challenge_page = async (page: PuppeteerPage): Promise<boolean> => {
	try {
		const title = await page.title()
		return /just a moment/i.test(title)
	} catch {
		return true
	}
}

const wait_for_challenge_to_clear = async (
	page: PuppeteerPage
): Promise<void> => {
	let announced = false
	while (await is_challenge_page(page)) {
		if (!announced) {
			console.log(
				'Cloudflare challenge detected – click the captcha in the browser, retrying until it clears...'
			)
			announced = true
		}
		await new Promise((resolve) => setTimeout(resolve, 3000))
	}
	if (announced) {
		console.log('Challenge cleared, continuing')
	}
}

const download_product_pages = async (): Promise<void> => {
	const daggers_json_path = path.join(__dirname, 'products', 'daggers.json')

	if (!fs.existsSync(daggers_json_path)) {
		console.error('daggers.json not found')
		return
	}

	const products_data = JSON.parse(
		fs.readFileSync(daggers_json_path, 'utf-8')
	) as ProductData[]

	const products_dir = path.join(__dirname, 'products')
	if (!fs.existsSync(products_dir)) {
		fs.mkdirSync(products_dir, { recursive: true })
	}

	let browser
	try {
		browser = await puppeteer.connect({ browserURL: browser_url })
	} catch (error) {
		throw new Error(
			`Could not connect to Chrome on ${browser_url}. ` +
				`Start Chrome with remote debugging first (pnpm run launch_chrome). ` +
				`Underlying error: ${error instanceof Error ? error.message : String(error)}`
		)
	}

	const existing_pages = await browser.pages()
	const page = existing_pages[0] ?? (await browser.newPage())

	try {
		await page.setUserAgent(
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36'
		)

		for (let i = 0; i < products_data.length; i++) {
			if (i > 0) {
				await new Promise((resolve) => setTimeout(resolve, 2000))
			}
			const product = products_data[i]
			assert(product)
			const url_parts = new URL(product.url)
			const filename = `${
				url_parts.pathname.split('/').pop()?.replace('.html', '') ||
				`product-${i}`
			}.html`
			const file_path = path.join(products_dir, filename)

			console.log(
				`Downloading ${i + 1}/${products_data.length}: ${product.title}`
			)

			try {
				await page.goto(product.url, {
					waitUntil: 'domcontentloaded',
					timeout: 60000,
				})

				await wait_for_challenge_to_clear(page)

				await page
					.waitForSelector('.fotorama__stage__frame img[src]', { timeout: 10000 })
					.catch(() => console.warn(`Fotorama image not found for ${product.url}`))

				const html = await page.content()
				fs.writeFileSync(file_path, html, 'utf-8')

				console.log(`Saved: ${filename} (${html.length} characters)`)
			} catch (error) {
				console.error(
					`Failed to download ${product.url}:`,
					error instanceof Error ? error.message : String(error)
				)
				continue
			}
		}

		console.log(
			`Download completed - processed ${products_data.length} products`
		)
	} catch (error) {
		console.error('Error during product page download:', error)
		throw error
	} finally {
		browser.disconnect()
	}
}

download_product_pages()
