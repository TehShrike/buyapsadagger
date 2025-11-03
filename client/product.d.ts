export type Product = {
	psa_product_name: string
	psa_url: string
	price: number
	original_product_image_url: string
	image_file_name: string
	size: 'micro' | 'compact' | 'full_size_s'
	width: number
	length: number
	height: number
	barrel_length: number
	longer_barrel: boolean
	threaded_barrel: boolean
	night_sight: boolean
	compensated_slide: boolean
	slide_color: string | null
	slide_coating: 'none' | 'dlc' | 'cerakote'
	frame_color: string | null
	optic_compatibility: 'none' | 'rmr' | 'shield_rmsc'
	mag_bag_bonus: boolean
	number_of_included_mags: number
	mag_size: number | null
}

export type DaggersData = {
	daggers: Product[]
	slide_colors: Record<string, string>
	frame_colors: Record<string, string>
}

export type DaggersMetadata = Pick<DaggersData, Exclude<keyof DaggersData, 'daggers'>>
