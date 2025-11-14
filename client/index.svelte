<script lang="ts">
	import PistolSizeSelector from './PistolSizeSelector.svelte'
	import FilterSelection from './FilterSelection.svelte'
	import generate_title from './generate_title.ts'
	import { create_querystring_store } from './querystring_store.svelte.ts'
	import daggers_data from './daggers-data.ts'
	import {
		filter_daggers,
		type FilterParams,
		type FilterParamKey,
		type OpticCompatibilityOrAny,
	} from './filter-daggers.ts'
	import { ANY, default_values, FILTER_PARAM_KEYS, SIZES } from './querystring_options.ts'
	import { calculate_displayed_filter_options_per_pistol_size } from './count_possible_options.ts'
	import { map, filter } from '#lib/array.ts'
	import {
		calculate_alternate_option_selections_we_need_to_consider,
		calculate_are_all_these_alternative_options_safe_to_click,
	} from './determine_if_alternate_filter_options_are_safe_to_click.ts'
	import { object_entries, object_from_entries } from '#lib/object.ts'

	const querystring_instance = create_querystring_store<FilterParams>(default_values)

	const get_displayed_filter_options_for_size = calculate_displayed_filter_options_per_pistol_size(
		daggers_data.daggers,
		SIZES,
		FILTER_PARAM_KEYS,
	)

	const displayed_filter_options = $derived(
		get_displayed_filter_options_for_size(querystring_instance.params_with_defaults.size),
	)

	const ignore_filter_options_that_are_not_displayed = (
		displayed_filter_options: Set<FilterParamKey>,
		current_filter_params: FilterParams,
	) => {
		return {
			...default_values,
			...object_from_entries(
				filter(object_entries(current_filter_params), ([key]) => key === 'size' || displayed_filter_options.has(key)),
			),
		}
	}

	const filtered_daggers = $derived(
		filter_daggers(
			daggers_data.daggers,
			ignore_filter_options_that_are_not_displayed(displayed_filter_options, querystring_instance.params_with_defaults),
		).sort((a, b) => a.price - b.price),
	)

	const add_disabled_to_unsafe_options = (
		key: FilterParamKey,
		options: { label: string; value: FilterParams[FilterParamKey] }[],
	) => {
		return map(options, (option) => {
			return {
				...option,
				disabled: !should_this_option_be_enabled(key, option.value),
			}
		})
	}

	// if it's displayed, we need to consider all options that aren't currently selected (except "any")
	const alternate_option_selections_we_need_to_consider = $derived(
		calculate_alternate_option_selections_we_need_to_consider(
			displayed_filter_options,
			querystring_instance.params_with_defaults,
		),
	)
	const is_this_alternate_option_safe_to_click = $derived(
		calculate_are_all_these_alternative_options_safe_to_click(
			daggers_data.daggers,
			alternate_option_selections_we_need_to_consider,
			querystring_instance.params_with_defaults,
		),
	)

	const should_this_option_be_enabled = (key: FilterParamKey, value: FilterParams[FilterParamKey]): boolean =>
		value === ANY ||
		querystring_instance.params_with_defaults[key] === value ||
		is_this_alternate_option_safe_to_click(key, value)
</script>

