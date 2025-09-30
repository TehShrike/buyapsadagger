const in_browser = typeof window !== 'undefined' && window.location

const parse_query_string = (): { [key: string]: string } => {
	const params = new URLSearchParams(window.location.search)
	return Object.fromEntries(params.entries())
}

const update_browser_url = (state: { [key: string]: string }) => {
	const query_string = new URLSearchParams(state).toString()
	const new_url = query_string ? '?' + query_string : ''

	if (new_url) {
		window.history.replaceState({}, '', new_url)
	}
}

export const create_querystring_store = <
	Defaults extends { [key: string]: string }
>(
	defaults: Defaults
) => {
	const initial_params = in_browser ? parse_query_string() : {}
	const params = $state<{ [key: string]: string }>(initial_params)

	// This type is currently a lie since we don't validate that a key
	// necessarily has the same type as the defaults
	const params_with_defaults = $state<
		{ [key: string]: string | undefined } & Defaults
	>({
		...defaults,
		...initial_params,
	})

	$effect(() => {
		update_browser_url(params)
	})

	return {
		params,
		params_with_defaults,
		get_altered_query_string: (
			param: string,
			value: string | boolean
		): string => {
			update_browser_url(params)
			return (
				'?' +
				new URLSearchParams({
					...params,
					[param]: String(value),
				}).toString()
			)
		},
	}
}
