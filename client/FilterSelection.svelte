<script lang="ts" generics="Value extends string">
	import RadioLink from './RadioLink.svelte'

	let {
		title,
		description,
		group_name,
		options,
		selected_value = $bindable<Value>(),
	}: {
		title: string,
		description: string,
		group_name: string,
		options: {
			label: string,
			value: Value,
		}[]
		selected_value: Value,
	} = $props()
</script>

<div>
	<strong>{title}</strong>
	<small>{description}</small>
	<div class="filter-options">
		{#each options as option}
			<RadioLink {group_name} name={option.value} bind:group_value={selected_value}>
				{option.label}
			</RadioLink>
		{/each}
	</div>
</div>

<style>
	strong {
		font-weight: 600;
		font-size: 14px;
		margin-bottom: 4px;
		display: block;
	}

	small {
		font-size: 12px;
		color: #666;
		margin-bottom: 8px;
		line-height: 1.4;
		display: block;
	}

	.filter-options {
		display: flex;
		gap: 6px;
	}
</style>
