import { createInterface } from 'node:readline'
import puppeteer_base from 'puppeteer'
import { addExtra } from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

const puppeteer = addExtra(puppeteer_base as unknown as Parameters<typeof addExtra>[0])
puppeteer.use(StealthPlugin())

const debug_port = 9222
const browser_url = `http://127.0.0.1:${debug_port}`

type ScrapedListingData = {
	html_pages: string[]
	page_count: number
}

const waitForEnter = () => new Promise<void>(resolve => {
	const rl = createInterface({ input: process.stdin, output: process.stdout })
	rl.question('Press Enter when the page has loaded...', () => {
		rl.close()
		resolve()
	})
})

let captcha_bypassed = false

export const scrape_listing_pages = async (
	initial_url: string
): Promise<ScrapedListingData> => {
	let browser
	try {
		browser = await puppeteer.connect({ browserURL: browser_url })
	} catch (error) {
		throw new Error(
			`Could not connect to Chrome on ${browser_url}. ` +
				`Start Chrome with remote debugging first (see psa-parsers/launch-chrome.ts). ` +
				`Underlying error: ${error instanceof Error ? error.message : String(error)}`
		)
	}

	const existing_pages = await browser.pages()
	const page = existing_pages[0] ?? (await browser.newPage())
	const html_pages: string[] = []

	try {
		await page.setUserAgent(
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36'
		)

		await page.goto(initial_url, {
			waitUntil: 'domcontentloaded',
			timeout: 60000
		})

		if (!captcha_bypassed) {
			await waitForEnter()
			captcha_bypassed = true
		}

		await new Promise((resolve) => setTimeout(resolve, 2000))

		let page_number = 1

		while (true) {
			console.log(`Scraping page ${page_number}...`)

			const html = await page.content()
			html_pages.push(html)

			const next_button = await page.$('a.action.next[title="Next"]')

			if (!next_button) {
				console.log('No next button found, reached the end')
				break
			}

			const is_disabled = await page.evaluate((button) => {
				return (
					button?.hasAttribute('disabled') ||
					button?.classList.contains('disabled')
				)
			}, next_button)

			if (is_disabled) {
				console.log('Next button is disabled, reached the end')
				break
			}

			const next_href = await page.evaluate((button) => {
				return button?.getAttribute('href')
			}, next_button)

			if (!next_href) {
				console.log('Next button has no href, reached the end')
				break
			}

			console.log(`Navigating to next page: ${next_href}`)

			try {
				await page.goto(next_href, {
					waitUntil: 'domcontentloaded',
					timeout: 60000,
				})
				await new Promise((resolve) => setTimeout(resolve, 2000))
			} catch (error) {
				console.log('Failed to navigate to next page:', error instanceof Error ? error.message : String(error))
				break
			}

			page_number++
		}

		console.log(`Successfully scraped ${html_pages.length} pages`)

		return {
			html_pages,
			page_count: html_pages.length,
		}
	} catch (error) {
		console.error('Error during scraping:', error)
		throw error
	} finally {
		browser.disconnect()
	}
}
