import type { Product } from './product.d.ts'
import type { OpticCompatibility, Size } from './option_types.d.ts'
import { ANY, type Any } from './querystring_options.ts'
import { filter } from '#lib/array.ts'

type TrueFalseOrAny = 'true' | 'false' | Any
export type OpticCompatibilityOrAny = OpticCompatibility | Any

export type FilterParams = {
	size: Size
	longer_barrel: TrueFalseOrAny
	threaded_barrel: TrueFalseOrAny
	night_sight: TrueFalseOrAny
	optic_compatibility: OpticCompatibilityOrAny
	has_cover_plate: TrueFalseOrAny
}

export type FilterParamKey = keyof FilterParams

const boolean_to_string = (value: boolean): 'true' | 'false' => {
	return value ? 'true' : 'false'
}

const matches_boolean_filter = (
	product_value: boolean,
	filter_value: TrueFalseOrAny
): boolean => {
	return filter_value === ANY || boolean_to_string(product_value) === filter_value
}

export const product_matches = (product: Product, filters: FilterParams): boolean => {
	return product.size === filters.size
		&& matches_boolean_filter(product.longer_barrel, filters.longer_barrel)
		&& matches_boolean_filter(product.threaded_barrel, filters.threaded_barrel)
		&& matches_boolean_filter(product.night_sight, filters.night_sight)
		&& (filters.optic_compatibility === ANY || product.optic_compatibility === filters.optic_compatibility)
		&& matches_boolean_filter(product.has_cover_plate, filters.has_cover_plate)
}

export const filter_daggers = (
	daggers: Product[],
	filters: FilterParams
): Product[] => filter(daggers, (product) => product_matches(product, filters))
