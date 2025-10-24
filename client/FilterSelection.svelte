<script lang="ts" generics="Value">
	let {
		title,
		description,
		options,
		selected_value = $bindable<Value>(),
	}: {
		title: string,
		description: string,
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
			<label data-active={selected_value === option.value}>
				<input type="radio" bind:group={selected_value} value={option.value} />
				{option.label}
			</label>
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

	label {
		flex: 1;
		padding: 6px 12px;
		border: 1px solid #ddd;
		background: white;
		border-radius: 4px;
		font-size: 13px;
		cursor: pointer;
		text-align: center;
		white-space: nowrap;
	}

	label:hover {
		border-color: #999;
	}

	label[data-active='true'] {
		background: var(--selected_color);
		color: var(--accent_color);
		border-color: var(--accent_color);
	}

	input {
		display: none;
	}
</style>
