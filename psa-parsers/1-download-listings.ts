import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { scrape_listing_pages } from './puppeteer-scraper.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const start_download = async (): Promise<void> => {
	const initial_url = 'https://palmettostatearmory.com/psa-dagger/handguns.html?stock_filter=Show+Only+In+Stock'
	
	try {
		console.log('Starting download using puppeteer scraper...')
		const result = await scrape_listing_pages(initial_url)
		
		const listing_pages_dir = path.join(__dirname, 'listing-pages')
		if (!fs.existsSync(listing_pages_dir)) {
			fs.mkdirSync(listing_pages_dir, { recursive: true })
		}
		
		result.html_pages.forEach((html, index) => {
			const page_number = index + 1
			const filename = `psa-dagger-handguns-show-only-in-stock-page-${page_number}.html`
			const file_path = path.join(listing_pages_dir, filename)
			
			fs.writeFileSync(file_path, html, 'utf-8')
			console.log(`Saved: ${filename} (${html.length} characters)`)
		})
		
		console.log(`Download completed successfully - saved ${result.page_count} pages`)
	} catch (error) {
		console.error('Download failed:', error)
	}
}

start_download()