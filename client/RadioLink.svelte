<script lang="ts" generics="PossibleValue extends string">
	import type { Snippet } from 'svelte'

	let {
		group_name,
		name,
		group_value = $bindable<PossibleValue>(),
		children,
		large = false,
		get_altered_query_string
	}: {
		group_name: string
		name: PossibleValue
		group_value: PossibleValue
		children: Snippet
		large?: boolean
		get_altered_query_string: (param: string, value: string | boolean) => string
	} = $props()

	let active = $derived(group_value === name)
	let href = $derived(get_altered_query_string(group_name, name))

	const onclick = (event: MouseEvent) => {
		event.preventDefault()
		history.replaceState(null, '', href)
		group_value = name
	}
</script>

<a {href} data-active={active} aria-checked={active} role="radio" {onclick} data-large={large}>
	{@render children()}
</a>

<style>
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4px var(--spacing);
		border: 1px solid var(--accent_color);
		border-radius: 4px;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		white-space: nowrap;
		background-color: var(--white);
		font-size: 14px;
	}

	a[data-large='true'] {
		align-items: flex-start;
		padding: 12px calc(var(--spacing));
		white-space: normal;
	}

	/* a:hover {
		border-color: var(--dark_color);
	} */

	a:focus {
		outline: 2px solid var(--accent_color);
		/* outline-offset: 2px; */
	}

	a[data-active='true'] {
		/* border-color: var(--accent_color); */
		background-color: var(--selected_color);
	}
</style>
