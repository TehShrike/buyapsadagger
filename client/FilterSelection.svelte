<script lang="ts" generics="Value extends string">
	import RadioLink from './RadioLink.svelte'

	let {
		title,
		description,
		group_name,
		options,
		selected_value = $bindable<Value>(),
		get_altered_query_string,
	}: {
		title: string,
		description: string,
		group_name: string,
		options: {
			label: string,
			value: Value,
			disabled?: boolean,
		}[]
		selected_value: Value,
		get_altered_query_string: (param: string, value: string | boolean) => string,
	} = $props()
</script>

<div class=filter-selection>
	<div class="explanation">
		<strong>{title}</strong>
		<small>{description}</small>
	</div>
	<div class="filter-options">
		{#each options as option}
			<RadioLink
				{group_name}
				name={option.value}
				bind:group_value={selected_value}
				{get_altered_query_string}
				disabled={option.disabled ?? false}
			>
				{option.label}
			</RadioLink>
		{/each}
	</div>
</div>

<style>
	.filter-selection {
		display: flex;
		flex-direction: column;
		gap: calc(var(--spacing) / 2);
		--close: 4px;
	}

	@media (max-width: 800px) {
		.filter-selection {
			--close: 2px;
		}
	}

	.explanation {
		display: flex;
		flex-direction: column;
		gap: var(--close);
	}

	strong {
		font-weight: 600;
		font-size: 14px;
		display: block;
	}

	small {
		font-size: 12px;
		color: var(--lighter_foreground_text_color);
		line-height: 1.4;
		display: block;
	}

	.filter-options {
		display: flex;
		gap: 6px;

		& > :global(*) {
			flex-basis: 0;
			flex-grow: 1;
		}
	}
</style>
