import * as fs from "fs/promises"
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

const parse_listing_file = async (file_path: string): Promise<ProductInfo[]> => {
	const file_name = path.basename(file_path)
	const html_content = await fs.readFile(file_path, "utf-8")
	
	console.log(`Parsing ${file_name}...`)
	
	const products = parse_listing_page(html_content)
	console.log(`Found ${products.length} products in ${file_name}`)
	
	return products
}

const parse_all_listing_pages = async (): Promise<void> => {
	const listing_pages_dir = path.join(__dirname, "listing-pages")
	const products_dir = path.join(__dirname, "products")

	try {
		await fs.access(listing_pages_dir)
	} catch {
		console.error("listing-pages directory not found")
		return
	}

	await fs.mkdir(products_dir, { recursive: true })

	const files = await fs.readdir(listing_pages_dir)
	const html_files = files.filter(file => file.endsWith(".html"))
	const file_paths = html_files.map(file => path.join(listing_pages_dir, file))
	
	console.log(`Found ${html_files.length} HTML files to parse`)
	console.log('Parsing all files in parallel...')

	const start_time = Date.now()

	// Parse all files in parallel
	const parse_promises = file_paths.map(file_path => parse_listing_file(file_path))
	const results = await Promise.all(parse_promises)

	const products_map = new Map<string, string>()
	let total_products = 0

	// Collect all products and deduplicate
	for (const products of results) {
		total_products += products.length
		for (const product of products) {
			products_map.set(product.url, product.title)
		}
	}

	const unique_products: ProductInfo[] = Array.from(products_map.entries()).map(([url, title]) => ({
		url,
		title
	}))

	const elapsed = Date.now() - start_time

	console.log(`\nParsing completed in ${elapsed}ms`)
	console.log(`Total products found: ${total_products}`)
	console.log(`Unique products: ${unique_products.length}`)
	console.log(`Duplicates removed: ${total_products - unique_products.length}`)

	const output_path = path.join(products_dir, "daggers.json")
	await fs.writeFile(output_path, JSON.stringify(unique_products, null, 2), "utf-8")

	console.log(`Products saved to: ${output_path}`)
}

parse_all_listing_pages()
