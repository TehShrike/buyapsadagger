import puppeteer from 'puppeteer'

type ScrapedListingData = {
	html_pages: string[]
	page_count: number
}

export const scrape_listing_pages = async (
	initial_url: string
): Promise<ScrapedListingData> => {
	const launch_options = {
		headless: true,
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--ignore-certificate-errors',
		],
		// Use Puppeteer's bundled Chromium instead of system Chrome
		// System Chrome has permission issues when launched from cron
	}

	const browser = await puppeteer.launch(launch_options)

	const page = await browser.newPage()
	const html_pages: string[] = []

	try {
		await page.setUserAgent(
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
		)

		await page.goto(initial_url, {
			waitUntil: 'domcontentloaded',
			timeout: 60000
		})
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
		await browser.close()
	}
}
