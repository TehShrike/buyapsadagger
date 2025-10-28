import type { Product, DaggersData } from '../client/product.d.ts'
import daggers_data from '../client/daggers-data.ts'

const validate_products = async (): Promise<void> => {
	const data: DaggersData = daggers_data

	if (!data.daggers || !Array.isArray(data.daggers)) {
		console.error('daggers-data should contain a daggers array')
		process.exit(1)
	}

	if (!data.slide_colors || typeof data.slide_colors !== 'object') {
		console.error('daggers-data should contain a slide_colors object')
		process.exit(1)
	}

	if (!data.frame_colors || typeof data.frame_colors !== 'object') {
		console.error('daggers-data should contain a frame_colors object')
		process.exit(1)
	}

	const products = data.daggers
	const slide_colors = data.slide_colors
	const frame_colors = data.frame_colors

	console.log(`Validating ${products.length} products...`)

	const slide_colors_count = Object.keys(slide_colors).length
	if (slide_colors_count < 2) {
		console.error(
			`slide_colors should have at least 2 properties, found ${slide_colors_count}`
		)
		process.exit(1)
	}
	console.log(`✓ slide_colors has ${slide_colors_count} properties`)

	const frame_colors_count = Object.keys(frame_colors).length
	if (frame_colors_count < 2) {
		console.error(
			`frame_colors should have at least 2 properties, found ${frame_colors_count}`
		)
		process.exit(1)
	}
	console.log(`✓ frame_colors has ${frame_colors_count} properties`)

	const required_string_fields = [
		'psa_product_name',
		'psa_url',
		'original_product_image_url',
		'image_file_name',
		'size_name',
		'optic_compatibility',
	]
	const required_number_fields = [
		'price',
		'width',
		'length',
		'height',
		'barrel_length',
		'number_of_included_mags',
	]
	const required_boolean_fields = [
		'longer_barrel',
		'threaded_barrel',
		'night_sight',
		'compensated_slide',
		'cerakote_slide_coating',
		'has_cover_plate',
		'mag_bag_bonus',
	]

	const nullable_string_fields = ['slide_color', 'frame_color']
	const nullable_number_fields = ['mag_size']

	let validation_failed = false

	for (const product of products) {
		for (const field of required_string_fields) {
			if (
				typeof product[field as keyof Product] !== 'string' ||
				(product[field as keyof Product] as string).trim().length === 0
			) {
				console.error(
					`Product missing or has empty ${field}: ${product.psa_url || 'unknown'}`
				)
				validation_failed = true
			}
		}

		for (const field of required_number_fields) {
			if (
				typeof product[field as keyof Product] !== 'number' ||
				isNaN(product[field as keyof Product] as number)
			) {
				console.error(
					`Product missing or has invalid ${field}: ${product.psa_url || 'unknown'}`
				)
				validation_failed = true
			}
		}

		for (const field of required_boolean_fields) {
			if (typeof product[field as keyof Product] !== 'boolean') {
				console.error(
					`Product missing or has invalid ${field}: ${product.psa_url || 'unknown'}`
				)
				validation_failed = true
			}
		}

		for (const field of nullable_string_fields) {
			const value = product[field as keyof Product]
			if (value === undefined) {
				console.error(
					`Product missing ${field} property (should be string or null): ${product.psa_url || 'unknown'}`
				)
				validation_failed = true
			} else if (value !== null && (typeof value !== 'string' || value.trim().length === 0)) {
				console.error(
					`Product has invalid ${field} (should be non-empty string or null): ${product.psa_url || 'unknown'}`
				)
				validation_failed = true
			}
		}

		for (const field of nullable_number_fields) {
			const value = product[field as keyof Product]
			if (value === undefined) {
				console.error(
					`Product missing ${field} property (should be number or null): ${product.psa_url || 'unknown'}`
				)
				validation_failed = true
			} else if (value !== null && (typeof value !== 'number' || isNaN(value))) {
				console.error(
					`Product has invalid ${field} (should be number or null): ${product.psa_url || 'unknown'}`
				)
				validation_failed = true
			}
		}

		if (product.price <= 0) {
			console.error(
				`Product has invalid price (must be greater than 0): ${product.psa_url || 'unknown'} (price: ${product.price})`
			)
			validation_failed = true
		}
	}

	if (validation_failed) {
		console.error('\nValidation failed: Some products have missing or invalid fields')
		process.exit(1)
	}

	console.log('✓ All products have required fields with valid types')

	// Validate slide_color with 80% threshold
	const slide_color_count = products.filter((p) => p.slide_color !== null).length
	const slide_color_percentage = (slide_color_count / products.length) * 100

	if (slide_color_percentage < 80) {
		console.error(
			`Sanity check failed: slide_color is non-null in only ${slide_color_percentage.toFixed(1)}% of products (expected ≥80%)`
		)
		process.exit(1)
	}

	console.log(
		`✓ slide_color is non-null in ${slide_color_count}/${products.length} products (${slide_color_percentage.toFixed(1)}%)`
	)

	// Validate frame_color with 30% threshold
	const frame_color_count = products.filter((p) => p.frame_color !== null).length
	const frame_color_percentage = (frame_color_count / products.length) * 100

	if (frame_color_percentage < 30) {
		console.error(
			`Sanity check failed: frame_color is non-null in only ${frame_color_percentage.toFixed(1)}% of products (expected ≥30%)`
		)
		process.exit(1)
	}

	console.log(
		`✓ frame_color is non-null in ${frame_color_count}/${products.length} products (${frame_color_percentage.toFixed(1)}%)`
	)

	for (const field of nullable_number_fields) {
		const count = products.filter(
			(p) => p[field as keyof Product] !== null
		).length
		const percentage = (count / products.length) * 100

		if (percentage < 50) {
			console.error(
				`Sanity check failed: ${field} is non-null in only ${percentage.toFixed(1)}% of products (expected >50%)`
			)
			process.exit(1)
		}

		console.log(
			`✓ ${field} is non-null in ${count}/${products.length} products (${percentage.toFixed(1)}%)`
		)
	}
	console.log('\n✅ All validation tests passed!')
}

validate_products().catch((error) => {
	console.error('Validation script failed:', error.message)
	process.exit(1)
})
