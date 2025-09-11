// Unique values found in dataset:
// Width: 1.1", 1.28"
// Length: 6.5", 7.1", 7.15", 7.2", 7.65"  
// Height: 4.7", 4.78", 5.38"
// Barrel Length: 3.41", 3.9", 4", 4.15", 4.5", 4.9"
// Slide Finish: Black Cerakote, Sniper Green Cerakote, Flat Dark Earth Cerakote, Black DLC, DLC Coating
// Optic Compatibility: none, rmr, shield_rmsc
// Number of included mags: 1, 2, 5

import * as fs from "fs/promises"
import * as path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type RawProduct = {
	url: string
	title: string
	product_details: Record<string, string>
	features: string
}

type ProcessedProduct = {
	psa_product_name: string
	psa_url: string
	size_name: "micro" | "compact" | "full_size_s"
	width: number
	length: number
	height: number
	barrel_length: number
	longer_barrel: boolean
	threaded_barrel: boolean
	night_sight: boolean
	compensated_slide: boolean
	slide_finish: string | null
	color: string | null
	optic_compatibility: "none" | "rmr" | "shield_rmsc"
	has_cover_plate: boolean
	mag_bag_bonus: boolean
	number_of_included_mags: number
}

const extract_numeric_value = (value: string): number => {
	const match = value.match(/(\d+\.?\d*)/)
	return match ? parseFloat(match[1]) : 0
}

const determine_size_name = (title: string, width: number, height: number): "micro" | "compact" | "full_size_s" => {
	const title_lower = title.toLowerCase()
	if (title_lower.includes("micro")) return "micro"
	if (title_lower.includes("full size") || title_lower.includes("full-size")) return "full_size_s"
	return "compact"
}

const normalize_slide_finish = (slide_finish: string): string | null => {
	if (!slide_finish) return null
	
	// Simple normalization to snake_case
	return slide_finish
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, " ")  // Replace non-alphanumeric with spaces first
		.replace(/\s+/g, "_")          // Then replace spaces with underscores
		.replace(/_{2,}/g, "_")        // Remove duplicate underscores
		.replace(/^_|_$/g, "")         // Remove leading/trailing underscores
}

