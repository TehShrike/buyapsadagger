import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'
import type { DaggersData } from '../client/product.d.ts'
import assert from '#lib/assert.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const download_image = async (
	url: string,
	output_path: string
): Promise<void> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(`Failed to download image: ${response.statusText}`)
	}
	const buffer = await response.arrayBuffer()
	await fs.writeFile(output_path, Buffer.from(buffer))
}

const download_product_images = async (): Promise<void> => {
	const data_file = path.join(__dirname, '..', 'client', 'daggers-data.ts')
	const images_dir = path.join(__dirname, '..', 'public', 'images')

	await fs.mkdir(images_dir, { recursive: true })

	const data_content = await fs.readFile(data_file, 'utf-8')
	const json_match = data_content.match(/const data: DaggersData = ({[\s\S]*?}) as const/)

	if (!json_match) {
		console.error('Failed to extract data from daggers-data.ts')
		return
	}

	const json_str = json_match[1]
	assert(json_str)
	const daggers_data: DaggersData = JSON.parse(json_str)
	const products = daggers_data.daggers

	console.log(`Downloading images for ${products.length} products...`)

	let downloaded = 0
	let failed = 0

	for (let i = 0; i < products.length; i++) {
		const product = products[i]
		assert(product)
		const output_path = path.join(images_dir, product.image_file_name)

		try {
			const exists = await fs
				.access(output_path)
				.then(() => true)
				.catch(() => false)

			if (exists) {
				console.log(
					`${i + 1}/${products.length}: Skipping ${product.image_file_name} (already exists)`
				)
				downloaded++
				continue
			}

			console.log(
				`${i + 1}/${products.length}: Downloading ${product.image_file_name}...`
			)
			await download_image(product.original_product_image_url, output_path)
			downloaded++
			console.log(`  Saved: ${product.image_file_name}`)
		} catch (error) {
			failed++
			console.error(
				`  Failed to download ${product.image_file_name}:`,
				error instanceof Error ? error.message : String(error)
			)
		}
	}

	console.log(
		`\nDownload complete: ${downloaded} downloaded, ${failed} failed`
	)
}

download_product_images()