<div class="container">
	<div class="intro">
		<div>
			<h1 style="color: var(--light_color)">
				Buy a <abbr title="Palmetto State Armory">PSA</abbr> Dagger
			</h1>
			<small style="color: #959595"> The fastest way to browse the Palmetto State Armory Dagger catalog. </small>
		</div>
		<div>
			<details>
				<summary>Why a Dagger?</summary>
				<div>
					<p>
						The Palmetto State Armory Dagger is based on the Glock 19, and <a
							href="https://palmettostatearmory.com/psa-dagger.html"
							rel="noopener"
							target="_blank">is generally parts-compatible with the Glock 19 Gen 3</a
						>. Palmetto State Armory sells reliable gun parts at pretty amazing prices.
					</p>
					<p>
						These pistols work with Glock 17 and 19 magazines, and might work in Glock holsters, though it's safer to
						use ones that are designed for the Dagger. The Micro is about the size of a Glock 43x, the Compact is about
						the size of a Glock 19, and the Full Size is about the size of a Glock 45.
					</p>
				</div>
			</details>
			<details>
				<summary>Why this site?</summary>
				<div>
					<p>
						I like the Dagger and wanted it to have a product listing page that was fast to browse and legible to
						non-gun-nerds like me.
					</p>
					<p>
						I wrote a bit more about making a good product listing page in <a
							href="https://joshduff.com/2025-11-10-making-a-product-listing-page-that-doesnt-suck.html"
							rel="opener"
							target="_blank">this blog post</a
						>.
					</p>
				</div>
			</details>
		</div>
		<div class="card intro-pistol-size-selector">
			<PistolSizeSelector
				bind:size={querystring_instance.params_with_defaults.size}
				get_altered_query_string={querystring_instance.get_altered_query_string}
			/>
		</div>
	</div>
	<div class="filters-and-results">
		<div class="filters card">
			<div class="filters-pistol-size-selector">
				<PistolSizeSelector
					bind:size={querystring_instance.params_with_defaults.size}
					get_altered_query_string={querystring_instance.get_altered_query_string}
				/>
			</div>
			{#if displayed_filter_options.has('longer_barrel')}
				<FilterSelection
					title="Longer Barrel"
					description="Adds about half an inch to the barrel.  Makes it easier to hit what you're aiming at"
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
						{ label: 'RMR', value: 'rmr' },
						{ label: 'Shield RMSc', value: 'shield_rmsc' },
					])}
					get_altered_query_string={querystring_instance.get_altered_query_string}
					bind:selected_value={querystring_instance.params_with_defaults.optic_compatibility}
				/>
			{/if}
			{#if displayed_filter_options.has('slide_coating')}
				<FilterSelection
					title="Slide Coating"
					description="Keep the metal safe from humidity or your corrosive sweat"
					group_name="slide_coating"
					options={add_disabled_to_unsafe_options('slide_coating', [
						{ label: 'Any', value: 'any' },
						{ label: 'Ceramic', value: 'cerakote' },
						{ label: 'Diamond-like', value: 'dlc' },
					])}
					get_altered_query_string={querystring_instance.get_altered_query_string}
					bind:selected_value={querystring_instance.params_with_defaults.slide_coating}
				/>
			{/if}
		</div>
		<div class="products-grid card">
			{#if filtered_daggers.length === 0}
				<div class="no-results">No results for these filter options</div>
			{/if}
			{#each filtered_daggers as product (product.psa_url)}
				<a href={product.psa_url} target="_blank" rel="noopener" class="product-card">
					<h3>
						{generate_title(product, daggers_data, querystring_instance.params_with_defaults)}
					</h3>
					<img src="/images/{product.image_file_name}" alt={product.psa_product_name} />
					<div class="price">${product.price.toFixed(2)}</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		width: 100%;
		max-width: 1400px;
		box-sizing: border-box;
		gap: calc(var(--spacing) * 2);
		padding: calc(var(--spacing) * 2);
	}

	.intro {
		display: flex;
		flex-direction: column;
		gap: var(--spacing);
	}

	details {
		max-width: 600px;
		color: var(--light_color);

		&,
		& > div {
			display: flex;
			flex-direction: column;
			gap: calc(var(--spacing) / 2);
		}

		& > div {
			font-size: 16px;
			padding-bottom: var(--spacing);
		}

		summary {
			cursor: pointer;
		}
	}

	.filters-and-results {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		gap: calc(var(--spacing) * 1.5);
	}

	a {
		color: var(--light_color);
	}

	.filters-pistol-size-selector {
		display: none;
	}

	@media (max-width: 800px) {
		.filters-and-results {
			flex-direction: column;
			align-items: center;
		}

		.products-grid {
			align-self: stretch;
		}

		.intro {
			align-items: center;
		}

		.intro > * {
			width: 100%;
			max-width: 550px;
		}

		.intro-pistol-size-selector {
			display: none;
		}

		.filters-pistol-size-selector {
			display: block;
		}
	}

	.filters {
		display: flex;
		flex-direction: column;
		gap: var(--spacing);
		flex-basis: max(300px, 20%);
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: var(--spacing);
		flex-grow: 1;

		@media (max-width: 1100px) {
			grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
		}
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
</style>
