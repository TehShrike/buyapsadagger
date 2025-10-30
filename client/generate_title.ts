import type { DaggersMetadata, Product } from './product.d.ts'
import type { FilterParams } from './filter-daggers.ts'
import assert from '#lib/assert.ts'

export const get_size = (product: Product): string => {
	const {size} = product

	if (size === 'micro') {
		return 'Micro'
	}

	if (size === 'compact') {
		return 'Compact'
	}

	if (size === 'full_size_s') {
		return 'Full Size'
	}

	throw new Error(`Unknown size: ${size}`)
}

const get_slide_color_name = (color_key: keyof DaggersMetadata['slide_colors'], metadata: DaggersMetadata): string | null => {
	const color_name = metadata.slide_colors[color_key]

	assert(color_name)

	return color_name
}

const get_frame_color_name = (color_key: keyof DaggersMetadata['frame_colors'], metadata: DaggersMetadata): string | null => {
	const color_name = metadata.frame_colors[color_key]

	assert(color_name)

	return color_name
}

export const get_color = (product: Product, metadata: DaggersMetadata): string | null => {
	const {slide_color, frame_color} = product

	if (!slide_color && !frame_color) {
		return null
	}

	if (slide_color === frame_color) {
		return get_slide_color_name(slide_color as keyof DaggersMetadata['slide_colors'], metadata)
	}

	if (slide_color && frame_color) {
		return `${get_slide_color_name(slide_color as keyof DaggersMetadata['slide_colors'], metadata)} + ${get_frame_color_name(frame_color as keyof DaggersMetadata['frame_colors'], metadata)}`
	}

	return slide_color
		? get_slide_color_name(slide_color as keyof DaggersMetadata['slide_colors'], metadata)
		: get_frame_color_name(frame_color as keyof DaggersMetadata['frame_colors'], metadata)
}

const join_non_null_values = (values: (string | null)[]): string => {
	return values.filter(Boolean).join(', ')
}

export const get_optic_compatibility = (product: Product): string | null => {
	const {optic_compatibility} = product

	if (product.optic_compatibility === 'none') {
		return null
	}

	if (optic_compatibility === 'rmr') {
		return 'RMR compatible'
	}

	if (optic_compatibility === 'shield_rmsc') {
		return 'Shield RMSc compatible'
	}

	throw new Error(`Unknown optic compatibility: ${optic_compatibility}`)
}

const get_slide_coating = (product: Product): string | null => {
	const {slide_coating} = product

	if (slide_coating === 'none') {
		return null
	}

	if (slide_coating === 'dlc') {
		return 'diamond-like slide coating'
	}

	if (slide_coating === 'cerakote') {
		return 'ceramic slide coating'
	}

	throw new Error(`Unknown slide coating: ${slide_coating}`)
}

// Size (compact)
// color (slide, frame)
// threaded
// night sights (if ambiguous filter)
// finish
// longer barrel (if ambiguous filter)
const generate_title = (product: Product, metadata: DaggersMetadata, current_filters: FilterParams): string => {
	return join_non_null_values([
		get_size(product),
		// get_color(product, metadata),
		(product.threaded_barrel && current_filters.threaded_barrel === 'any') ? 'Threaded' : null,
		(product.night_sight && current_filters.night_sight === 'any') ? 'Night Sights' : null,
		// (product.compensated_slide && current_filters.compensated_slide === 'any') ? 'Compensated Slide' : null,
		(product.longer_barrel && current_filters.longer_barrel === 'any') ? '(Longer Barrel)' : null,
		current_filters.optic_compatibility === 'any' ? get_optic_compatibility(product) : null,
		get_slide_coating(product),
		(product.number_of_included_mags > 1) ? `${product.number_of_included_mags} Magazines` : null,
	])
}

export default generate_title