const extract_color_from_title = (title: string): string | null => {
	const title_lower = title.toLowerCase()
	
	// Look for specific color patterns first (most reliable)
	const specific_colors = [
		/\b(black|sniper green|flat dark earth|fde|two[- ]?tone|2[- ]?tone)\b/i,
		/\b(m81 woodland camo|m81 desert camo)\b/i
	]
	
	for (const pattern of specific_colors) {
		const match = title.match(pattern)
		if (match) {
			return match[1]
		}
	}
	
	// Extract color from end of title (most common pattern)
	const end_match = title.match(/,\s*([^,]+)$/);
	if (end_match) {
		const potential_color = end_match[1].trim()
		// Check if it looks like a color (not a technical spec)
		if (!potential_color.match(/\d+rd|\d+|magazine|mag|case|bag|barrel|with\s+\d+|rear\s+sight/i)) {
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
		.replace(/[^a-z0-9\s]/g, " ")  // Replace non-alphanumeric with spaces first
		.replace(/\s+/g, "_")          // Then replace spaces with underscores
		.replace(/_{2,}/g, "_")        // Remove duplicate underscores
		.replace(/^_|_$/g, "")         // Remove leading/trailing underscores
}

const determine_optic_compatibility = (title: string, features: string): "none" | "rmr" | "shield_rmsc" => {
	const combined_text = (title + " " + features).toLowerCase()
	
	if (combined_text.includes("shield") && (combined_text.includes("cut") || combined_text.includes("rmsc"))) {
		return "shield_rmsc"
	}
	if (combined_text.includes("rmr")) {
		return "rmr"
	}
	return "none"
}

const has_night_sights = (product_details: Record<string, string>): boolean => {
	const sight_fields = ["front_sight", "rear_sight"]
	for (const field of sight_fields) {
		const sight_value = product_details[field]
		if (sight_value && sight_value.toLowerCase().includes("night sight") && 
			!sight_value.toLowerCase().includes("not a night sight")) {
			return true
		}
	}
	return false
}

const has_compensated_slide = (title: string, features: string): boolean => {
	const combined_text = (title + " " + features).toLowerCase()
	return combined_text.includes("compensated") || combined_text.includes("compensator") || combined_text.includes("c-1")
}

const has_threaded_barrel = (title: string, product_details: Record<string, string>): boolean => {
	const title_lower = title.toLowerCase()
	const barrel_thread = product_details.barrel_thread || ""
	const barrel_length = product_details.barrel_length || ""
	
	return title_lower.includes("threaded") || 
		   barrel_thread.includes("TPI") ||
		   barrel_length.includes("TPI")
}

const has_longer_barrel = (title: string): boolean => {
	const title_lower = title.toLowerCase()
	return title_lower.includes("x-1") || title_lower.includes("x1") || title_lower.includes("long")
}

const extract_mag_count = (magazine_info: string): number => {
	if (!magazine_info) return 1
	
	const magazine_lower = magazine_info.toLowerCase()
	if (magazine_lower.includes("2x") || magazine_lower.includes("two")) return 2
	if (magazine_lower.includes("5x") || magazine_lower.includes("five")) return 5
	if (magazine_lower.includes("10")) return 10
	
	return 1
}

const has_mag_bag_bonus = (title: string, features: string, magazine_info: string): boolean => {
	const combined_text = (title + " " + features + " " + magazine_info).toLowerCase()
	return combined_text.includes("bag") || combined_text.includes("case") || 
		   combined_text.includes("magazine") && (combined_text.includes("10") || combined_text.includes("multiple"))
}

const process_product = (raw_product: RawProduct): ProcessedProduct => {
	const { title, url, product_details, features } = raw_product
	
	const width = extract_numeric_value(product_details.overall_width || "")
	const length = extract_numeric_value(product_details.overall_length || "")
	const height = extract_numeric_value(product_details.overall_height || "")
	const barrel_length = extract_numeric_value(product_details.barrel_length || "")
	
	const size_name = determine_size_name(title, width, height)
	const slide_finish = normalize_slide_finish(product_details.slide_finish || "")
	const color = normalize_color(extract_color_from_title(title))
	const optic_compatibility = determine_optic_compatibility(title, features)
	const magazine_info = product_details.magazine || ""
	
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
		slide_finish,
		color,
		optic_compatibility,
		has_cover_plate: optic_compatibility !== "none",
		mag_bag_bonus: has_mag_bag_bonus(title, features, magazine_info),
		number_of_included_mags: extract_mag_count(magazine_info)
	}
}

const process_daggers_for_front_end = async (): Promise<void> => {
	const input_file = path.join(__dirname, "products", "daggers2.json")
	const output_dir = path.join(__dirname, "..", "public", "products")
	const output_file = path.join(output_dir, "daggers.json")
	
	try {
		await fs.access(input_file)
	} catch {
		console.error("daggers2.json not found")
		return
	}
	
	console.log("Reading daggers2.json...")
	const raw_data = JSON.parse(await fs.readFile(input_file, "utf-8")) as RawProduct[]
	
	console.log(`Processing ${raw_data.length} products...`)
	
	// Build slide_finishes mapping from original data before processing
	const finish_mapping = new Map<string, string>()
	const color_mapping = new Map<string, string>()
	
	for (const product of raw_data) {
		// Process slide finishes
		const original_finish = product.product_details.slide_finish || ""
		const normalized_finish = normalize_slide_finish(original_finish)
		
		if (normalized_finish && !finish_mapping.has(normalized_finish)) {
			finish_mapping.set(normalized_finish, original_finish)
		}
		
		// Process colors
		const original_color = extract_color_from_title(product.title)
		const normalized_color = normalize_color(original_color)
		
		if (normalized_color && !color_mapping.has(normalized_color)) {
			color_mapping.set(normalized_color, original_color!)
		}
	}
	
	const processed_products = raw_data.map(process_product)
	
	// Build final slide_finishes and colors objects from the mappings
	const slide_finishes: Record<string, string> = {}
	for (const [normalized, original] of finish_mapping.entries()) {
		slide_finishes[normalized] = original
	}
	
	const colors: Record<string, string> = {}
	for (const [normalized, original] of color_mapping.entries()) {
		colors[normalized] = original
	}
	
	const output_data = {
		daggers: processed_products,
		slide_finishes,
		colors
	}
	
	await fs.mkdir(output_dir, { recursive: true })
	await fs.writeFile(output_file, JSON.stringify(output_data, null, 2), "utf-8")
	
	console.log(`Processed ${processed_products.length} products successfully`)
	console.log(`Results saved to: ${output_file}`)
	
	// Sample output for verification
	const sample = processed_products[0]
	if (sample) {
		console.log("\nSample processed product:")
		console.log(`Name: ${sample.psa_product_name}`)
		console.log(`Size: ${sample.size_name}`)
		console.log(`Dimensions: ${sample.width}" x ${sample.length}" x ${sample.height}"`)
		console.log(`Barrel: ${sample.barrel_length}" ${sample.threaded_barrel ? "(threaded)" : "(non-threaded)"}`)
		console.log(`Finish: ${sample.slide_finish ? `${sample.slide_finish} (${slide_finishes[sample.slide_finish as keyof typeof slide_finishes] || sample.slide_finish})` : "null"}`)
		console.log(`Color: ${sample.color ? `${sample.color} (${colors[sample.color as keyof typeof colors] || sample.color})` : "null"}`)
		console.log(`Optics: ${sample.optic_compatibility}`)
		console.log(`Mags: ${sample.number_of_included_mags}`)
	}
	
	console.log(`\nSlide finish mappings: ${Object.keys(slide_finishes).length} finishes available`)
	console.log(`Color mappings: ${Object.keys(colors).length} colors available`)
	
	// Summary statistics
	const size_counts = processed_products.reduce((acc, p) => {
		acc[p.size_name] = (acc[p.size_name] || 0) + 1
		return acc
	}, {} as Record<string, number>)
	
	console.log("\nSize distribution:")
	Object.entries(size_counts).forEach(([size, count]) => {
		console.log(`${size}: ${count} products`)
	})
}

process_daggers_for_front_end()