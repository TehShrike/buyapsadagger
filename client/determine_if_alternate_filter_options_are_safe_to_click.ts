import type { FilterParamKey, FilterParams } from './filter-daggers.ts'
import type { Product } from './product.d.ts'
import { filter, map, for_each } from '#lib/array.ts'
import assert from '#lib/assert.ts'
import { object_from_entries, object_entries, object_keys } from '#lib/object.ts'
import { product_matches } from './filter-daggers.ts'

type AlternateOptionsToConsider = Record<Exclude<FilterParamKey, 'size'>, FilterParams[FilterParamKey][]>
const possible_filter_option_values_excluding_any: AlternateOptionsToConsider = {
	longer_barrel: ['true', 'false'] as const,
	threaded_barrel: ['true', 'false'] as const,
	night_sight: ['true', 'false'] as const,
	optic_compatibility: ['none', 'rmr', 'shield_rmsc'] as const,
}

export const calculate_alternate_option_selections_we_need_to_consider = (displayed_filter_options: Set<FilterParamKey>, current_filter_params: FilterParams) => object_from_entries(map(
	object_entries(possible_filter_option_values_excluding_any),
	([key, values]) => [key, filter(values, value => displayed_filter_options.has(key) && value !== current_filter_params[key])],
))

// loop over all products.  For each product, for each alternate option, check "would this be displayed if the alternate option was chosen"
// map of option to set of safe selections
export const calculate_are_all_these_alternative_options_safe_to_click = (products: Product[], alternate_selections: Partial<AlternateOptionsToConsider>, current_filter_params: FilterParams) => {
	const pre_computed_possible_filter_params = object_from_entries(map(object_entries(alternate_selections), ([key, values]: [FilterParamKey, FilterParams[FilterParamKey][]]) => {
		assert(Array.isArray(values))
		return [key, map(values, (value) => {
			return {
				value,
				filter_params: {
					...current_filter_params,
					[key]: value
				} satisfies FilterParams
			}
		})]
	}))


	const param_key_to_set_of_safe_value_selections = new Map<FilterParamKey, Set<FilterParams[FilterParamKey]>>()
	for_each(object_keys(alternate_selections), (key) => {
		param_key_to_set_of_safe_value_selections.set(key, new Set())
	})
	for_each(products, (product) => {
		for_each(object_keys(alternate_selections), (key) => {
			for_each(pre_computed_possible_filter_params[key], (possible_filter_params) => {
				if (product_matches(product, possible_filter_params.filter_params)) {
					param_key_to_set_of_safe_value_selections.get(key)?.add(possible_filter_params.value)
				}
			})
		})
	})

	return (key: FilterParamKey, value: FilterParams[FilterParamKey]): boolean => param_key_to_set_of_safe_value_selections.get(key)?.has(value) ?? false
}
