import { build, context } from "esbuild"
import sveltePlugin from "esbuild-svelte"

const is_watch = process.argv.includes("--watch")

const build_options = {
	entryPoints: ["client/index.ts"],
	bundle: true,
	outdir: "public/build",
	plugins: [
		sveltePlugin({
			compilerOptions: {
				dev: is_watch,
			},
		}),
	],
	format: "esm" as const,
	target: "es2020",
	loader: {
		".ts": "ts",
	},
} as const

if (is_watch) {
	const ctx = await context(build_options)
	await ctx.watch()
	console.log("Watching for changes...")
} else {
	await build(build_options)
	console.log("Build complete")
}
