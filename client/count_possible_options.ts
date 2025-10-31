/*
- once, for each size option
	- For each filter option, make a set of the different possible selection values for that size of pistol
	- Make a map of "displayed filter options", where an option is displayed if there are at least 2 selection choices for that option
*/

import type { Product } from './product.d.ts'
import type { FilterParamKey } from './filter-daggers.ts'
import { for_each } from '#lib/array.ts'
import type { Size } from './option_types.js'
import assert from '#lib/assert.ts'

const calculate_possible_filter_param_values = (products: Product[], sizes: Size[], keys: FilterParamKey[]) => {
	const size_to_filter_param_values = new Map<Size, Map<FilterParamKey, Set<string | boolean>>>()
	for_each(sizes, (size) => {
		size_to_filter_param_values.set(size, new Map())
	})

	for_each(products, (product) => {
		const key_map = size_to_filter_param_values.get(product.size)
		assert(key_map)

		for_each(keys, (key) => {
			if (product[key] === null) {
				return
			}

			if (!key_map.has(key)) {
				key_map.set(key, new Set())
			}
			const filter_set = key_map.get(key)
			assert(filter_set)
			filter_set.add(product[key])
		})
	})

	return size_to_filter_param_values
}

export const calculate_displayed_filter_options_per_pistol_size = (products: Product[], sizes: Size[], keys: FilterParamKey[]) => {
	const size_to_filter_param_values = calculate_possible_filter_param_values(products, sizes, keys)
	const output = new Map<Size, Set<FilterParamKey>>()

	for_each(sizes, (size) => {
		const key_map = size_to_filter_param_values.get(size)
		assert(key_map)
		const displayed_keys = new Set<FilterParamKey>()
		for_each(keys, (key) => {
			const filter_set = key_map.get(key)
			assert(filter_set)
			if (filter_set.size >= 2) {
				displayed_keys.add(key)
			}
		})
		output.set(size, displayed_keys)
	})

	return (size: Size): Set<FilterParamKey> => {
		const displayed_keys = output.get(size)
		assert(displayed_keys)
		return displayed_keys
	}
}

/*
- each time any selections are changed
	- for each filter option, make a set of selections that exist among the currently displayed pistols
	- Make a map of "enabled filter options", where an option is enabled if the previous set contains >=1 selections
*/

export const calculate_enabled_filter_options = (currently_displayed_products: Product[], keys: FilterParamKey[]) => {
	const param_key_to_unique_values = new Map<FilterParamKey, Set<string | boolean>>()

	for_each(keys, (key) => {
		param_key_to_unique_values.set(key, new Set())
	})

	for_each(currently_displayed_products, (product) => {
		for_each(keys, (key) => {
			if (product[key] === null) {
				return
			}

			const value_set = param_key_to_unique_values.get(key)
			assert(value_set)
			value_set.add(product[key])
		})
	})

	return (key: FilterParamKey) => (value: string | boolean) => param_key_to_unique_values.get(key)?.has(value) ?? false
}
