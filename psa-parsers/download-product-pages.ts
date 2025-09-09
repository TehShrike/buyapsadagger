import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"
import puppeteer from "puppeteer"
import assert from "./assert.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type ProductData = {
	url: string
	title: string
}

const download_product_pages = async (): Promise<void> => {
	const daggers_json_path = path.join(__dirname, "products", "daggers.json")

	if (!fs.existsSync(daggers_json_path)) {
		console.error("daggers.json not found")
		return
	}

	const products_data = JSON.parse(fs.readFileSync(daggers_json_path, "utf-8")) as ProductData[]

	const products_dir = path.join(__dirname, "products")
	if (!fs.existsSync(products_dir)) {
		fs.mkdirSync(products_dir, { recursive: true })
	}

	const browser = await puppeteer.launch({
		headless: true,
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	})

	const page = await browser.newPage()

	try {
		await page.setUserAgent(
			"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
		)

		for (let i = 0; i < products_data.length; i++) {
			const product = products_data[i]
			assert(product)
			const url_parts = new URL(product.url)
			const filename = `${
				url_parts.pathname.split("/").pop()?.replace(".html", "") || `product-${i}`
			}.html`
			const file_path = path.join(products_dir, filename)

			console.log(`Downloading ${i + 1}/${products_data.length}: ${product.title}`)

			try {
				await page.goto(product.url, { waitUntil: "networkidle0", timeout: 30000 })

				await new Promise(resolve => setTimeout(resolve, 1000))

				const html = await page.content()
				fs.writeFileSync(file_path, html, "utf-8")

				console.log(`Saved: ${filename} (${html.length} characters)`)

				if (i < products_data.length - 1) {
					await new Promise(resolve => setTimeout(resolve, 1000))
				}
			} catch (error) {
				console.error(
					`Failed to download ${product.url}:`,
					error instanceof Error ? error.message : String(error)
				)
				continue
			}
		}

		console.log(`Download completed - processed ${products_data.length} products`)
	} catch (error) {
		console.error("Error during product page download:", error)
		throw error
	} finally {
		await browser.close()
	}
}

download_product_pages()
