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

const create_proxy_with_default_values_proxying_to_querystring_params = <
	Defaults extends { [key: string]: string }
>({
	params,
	defaults,
	initial_params,
}: {
	params: { [key: string]: string }
	defaults: Defaults
	initial_params: { [key: string]: string }
}) => {
	return new Proxy(
		$state<{ [key: string]: string | undefined } & Defaults>({
			...defaults,
			...initial_params,
		}),
		{
			set(target, prop, value) {
				if (prop in defaults && defaults[prop as keyof Defaults] === value) {
					delete params[prop as keyof typeof params]
				} else {
					params[prop as keyof typeof params] = value
				}

				target[prop as keyof typeof target] = value
				return true
			},
			deleteProperty(target, prop) {
				delete params[prop as keyof typeof params]

				if (prop in defaults) {
					type ReasonableTargetProperty = keyof typeof target
					const default_value = defaults[
						prop as keyof Defaults
					] as (typeof target)[ReasonableTargetProperty]

					target[prop as ReasonableTargetProperty] = default_value
				} else {
					delete target[prop as keyof typeof target]
				}

				return true
			},
		}
	)
}

export const create_querystring_store = <
	Defaults extends { [key: string]: string }
>(
	defaults: Defaults
) => {
	const initial_params = in_browser ? parse_query_string() : {}
	const params = $state(initial_params)

	// This type is currently a lie since we don't validate that a key
	// necessarily has the same type as the defaults
	const params_with_defaults =
		create_proxy_with_default_values_proxying_to_querystring_params({
			params,
			defaults,
			initial_params,
		})

	$effect(() => {
		update_browser_url(params)
	})

	return {
		// params aren't mirrored back to params_with_defaults yet
		// params,

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
