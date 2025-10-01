// Unique values found in dataset:
// Width: 1.1", 1.28"
// Length: 6.5", 7.1", 7.15", 7.2", 7.65"
// Height: 4.7", 4.78", 5.38"
// Barrel Length: 3.41", 3.9", 4", 4.15", 4.5", 4.9"
// Slide Finish: Black Cerakote, Sniper Green Cerakote, Flat Dark Earth Cerakote, Black DLC, DLC Coating
// Optic Compatibility: none, rmr, shield_rmsc
// Number of included mags: 1, 2, 5, 10
// Magazine sizes: 15rd, 17rd

import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'
import type { Product } from '../client/product.d.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type RawProduct = {
	url: string
	title: string
	product_details: Record<string, string>
	features: string
}

const extract_numeric_value = (value: string): number => {
	const match = value.match(/(\d+\.?\d*)/)
	return match ? parseFloat(match[1]) : 0
}

const determine_size_name = (
	title: string,
	width: number,
	height: number
): 'micro' | 'compact' | 'full_size_s' => {
	const title_lower = title.toLowerCase()
	if (title_lower.includes('micro')) return 'micro'
	if (title_lower.includes('full size') || title_lower.includes('full-size'))
		return 'full_size_s'
	return 'compact'
}

const apply_manual_fixes = (text: string): string => {
	if (!text) return text

	// Manual fixes for typos and abbreviations
	return text
		.replace(/Sniper Greem/i, 'Sniper Green')
		.replace(/^FDE$/i, 'Flat Dark Earth')
}

const strip_cerakote_from_finish = (slide_finish: string): string => {
	if (!slide_finish) return slide_finish

	// Strip out "Cerakote" from the human-readable string
	let cleaned = slide_finish
		// Handle "Cerakote, [Rest of Color]" pattern
		.replace(/^Cerakote,\s*/i, '')
		// Handle "Cerakote [Rest of Color]" pattern (no comma)
		.replace(/^Cerakote\s+/i, '')
		// Handle "[Rest of Color], Cerakote" pattern
		.replace(/,\s*Cerakote$/i, '')
		// Handle "[Rest of Color] Cerakote" pattern
		.replace(/\s+Cerakote$/i, '')
		// Handle "[Rest of Color] Cerakote Coating" pattern
		.replace(/\s+Cerakote\s+Coating$/i, '')
		.trim()

	// Apply manual fixes
	return apply_manual_fixes(cleaned)
}

const normalize_slide_finish = (slide_finish: string): string | null => {
	if (!slide_finish) return null

	// Simple normalization to snake_case (no Cerakote stripping here)
	return slide_finish
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, ' ') // Replace non-alphanumeric with spaces first
		.replace(/\s+/g, '_') // Then replace spaces with underscores
		.replace(/_{2,}/g, '_') // Remove duplicate underscores
		.replace(/^_|_$/g, '') // Remove leading/trailing underscores
}

const extract_color_from_title = (title: string): string | null => {
	const title_lower = title.toLowerCase()

	// Look for specific color patterns first (most reliable)
	const specific_colors = [
		/\b(black|sniper green|flat dark earth|fde|two[- ]?tone|2[- ]?tone)\b/i,
		/\b(m81 woodland camo|m81 desert camo)\b/i,
	]

	for (const pattern of specific_colors) {
		const match = title.match(pattern)
		if (match) {
			return match[1]
		}
	}

	// Extract color from end of title (most common pattern)
	const end_match = title.match(/,\s*([^,]+)$/)
	if (end_match) {
		const potential_color = end_match[1].trim()
		// Check if it looks like a color (not a technical spec)
		if (
			!potential_color.match(
				/\d+rd|\d+|magazine|mag|case|bag|barrel|with\s+\d+|rear\s+sight/i
			)
		) {
			// Further filter out technical terms
			if (!potential_color.match(/threaded|non[- ]?threaded|pistol|slide/i)) {
				return potential_color
			}
		}
	}

	return null
}

