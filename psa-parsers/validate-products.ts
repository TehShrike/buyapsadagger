import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type ProductData = {
	url: string
	title: string
	product_details: Record<string, string>
	features: string
}

const validate_products = async (): Promise<void> => {
	const public_dir = path.join(__dirname, '..', 'public', 'products')
	const daggers_file = path.join(public_dir, 'daggers.json')
	
	if (!fs.existsSync(daggers_file)) {
		console.error('daggers.json file not found')
		process.exit(1)
	}
	
	let products: ProductData[]
	
	try {
		const file_content = fs.readFileSync(daggers_file, 'utf-8')
		products = JSON.parse(file_content)
	} catch (error) {
		console.error('Failed to parse daggers.json:', error.message)
		process.exit(1)
	}
	
	if (!Array.isArray(products)) {
		console.error('daggers.json should contain an array')
		process.exit(1)
	}
	
	console.log(`Validating ${products.length} products...`)
	
	// Test 1: Check that every entry has at least 5 product_details keys
	let failed_product_details = false
	
	for (const product of products) {
		const details_count = Object.keys(product.product_details || {}).length
		
		if (details_count < 5) {
			console.log(product.url)
			console.log(product.title)
			failed_product_details = true
		}
	}
	
	if (failed_product_details) {
		console.error('\nValidation failed: Some products have fewer than 5 product detail keys')
		process.exit(1)
	}
	
	console.log('✓ All products have at least 5 product detail keys')
	
	// Test 2: Check that every entry has non-empty features
	let failed_features = false
	
	for (const product of products) {
		if (!product.features || product.features.trim().length === 0) {
			console.log(product.url)
			console.log(product.title)
			failed_features = true
		}
	}
	
	if (failed_features) {
		console.error('\nValidation failed: Some products have empty features')
		process.exit(1)
	}
	
	console.log('✓ All products have non-empty features')
	console.log('\n✅ All validation tests passed!')
}

validate_products().catch(error => {
	console.error('Validation script failed:', error.message)
	process.exit(1)
})