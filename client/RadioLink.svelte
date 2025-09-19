<script lang="ts">
	import { get_altered_query_string } from './query_string.ts'

	let { group_name, name, group_value = $bindable(), children } = $props()

	let active = $derived(group_value === name)
	let href = $derived(get_altered_query_string(group_name, name))

	const onclick = (event: MouseEvent) => {
		event.preventDefault()
		history.replaceState(null, '', href)
		group_value = name
	}
</script>

<a {href} data-active={active} aria-checked={active} role="radio" {onclick}>
	{@render children()}
</a>

<style>
	a {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 12px 16px;
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease;
		cursor: pointer;
	}

	a:hover {
		border-color: #b0b0b0;
	}

	a:focus {
		outline: 2px solid #007acc;
		outline-offset: 2px;
	}

	a[data-active='true'] {
		border-color: #007acc;
		background-color: #f8f9ff;
	}
</style>