const normalize_color = (color: string | null): string | null => {
	if (!color) return null

	// Simple normalization to snake_case
	return color
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, ' ') // Replace non-alphanumeric with spaces first
		.replace(/\s+/g, '_') // Then replace spaces with underscores
		.replace(/_{2,}/g, '_') // Remove duplicate underscores
		.replace(/^_|_$/g, '') // Remove leading/trailing underscores
}

const determine_optic_compatibility = (
	title: string,
	features: string
): 'none' | 'rmr' | 'shield_rmsc' => {
	const combined_text = (title + ' ' + features).toLowerCase()

	if (
		combined_text.includes('shield') &&
		(combined_text.includes('cut') || combined_text.includes('rmsc'))
	) {
		return 'shield_rmsc'
	}
	if (combined_text.includes('rmr')) {
		return 'rmr'
	}
	return 'none'
}

const has_night_sights = (product_details: Record<string, string>): boolean => {
	const sight_fields = ['front_sight', 'rear_sight']
	for (const field of sight_fields) {
		const sight_value = product_details[field]
		if (
			sight_value &&
			sight_value.toLowerCase().includes('night sight') &&
			!sight_value.toLowerCase().includes('not a night sight')
		) {
			return true
		}
	}
	return false
}

const has_compensated_slide = (title: string, features: string): boolean => {
	const combined_text = (title + ' ' + features).toLowerCase()
	return (
		combined_text.includes('compensated') ||
		combined_text.includes('compensator') ||
		combined_text.includes('c-1')
	)
}

const has_threaded_barrel = (
	title: string,
	product_details: Record<string, string>
): boolean => {
	const title_lower = title.toLowerCase()
	const barrel_thread = product_details.barrel_thread || ''
	const barrel_length = product_details.barrel_length || ''
	const barrel_profile = product_details.barrel_profile || ''
	const thread_pitch = product_details.thread_pitch || ''

	return (
		title_lower.includes('threaded') ||
		barrel_thread.includes('TPI') ||
		thread_pitch.includes('TPI') ||
		barrel_length.includes('TPI') ||
		barrel_profile.includes('Threaded')
	)
}

const has_longer_barrel = (title: string): boolean => {
	const title_lower = title.toLowerCase()
	return (
		title_lower.includes('x-1') ||
		title_lower.includes('x1') ||
		title_lower.includes('long')
	)
}

const extract_magazine_info = (
	title: string,
	magazine_info: string,
	features: string
): { count: number; size: number | null } => {
	const combined_text = (
		title +
		' ' +
		magazine_info +
		' ' +
		features
	).toLowerCase()

	// Look for explicit magazine count patterns - only accept valid magazine sizes
	const count_patterns = [
		/\b(\d+)\s*[-\s]*\s*(1[57])rd\s+mag/i, // "10 - 15rd Magazines" or "10-17rd Mag" (only 15 or 17)
		/\bwith\s*(\d+)\s*(1[57])rd\s+mag/i, // "With 10 17rd Mags"
		/\b(\d+)\s*x\s*(1[57])rd/i, // "5x 15rd"
		/\b(\d+)\s+(1[57])rd\s+mag/i, // "10 15RD Mags"
		/\bwith(\d+)\s*[-\s]*\s*(1[57])rd/i, // "With10 -17rd"
	]

	for (const pattern of count_patterns) {
		const match = combined_text.match(pattern)
		if (match) {
			const count = parseInt(match[1])
			const size = parseInt(match[2])
			return { count, size }
		}
	}

	// Look for magazine info in the magazine field
	if (magazine_info) {
		const magazine_lower = magazine_info.toLowerCase()

		// Extract count
		let count = 1
		if (
			magazine_lower.includes('2 17rd magazines') ||
			magazine_lower.includes('2x')
		)
			count = 2
		else if (magazine_lower.includes('5x') || magazine_lower.includes('five'))
			count = 5
		else if (magazine_lower.includes('10')) count = 10
		else if (magazine_lower.includes('one (1)')) count = 1

		// Extract size - only accept valid PSA magazine sizes (15rd, 17rd)
		let size: number | null = null
		const size_match = magazine_info.match(/(\d+)rd/i)
		if (size_match) {
			const parsed_size = parseInt(size_match[1])
			// Only accept PSA standard magazine sizes
			if (parsed_size === 15 || parsed_size === 17) {
				size = parsed_size
			}
		}

		return { count, size }
	}

	// Look in features for magazine info as fallback
	const features_size_match = features.match(/(\d{2})rd\s+magazine/i)
	if (features_size_match) {
		const parsed_size = parseInt(features_size_match[1])
		if (parsed_size === 15 || parsed_size === 17) {
			return { count: 1, size: parsed_size }
		}
	}

	// No fallback - return null if we can't determine magazine size
	return { count: 1, size: null }
}

