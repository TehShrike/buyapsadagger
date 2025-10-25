export type Product = {
	psa_product_name: string
	psa_url: string
	price: number
	size_name: 'micro' | 'compact' | 'full_size_s'
	width: number
	length: number
	height: number
	barrel_length: number
	longer_barrel: boolean
	threaded_barrel: boolean
	night_sight: boolean
	compensated_slide: boolean
	slide_color: string | null
	cerakote_slide_coating: boolean
	frame_color: string | null
	optic_compatibility: 'none' | 'rmr' | 'shield_rmsc'
	has_cover_plate: boolean
	mag_bag_bonus: boolean
	number_of_included_mags: number
	mag_size: number | null
}

export type DaggersData = {
	daggers: Product[]
	slide_colors: Record<string, string>
	frame_colors: Record<string, string>
}
