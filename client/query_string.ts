export const get_altered_query_string = (
	param: string,
	value: string | number | boolean
): string => {
	const params = new URLSearchParams(window.location.search)
	params.set(param, String(value))
	return '?' + params.toString()
}