const has_mag_bag_bonus = (
	title: string,
	features: string,
	magazine_info: string
): boolean => {
	const combined_text = (
		title +
		' ' +
		features +
		' ' +
		magazine_info
	).toLowerCase()
	return (
		combined_text.includes('bag') ||
		combined_text.includes('case') ||
		(combined_text.includes('magazine') &&
			(combined_text.includes('10') || combined_text.includes('multiple')))
	)
}

const has_cerakote_coating = (slide_finish: string | null): boolean => {
	if (!slide_finish) return false
	return slide_finish.toLowerCase().includes('cerakote')
}

const process_product = (raw_product: RawProduct): Product => {
	const { title, url, product_details, features } = raw_product

	const width = extract_numeric_value(product_details.overall_width || '')
	const length = extract_numeric_value(product_details.overall_length || '')
	const height = extract_numeric_value(product_details.overall_height || '')
	const barrel_length = extract_numeric_value(
		product_details.barrel_length || ''
	)

	const size_name = determine_size_name(title, width, height)
	const original_slide_finish = product_details.slide_finish || ''
	const stripped_slide_finish = strip_cerakote_from_finish(
		original_slide_finish
	)
	const slide_color = normalize_slide_finish(stripped_slide_finish)
	const original_frame_color = extract_color_from_title(title)
	const fixed_frame_color = apply_manual_fixes(original_frame_color || '')
	const frame_color = normalize_color(fixed_frame_color)
	const optic_compatibility = determine_optic_compatibility(title, features)
	const magazine_info = product_details.magazine || ''
	const mag_info = extract_magazine_info(title, magazine_info, features)

	return {
		psa_product_name: title,
		psa_url: url,
		size_name,
		width,
		length,
		height,
		barrel_length,
		longer_barrel: has_longer_barrel(title),
		threaded_barrel: has_threaded_barrel(title, product_details),
		night_sight: has_night_sights(product_details),
		compensated_slide: has_compensated_slide(title, features),
		slide_color,
		cerakote_slide_coating: has_cerakote_coating(original_slide_finish),
		frame_color,
		optic_compatibility,
		has_cover_plate: optic_compatibility !== 'none',
		mag_bag_bonus: has_mag_bag_bonus(title, features, magazine_info),
		number_of_included_mags: mag_info.count,
		mag_size: mag_info.size,
	}
}

