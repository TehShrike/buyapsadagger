import type { Product } from './product.d.ts'
import type { OpticCompatibility, Size } from './option_types.d.ts'

type TrueFalseOrAny = 'true' | 'false' | 'any'
type OpticCompatibilityOrAny = OpticCompatibility | 'any'

export type FilterParams = {
	size: Size
	extra_long_barrel: TrueFalseOrAny
	threaded_barrel: TrueFalseOrAny
	night_sight: TrueFalseOrAny
	optic_compatibility: OpticCompatibilityOrAny
	has_cover_plate: TrueFalseOrAny
}

const boolean_to_string = (value: boolean): 'true' | 'false' => {
	return value ? 'true' : 'false'
}

const matches_boolean_filter = (
	product_value: boolean,
	filter_value: TrueFalseOrAny
): boolean => {
	return filter_value === 'any' ||boolean_to_string(product_value) === filter_value
}

export const filter_daggers = (
	daggers: Product[],
	filters: FilterParams
): Product[] => {
	return daggers.filter((product) => {
		return product.size_name === filters.size
			&& matches_boolean_filter(product.longer_barrel, filters.extra_long_barrel)
			&& matches_boolean_filter(product.threaded_barrel, filters.threaded_barrel)
			&& matches_boolean_filter(product.night_sight, filters.night_sight)
			&& (filters.optic_compatibility === 'any' || product.optic_compatibility === filters.optic_compatibility)
			&& matches_boolean_filter(product.has_cover_plate, filters.has_cover_plate)
	})
}
