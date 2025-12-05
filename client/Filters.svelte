<script lang="ts">
	import PistolSizeSelector from './PistolSizeSelector.svelte'
	import FilterSelection from './FilterSelection.svelte'
	import type { FilterParams, FilterParamKey } from './filter-daggers.ts'
	import { map } from '#lib/array.ts'

	let {
		displayed_filter_options,
		params_with_defaults = $bindable(),
		get_altered_query_string,
		should_this_option_be_enabled,
	}: {
		displayed_filter_options: Set<FilterParamKey>
		params_with_defaults: FilterParams
		get_altered_query_string: (altered_values: Partial<FilterParams>) => string
		should_this_option_be_enabled: (key: FilterParamKey, value: FilterParams[FilterParamKey]) => boolean
	} = $props()

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
</script>

<div class="filters card">
	<div class="filters-pistol-size-selector">
		<PistolSizeSelector
			bind:size={params_with_defaults.size}
			{get_altered_query_string}
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
			{get_altered_query_string}
			bind:selected_value={params_with_defaults.longer_barrel}
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
			{get_altered_query_string}
			bind:selected_value={params_with_defaults.threaded_barrel}
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
			{get_altered_query_string}
			bind:selected_value={params_with_defaults.night_sight}
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
			{get_altered_query_string}
			bind:selected_value={params_with_defaults.optic_compatibility}
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
			{get_altered_query_string}
			bind:selected_value={params_with_defaults.slide_coating}
		/>
	{/if}
</div>

<style>
	.filters {
		display: flex;
		flex-direction: column;
		gap: var(--spacing);
		flex-basis: max(300px, 20%);
	}

	.filters-pistol-size-selector {
		display: none;
	}

	@media (max-width: 800px) {
		.filters-pistol-size-selector {
			display: block;
		}
	}
</style>
