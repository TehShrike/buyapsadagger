import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'
import * as cheerio from 'cheerio'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type ParsedProduct = {
	url: string
	title: string
	product_details: Record<string, string>
	features: string
}

const normalize_key = (key: string): string => {
	return key
		.toLowerCase()
		.replace(/[^\w\s]/g, '')
		.replace(/\s+/g, '_')
		.trim()
}

const extract_url = ($: cheerio.CheerioAPI): string => {
	return $('link[rel="canonical"]').attr('href') || ''
}

const extract_title = ($: cheerio.CheerioAPI): string => {
	return $('h1.page-title').text().trim() || $('span.page-title').text().trim() || ''
}

const extract_product_details = ($: cheerio.CheerioAPI): Record<string, string> => {
	const product_details: Record<string, string> = {}
	
	// Look for product details in the description section
	const description_section = $('#description .product.attribute .value[itemprop="description"]')
	
	if (description_section.length > 0) {
		// Process each <p> element, splitting on <br> first
		description_section.find('p').each((_, element) => {
			const $p = $(element)
			const html_content = $p.html() || ''
			
			// Split on <br> tags to handle both single and multiple entries per paragraph
			const segments = html_content.split('<br>')
			
			for (const segment of segments) {
				const $segment = cheerio.load(`<div>${segment}</div>`)
				const strong_element = $segment('strong').first()
				
				if (strong_element.length > 0) {
					const key_text = strong_element.text().trim().replace(/:\s*$/, '').replace(/&nbsp;/g, ' ')
					
					// Remove strong element and get remaining text as value
					strong_element.remove()
					const value = $segment('div').text().trim().replace(/^:\s*/, '').replace(/&nbsp;/g, ' ')
					
					if (key_text && value) {
						const key = normalize_key(key_text)
						product_details[key] = value
					}
				}
			}
		})
	}
	
	return product_details
}

const extract_features = ($: cheerio.CheerioAPI): string => {
	let features = ''
	
	// Look for the Features section by finding the h3 with "Features" text
	$('.product.attribute.description').each((_, element) => {
		const $section = $(element)
		const type_heading = $section.find('h3.type').text().trim().toLowerCase()
		
		if (type_heading === 'features') {
			const value_div = $section.find('.value').first()
			
			// Try to extract features from ul/li lists first (more structured)
			const feature_lists = value_div.find('ul, ol')
			if (feature_lists.length > 0) {
				const feature_items: string[] = []
				feature_lists.each((_, list) => {
					$(list).find('li').each((_, item) => {
						const item_text = $(item).text().trim()
						if (item_text) {
							feature_items.push(item_text)
						}
					})
				})
				if (feature_items.length > 0) {
					features = feature_items.join(' ')
					return false // Break out of loop
				}
			}
			
			// Fallback: get all text content from the Features section, but filter out excessive styling/HTML
			if (!features) {
				// First try to find "Additional Features:" followed by feature paragraphs
				const full_text = value_div.text().trim()
				const additional_features_index = full_text.indexOf('Additional Features:')
				
				if (additional_features_index !== -1) {
					// Extract everything after "Additional Features:"
					const features_text = full_text.substring(additional_features_index + 'Additional Features:'.length).trim()
					if (features_text.length > 0) {
						features = features_text
					}
				} else {
					// Use the full text if it's reasonable length and not just CSS/HTML
					if (full_text.length > 0 && full_text.length < 2000 && !full_text.includes('data-pb-style')) {
						features = full_text
					}
				}
			}
			
			return false // Break out of loop once we find Features section
		}
	})
	
	return features
}

const parse_product_file = async (file_path: string): Promise<ParsedProduct | null> => {
	try {
		const html = await fs.readFile(file_path, 'utf-8')
		const $ = cheerio.load(html)
		
		// Check if this is a bundle product by counting detail-product-name elements
		const product_name_count = $('h3.detail-product-name').length
		if (product_name_count > 1) {
			return null
		}
		
		const url = extract_url($)
		const title = extract_title($)
		const product_details = extract_product_details($)
		const features = extract_features($)
		
		return {
			url,
			title,
			product_details,
			features
		}
		
	} catch (error) {
		console.error(`Failed to parse ${file_path}:`, error.message)
		return null
	}
}

const parse_products = async (): Promise<void> => {
	const products_dir = path.join(__dirname, 'products')
	
	try {
		await fs.access(products_dir)
	} catch {
		console.error('Products directory not found')
		return
	}
	
	const files = await fs.readdir(products_dir)
	const html_files = files
		.filter(file => file.endsWith('.html'))
		.map(file => path.join(products_dir, file))
	
	console.log(`Found ${html_files.length} HTML files to parse`)
	console.log('Parsing all files in parallel...')
	
	const start_time = Date.now()
	
	// Parse all files in parallel
	const parse_promises = html_files.map(async (file_path) => {
		const filename = path.basename(file_path)
		const parsed = await parse_product_file(file_path)
		
		if (parsed) {
			console.log(`✓ ${filename} - ${parsed.title}`)
			return { type: 'success' as const, data: parsed, filename }
		} else {
			// Check if it was a bundle product
			try {
				const html = await fs.readFile(file_path, 'utf-8')
				const $ = cheerio.load(html)
				const product_name_count = $('h3.detail-product-name').length
				
				if (product_name_count > 1) {
					console.log(`⊘ ${filename} - Skipped bundle product`)
					return { type: 'bundle' as const, filename }
				} else {
					console.log(`✗ ${filename} - Failed to parse`)
					return { type: 'failed' as const, filename }
				}
			} catch {
				console.log(`✗ ${filename} - Failed to parse`)
				return { type: 'failed' as const, filename }
			}
		}
	})
	
	const results = await Promise.all(parse_promises)
	
	const parsed_products: ParsedProduct[] = []
	let skipped_bundles = 0
	let failed_count = 0
	
	for (const result of results) {
		if (result.type === 'success') {
			parsed_products.push(result.data)
		} else if (result.type === 'bundle') {
			skipped_bundles++
		} else {
			failed_count++
		}
	}
	
	const elapsed = Date.now() - start_time
	
	const public_dir = path.join(__dirname, '..', 'public', 'products')
	await fs.mkdir(public_dir, { recursive: true })
	
	const output_file = path.join(public_dir, 'daggers.json')
	await fs.writeFile(output_file, JSON.stringify(parsed_products, null, 2), 'utf-8')
	
	console.log(`\nParsing completed in ${elapsed}ms - ${parsed_products.length}/${html_files.length} products parsed successfully`)
	if (skipped_bundles > 0) {
		console.log(`Skipped ${skipped_bundles} bundle products`)
	}
	if (failed_count > 0) {
		console.log(`Failed to parse ${failed_count} products`)
	}
	console.log(`Results saved to: ${output_file}`)
	
	const sample = parsed_products[0]
	if (sample) {
		console.log('\nSample parsed product:')
		console.log(`URL: ${sample.url}`)
		console.log(`Title: ${sample.title}`)
		console.log(`Product details: ${Object.keys(sample.product_details).length} fields`)
		console.log(`Features length: ${sample.features.length} characters`)
	}
}

parse_products()