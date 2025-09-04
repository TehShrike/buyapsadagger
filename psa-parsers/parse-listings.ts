import * as fs from "fs"
import * as path from "path"
import { load } from "cheerio"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface ProductInfo {
	url: string
	title: string
}

const parse_listing_page = (html_content: string): ProductInfo[] => {
	const $ = load(html_content)
	const products: ProductInfo[] = []

	$(".product-item-name a.product-item-link").each((_, element) => {
		const $link = $(element)
		const url = $link.attr("href")
		const title = $link.text().trim()

		if (url && title) {
			products.push({ url, title })
		}
	})

	return products
}

const parse_all_listing_pages = (): void => {
	const listing_pages_dir = path.join(__dirname, "listing-pages")
	const products_dir = path.join(__dirname, "products")

	if (!fs.existsSync(listing_pages_dir)) {
		console.error("listing-pages directory not found")
		return
	}

	if (!fs.existsSync(products_dir)) {
		fs.mkdirSync(products_dir, { recursive: true })
	}

	const html_files = fs.readdirSync(listing_pages_dir).filter(file => file.endsWith(".html"))
	console.log(`Found ${html_files.length} HTML files to parse`)

	const products_map = new Map<string, string>()
	let total_products = 0

	html_files.forEach(file_name => {
		const file_path = path.join(listing_pages_dir, file_name)
		const html_content = fs.readFileSync(file_path, "utf-8")

		console.log(`Parsing ${file_name}...`)

		const products = parse_listing_page(html_content)
		console.log(`Found ${products.length} products`)

		products.forEach(product => {
			products_map.set(product.url, product.title)
		})

		total_products += products.length
	})

	const unique_products: ProductInfo[] = Array.from(products_map.entries()).map(([url, title]) => ({
		url,
		title
	}))

	console.log(`\nTotal products found: ${total_products}`)
	console.log(`Unique products: ${unique_products.length}`)

	const output_path = path.join(products_dir, "daggers.json")
	fs.writeFileSync(output_path, JSON.stringify(unique_products, null, 2), "utf-8")

	console.log(`Products saved to: ${output_path}`)
}

parse_all_listing_pages()
