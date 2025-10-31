<script lang="ts">
	import type { Product } from './product.d.ts'
	import PistolSizeSelector from './PistolSizeSelector.svelte'
	import FilterSelection from './FilterSelection.svelte'
	import generate_title from './generate_title.ts'
	import { create_querystring_store } from './querystring_store.svelte.ts'
	import daggers_data from './daggers-data.ts'
	import { filter_daggers, type FilterParams, type FilterParamKey, product_matches } from './filter-daggers.ts'
	import { ANY, default_values, FILTER_PARAM_KEYS, SIZES } from './querystring_options.ts'
	import { calculate_displayed_filter_options_per_pistol_size, calculate_enabled_filter_options } from './count_possible_options.ts'
	import { filter, map, for_each } from '#lib/array.ts'
	import assert from '#lib/assert.ts'


	const querystring_instance = create_querystring_store<FilterParams>(default_values)

	const get_displayed_filter_options_for_size = calculate_displayed_filter_options_per_pistol_size(daggers_data.daggers, SIZES, FILTER_PARAM_KEYS)

	const displayed_filter_options = $derived(
		get_displayed_filter_options_for_size(querystring_instance.params_with_defaults.size)
	)

	const filtered_daggers = $derived(
		filter_daggers(daggers_data.daggers, querystring_instance.params_with_defaults).sort((a, b) => a.price - b.price)
	)

	const get_value_enabled_for_filter_option = $derived(
		calculate_enabled_filter_options(filtered_daggers, Array.from(displayed_filter_options))
	)

	type AlternateOptionsToConsider = Record<Exclude<FilterParamKey, 'size'>, FilterParams[FilterParamKey][]>
	const possible_filter_option_values_excluding_any: AlternateOptionsToConsider = {
		longer_barrel: ['true', 'false'] as const,
		threaded_barrel: ['true', 'false'] as const,
		night_sight: ['true', 'false'] as const,
		optic_compatibility: ['none', 'rmr', 'shield_rmsc'] as const,
		has_cover_plate: ['true', 'false'] as const,
	}

	// if it's displayed, we need to consider all options that aren't currently selected (except "any")
	const alternate_option_selections_we_need_to_consider = $derived(Object.fromEntries(map(
		Object.entries(possible_filter_option_values_excluding_any),
		([key, values]) => [key, filter(values, value => displayed_filter_options.has(key as FilterParamKey) && value !== querystring_instance.params_with_defaults[key])],
	)))

	const object_keys = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[]
	const object_entries = <T extends Record<string, unknown>>(obj: T) => Object.entries(obj) as [keyof T, T[keyof T] extends unknown[] ? T[keyof T] : never][]
	const object_from_entries = <KEY extends string, VALUE>(entries: [KEY, VALUE][]): { [s in KEY]: VALUE } =>
		// @ts-expect-error Object.entries is dumb and always returns string instead of the type of the key
		Object.fromEntries(entries)

	// loop over all products.  For each product, for each alternate option, check "would this be displayed if the alternate option was chosen"
	// map of option to set of safe selections
	const are_all_these_alternative_options_safe_to_click = (products: Product[], alternate_selections: Partial<AlternateOptionsToConsider>, current_filter_params: FilterParams) => {
		const pre_computed_possible_filter_params = object_from_entries(map(object_entries(alternate_selections), ([key, values]: [FilterParamKey, FilterParams[FilterParamKey][]]) => {
			assert(Array.isArray(values))
			assert(values !== undefined)
			return [key, map(values, (value) => {
				return {
					value,
					filter_params: { ...current_filter_params, [key]: value } as FilterParams
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

	const is_this_alternate_option_safe_to_click = $derived(are_all_these_alternative_options_safe_to_click(daggers_data.daggers, alternate_option_selections_we_need_to_consider, querystring_instance.params_with_defaults))

	const should_this_option_be_enabled = (key: FilterParamKey, value: FilterParams[FilterParamKey]): boolean => value === ANY
		|| querystring_instance.params_with_defaults[key] === value
		|| is_this_alternate_option_safe_to_click(key, value)

	const add_disabled_to_unsafe_options = (key: FilterParamKey, options: { label: string, value: FilterParams[FilterParamKey] }[]) => {
		return map(options, (option) => {
			return {
				...option,
				disabled: !should_this_option_be_enabled(key, option.value),
			}
		})
	}
</script>

<div class="container">
	<div class="intro">
		<h1 style="color: var(--light_color)">Buy a PSA Dagger</h1>
		<div class="card">
			<PistolSizeSelector
				bind:size={querystring_instance.params_with_defaults.size}
				get_altered_query_string={querystring_instance.get_altered_query_string}
			/>
		</div>
	</div>
	<div class="filters-and-results">
		<div class="filters card">
			<h2 style="color: var(--dark_color); border-bottom: 1px solid var(--dark_color); padding-bottom: 8px;">Filters</h2>
			{#if displayed_filter_options.has('longer_barrel')}
				<FilterSelection
					title="Longer Barrel"
					description="Adds about half an inch to the barrel. Makes it easier to hit what you're aiming at"
					group_name="longer_barrel"
					options={add_disabled_to_unsafe_options('longer_barrel', [
						{ label: 'Either', value: 'any' },
						{ label: 'Yes', value: 'true' },
						{ label: 'No', value: 'false' },
					])}
					get_altered_query_string={querystring_instance.get_altered_query_string}
					bind:selected_value={querystring_instance.params_with_defaults.longer_barrel}
				/>
			{/if}
			{#if displayed_filter_options.has('threaded_barrel')}
				<FilterSelection
					title="Threaded Barrel"
					description="If you want to be able to stick a suppressor or flash hider or something on your gun"
					group_name="threaded_barrel"
					options={add_disabled_to_unsafe_options('threaded_barrel', [
						{ label: 'Either', value: 'any' },
						{ label: 'Yes', value: 'true' },
						{ label: 'No', value: 'false' },
					])}
					get_altered_query_string={querystring_instance.get_altered_query_string}
					bind:selected_value={querystring_instance.params_with_defaults.threaded_barrel}
				/>
			{/if}
			{#if displayed_filter_options.has('night_sight')}
				<FilterSelection
					title="Night Sight"
					description="The sights glow in the dark"
					group_name="night_sight"
					options={add_disabled_to_unsafe_options('night_sight', [
						{ label: 'Either', value: 'any' },
						{ label: 'Yes', value: 'true' },
						{ label: 'No', value: 'false' },
					])}
					get_altered_query_string={querystring_instance.get_altered_query_string}
					bind:selected_value={querystring_instance.params_with_defaults.night_sight}
				/>
			{/if}
			{#if displayed_filter_options.has('optic_compatibility')}
				<FilterSelection
					title="Optic Compatibility"
					description=""
					group_name="optic_compatibility"
					options={add_disabled_to_unsafe_options('optic_compatibility', [
						{ label: 'Any', value: 'any' },
						{ label: 'None', value: 'none' },
						{ label: 'RMR', value: 'rmr' },
						{ label: 'Shield RMSc', value: 'shield_rmsc' },
					])}
					get_altered_query_string={querystring_instance.get_altered_query_string}
					bind:selected_value={querystring_instance.params_with_defaults.optic_compatibility}
				/>
			{/if}
			{#if displayed_filter_options.has('has_cover_plate')}
				<FilterSelection
					title="Has Cover Plate"
					description="If you're not going to put an optic on right away"
					group_name="has_cover_plate"
					options={add_disabled_to_unsafe_options('has_cover_plate', [
						{ label: 'Either', value: 'any' },
						{ label: 'Yes', value: 'true' },
						{ label: 'No', value: 'false' },
					])}
					get_altered_query_string={querystring_instance.get_altered_query_string}
					bind:selected_value={querystring_instance.params_with_defaults.has_cover_plate}
				/>
			{/if}
		</div>
		<div class="products-grid card">
			{#each filtered_daggers as product}
				<a href={product.psa_url} target="_blank" rel="noopener" class="product-card">
					<h3>{generate_title(product, daggers_data, querystring_instance.params_with_defaults)}</h3>
					<img src="/images/{product.image_file_name}" alt={product.psa_product_name} />
					<div class="price">${product.price.toFixed(2)}</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		--base_image_width: 100px;

		@media (max-width: 800px) {
			--base_image_width: 80px;
		}

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		width: 100%;
		max-width: 1200px;
		box-sizing: border-box;
		gap: calc(var(--spacing) * 2);
		padding: calc(var(--spacing) * 2);
	}

	.intro {
		display: flex;
		flex-direction: column;
		gap: calc(var(--spacing) * 2);
	}

	.filters-and-results {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: space-between;
		gap: calc(var(--spacing) * 1.5);
	}

	@media (max-width: 800px) {
		.filters-and-results {
			flex-direction: column;
		}
	}

	.filters {
		display: flex;
		flex-direction: column;
		gap: var(--spacing);
		flex-basis: 250px;
		flex-grow: 0;
		flex-shrink: 0;
	}

	.products-grid {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--spacing);
		align-items: stretch;
	}

	.product-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-basis: 190px;
		flex-grow: 1;
		padding: var(--spacing);
		border: 1px solid #ccc;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		background-color: var(--white);
	}

	.product-card:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.product-card h3 {
		font-size: 14px;
		margin: 0 0 8px 0;
		overflow: hidden;
		display: -webkit-box;
		line-clamp: 4;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}

	.product-card img {
		width: 100%;
		height: auto;
		object-fit: contain;
		margin-bottom: 8px;
	}

	.product-card .price {
		font-weight: bold;
		margin-top: auto;
	}

	h2 {
		font-size: 20px;
	}
</style>
