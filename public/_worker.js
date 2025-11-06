export default {
	async fetch(request, env) {
		const url = new URL(request.url)

		if (url.hostname === 'buyadagger.pages.dev') {
			const redirectUrl = `https://www.buyadagger.com${url.pathname}${url.search}${url.hash}`
			return Response.redirect(redirectUrl, 301)
		}

		return env.ASSETS.fetch(request)
	}
}
