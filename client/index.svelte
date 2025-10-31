<script lang="ts">
	import PistolSizeSelector from './PistolSizeSelector.svelte'
	import FilterSelection from './FilterSelection.svelte'
	import generate_title from './generate_title.ts'
	import { create_querystring_store } from './querystring_store.svelte.ts'
	import daggers_data from './daggers-data.ts'
	import { filter_daggers, type FilterParams, type FilterParamKey, type OpticCompatibilityOrAny } from './filter-daggers.ts'
	import { ANY, default_values, FILTER_PARAM_KEYS, SIZES } from './querystring_options.ts'
	import { calculate_displayed_filter_options_per_pistol_size } from './count_possible_options.ts'
	import { map, filter } from '#lib/array.ts'
	import { calculate_alternate_option_selections_we_need_to_consider, calculate_are_all_these_alternative_options_safe_to_click } from './determine_if_alternate_filter_options_are_safe_to_click.ts'
	import { object_entries, object_from_entries } from '#lib/object.ts'

	const querystring_instance = create_querystring_store<FilterParams>(default_values)

	const get_displayed_filter_options_for_size = calculate_displayed_filter_options_per_pistol_size(daggers_data.daggers, SIZES, FILTER_PARAM_KEYS)

	const remove_has_cover_plate_if_optic_compatibility_is_none = (displayed_filter_options: Set<FilterParamKey>, current_optic_compatibility: OpticCompatibilityOrAny) => {
		const new_set = new Set(displayed_filter_options)
		if (current_optic_compatibility === 'none') {
			new_set.delete('has_cover_plate')
		}
		return new_set
	}

	const displayed_filter_options = $derived(
		remove_has_cover_plate_if_optic_compatibility_is_none(
			get_displayed_filter_options_for_size(querystring_instance.params_with_defaults.size),
			querystring_instance.params_with_defaults.optic_compatibility
		)
	)

	const ignore_filter_options_that_are_not_displayed = (displayed_filter_options: Set<FilterParamKey>, current_filter_params: FilterParams) => {
		return {
			...default_values,
			...object_from_entries(filter(object_entries(current_filter_params), ([key]) => key === 'size' || displayed_filter_options.has(key))),
		}
	}

	const filtered_daggers = $derived(
		filter_daggers(daggers_data.daggers, ignore_filter_options_that_are_not_displayed(displayed_filter_options, querystring_instance.params_with_defaults))
			.sort((a, b) => a.price - b.price)
	)

	const add_disabled_to_unsafe_options = (key: FilterParamKey, options: { label: string, value: FilterParams[FilterParamKey] }[]) => {
		return map(options, (option) => {
			return {
				...option,
				disabled: !should_this_option_be_enabled(key, option.value),
			}
		})
	}

	// if it's displayed, we need to consider all options that aren't currently selected (except "any")
	const alternate_option_selections_we_need_to_consider = $derived(calculate_alternate_option_selections_we_need_to_consider(displayed_filter_options, querystring_instance.params_with_defaults))
	const is_this_alternate_option_safe_to_click = $derived(calculate_are_all_these_alternative_options_safe_to_click(daggers_data.daggers, alternate_option_selections_we_need_to_consider, querystring_instance.params_with_defaults))

	const should_this_option_be_enabled = (key: FilterParamKey, value: FilterParams[FilterParamKey]): boolean => value === ANY
		|| querystring_instance.params_with_defaults[key] === value
		|| is_this_alternate_option_safe_to_click(key, value)


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
			{#if filtered_daggers.length === 0}
				<div class="no-results">No results for these filter options</div>
			{/if}
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
		align-items: flex-start;
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
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: var(--spacing);
		flex-grow: 1;
	}

	.no-results {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		font-weight: bold;
		color: var(--dark_color);
	}

	.product-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
