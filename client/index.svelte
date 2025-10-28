<script lang="ts">
	import PistolSizeSelector from './PistolSizeSelector.svelte'
	import FilterSelection from './FilterSelection.svelte'
	import generate_title from './generate_title.ts'
	import { create_querystring_store } from './querystring_store.svelte.ts'
	import daggers_data from './daggers-data.ts'
	import { filter_daggers, type FilterParams } from './filter-daggers.ts'


	const querystring_instance = create_querystring_store<FilterParams>({
		size: 'compact',
		extra_long_barrel: 'any',
		threaded_barrel: 'any',
		night_sight: 'any',
		optic_compatibility: 'any',
		has_cover_plate: 'any',
	})

	const filtered_daggers = $derived(
		filter_daggers(daggers_data.daggers, querystring_instance.params_with_defaults).sort((a, b) => a.price - b.price)
	)
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
			<FilterSelection
				title="Longer Barrel"
				description="Adds about half an inch to the barrel. Makes it easier to hit what you're aiming at."
				group_name="extra_long_barrel"
				options={[
					{ label: 'Either', value: 'any' },
					{ label: 'Yes', value: 'true' },
					{ label: 'No', value: 'false' },
				]}
				get_altered_query_string={querystring_instance.get_altered_query_string}
				bind:selected_value={querystring_instance.params_with_defaults.extra_long_barrel}
			/>
			<FilterSelection
				title="Threaded Barrel"
				description="If you want to be able to stick a suppressor or flash hider or something on your gun"
				group_name="threaded_barrel"
				options={[
					{ label: 'Either', value: 'any' },
					{ label: 'Yes', value: 'true' },
					{ label: 'No', value: 'false' },
				]}
				get_altered_query_string={querystring_instance.get_altered_query_string}
				bind:selected_value={querystring_instance.params_with_defaults.threaded_barrel}
			/>
			<FilterSelection
				title="Night Sight"
				description="The sights glow in the dark"
				group_name="night_sight"
				options={[
					{ label: 'Either', value: 'any' },
					{ label: 'Yes', value: 'true' },
					{ label: 'No', value: 'false' },
				]}
				get_altered_query_string={querystring_instance.get_altered_query_string}
				bind:selected_value={querystring_instance.params_with_defaults.night_sight}
			/>
			<FilterSelection
				title="Optic Compatibility"
				description=""
				group_name="optic_compatibility"
				options={[
					{ label: 'Any', value: 'any' },
					{ label: 'None', value: 'none' },
					{ label: 'RMR', value: 'rmr' },
					{ label: 'Shield RMSc', value: 'shield_rmsc' },
				]}
				get_altered_query_string={querystring_instance.get_altered_query_string}
				bind:selected_value={querystring_instance.params_with_defaults.optic_compatibility}
			/>
			<FilterSelection
				title="Has Cover Plate"
				description="If you're not going to put an optic on right away"
				group_name="has_cover_plate"
				options={[
					{ label: 'Either', value: 'any' },
					{ label: 'Yes', value: 'true' },
					{ label: 'No', value: 'false' },
				]}
				get_altered_query_string={querystring_instance.get_altered_query_string}
				bind:selected_value={querystring_instance.params_with_defaults.has_cover_plate}
			/>
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