const process_daggers_for_front_end = async (): Promise<void> => {
	const input_file = path.join(__dirname, 'products', 'daggers2.json')
	const output_dir = path.join(__dirname, '..', 'public', 'products')
	const output_file = path.join(output_dir, 'daggers.json')

	try {
		await fs.access(input_file)
	} catch {
		console.error('daggers2.json not found')
		return
	}

	console.log('Reading daggers2.json...')
	const raw_data = JSON.parse(
		await fs.readFile(input_file, 'utf-8')
	) as RawProduct[]

	console.log(`Processing ${raw_data.length} products...`)

	// Build slide_colors and frame_colors mappings from original data before processing
	const slide_color_mapping = new Map<string, string>()
	const frame_color_mapping = new Map<string, string>()

	for (const product of raw_data) {
		// Process slide colors
		const original_finish = product.product_details.slide_finish || ''
		const stripped_finish = strip_cerakote_from_finish(original_finish)
		const normalized_slide_color = normalize_slide_finish(stripped_finish)

		if (
			normalized_slide_color &&
			!slide_color_mapping.has(normalized_slide_color)
		) {
			slide_color_mapping.set(normalized_slide_color, stripped_finish)
		}

		// Process frame colors
		const original_frame_color = extract_color_from_title(product.title)
		const fixed_frame_color = apply_manual_fixes(original_frame_color || '')
		const normalized_frame_color = normalize_color(fixed_frame_color)

		if (
			normalized_frame_color &&
			!frame_color_mapping.has(normalized_frame_color)
		) {
			frame_color_mapping.set(normalized_frame_color, fixed_frame_color)
		}
	}

	const processed_products = raw_data.map(process_product)

	// Build final slide_colors and frame_colors objects from the mappings
	const slide_colors: Record<string, string> = {}
	for (const [normalized, original] of slide_color_mapping.entries()) {
		slide_colors[normalized] = original
	}

	const frame_colors: Record<string, string> = {}
	for (const [normalized, original] of frame_color_mapping.entries()) {
		frame_colors[normalized] = original
	}

	const output_data = {
		daggers: processed_products,
		slide_colors,
		frame_colors,
	}

	await fs.mkdir(output_dir, { recursive: true })
	await fs.writeFile(output_file, JSON.stringify(output_data, null, 2), 'utf-8')

	console.log(`Processed ${processed_products.length} products successfully`)
	console.log(`Results saved to: ${output_file}`)

	// Sample output for verification
	const sample = processed_products[0]
	if (sample) {
		console.log('\nSample processed product:')
		console.log(`Name: ${sample.psa_product_name}`)
		console.log(`Size: ${sample.size_name}`)
		console.log(
			`Dimensions: ${sample.width}" x ${sample.length}" x ${sample.height}"`
		)
		console.log(
			`Barrel: ${sample.barrel_length}" ${
				sample.threaded_barrel ? '(threaded)' : '(non-threaded)'
			}`
		)
		console.log(
			`Slide Color: ${
				sample.slide_color
					? `${sample.slide_color} (${
							slide_colors[sample.slide_color as keyof typeof slide_colors] ||
							sample.slide_color
					  })`
					: 'null'
			}`
		)
		console.log(
			`Frame Color: ${
				sample.frame_color
					? `${sample.frame_color} (${
							frame_colors[sample.frame_color as keyof typeof frame_colors] ||
							sample.frame_color
					  })`
					: 'null'
			}`
		)
		console.log(`Optics: ${sample.optic_compatibility}`)
		console.log(
			`Mags: ${sample.number_of_included_mags} x ${
				sample.mag_size ? `${sample.mag_size}rd` : 'null'
			}`
		)
	}

	console.log(
		`\nSlide color mappings: ${
			Object.keys(slide_colors).length
		} colors available`
	)
	console.log(
		`Frame color mappings: ${Object.keys(frame_colors).length} colors available`
	)

	// Summary statistics
	const size_counts = processed_products.reduce((acc, p) => {
		acc[p.size_name] = (acc[p.size_name] || 0) + 1
		return acc
	}, {} as Record<string, number>)

	console.log('\nSize distribution:')
	Object.entries(size_counts).forEach(([size, count]) => {
		console.log(`${size}: ${count} products`)
	})

	processed_products.forEach((p) => {
		const barrel_is_four_and_a_half_inches = p.barrel_length === 4.5

		if (barrel_is_four_and_a_half_inches) {
			const barrel_is_expected_to_be_that_long =
				p.longer_barrel || p.threaded_barrel

			if (!barrel_is_expected_to_be_that_long) {
				console.log(
					`🔴 ${p.psa_product_name} has a 4.5" barrel even though we would not expect it to be long – threaded barrel: "${p.threaded_barrel}", longer barrel: "${p.longer_barrel}"`
				)
			}

			if (p.longer_barrel === p.threaded_barrel) {
				console.log(
					`🔴 ${p.psa_product_name} has a 4.5" barrel and should not have longer_barrel and threaded_barrel being the same value! threaded barrel: "${p.threaded_barrel}", longer barrel: "${p.longer_barrel}"`
				)
			}
		}
	})
}

process_daggers_for_front_end()
