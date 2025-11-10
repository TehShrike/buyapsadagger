<script lang="ts">
	import RadioLink from './RadioLink.svelte'
	import ImageLinkLayout from './ImageLinkLayout.svelte'
	import type { Size } from './option_types.d.ts'

	let {
		size = $bindable(),
		get_altered_query_string,
	}: {
		size: Size
		get_altered_query_string: (param: string, value: string | boolean) => string,
	} = $props()
</script>

<div class="pistol-size">
	<RadioLink group_name="size" name="micro" bind:group_value={size} large {get_altered_query_string}>
		<ImageLinkLayout>
			{#snippet image()}
				<img
					src="silhouettes/micro.svg"
					alt="Micro pistol silhouette"
					style="width: var(--base_image_width);"
				/>
			{/snippet}
			{#snippet text()}
				<div class="text_snippet">
					<strong>Micro</strong>
					<small>It's pretty small.  Magazine holds 15 rounds</small>
				</div>
			{/snippet}
		</ImageLinkLayout>
	</RadioLink>
	<RadioLink group_name="size" name="compact" bind:group_value={size} large {get_altered_query_string}>
		<ImageLinkLayout>
			{#snippet image()}
				<img
					src="silhouettes/compact.svg"
					alt="Compact pistol silhouette"
					style="width: calc(var(--base_image_width) * 1.14369501);"
				/>
			{/snippet}
			{#snippet text()}
				<div class="text_snippet">
					<strong>Compact</strong>
					<small>About half an inch longer, several credit cards wider</small>
				</div>
			{/snippet}
		</ImageLinkLayout>
	</RadioLink>
	<RadioLink group_name="size" name="full_size_s" bind:group_value={size} large {get_altered_query_string}>
		<ImageLinkLayout>
			{#snippet image()}
				<img
					src="silhouettes/full_size_s.svg"
					alt="Full size pistol silhouette"
					style="width: calc(var(--base_image_width) * 1.14369501);"
				/>
			{/snippet}
			{#snippet text()}
				<div class="text_snippet">
					<strong>Full Size</strong>
					<small>
						Longer handle if you have big hands or want an extra 2 rounds per
						magazine
					</small>
				</div>
			{/snippet}
		</ImageLinkLayout>
	</RadioLink>
</div>

<style>
	.pistol-size {
		--base_image_width: 100px;

		@media (max-width: 1100px) {
			--base_image_width: 80px;
		}

		display: flex;
		flex-direction: row;
		gap: var(--spacing);
		justify-content: center;

		& > :global(*) {
			flex-basis: 0;
			flex-grow: 1;
		}

		@media (max-width: 800px) {
			flex-direction: column;
		}
	}

	.text_snippet {
		display: flex;
		flex-direction: column;
		gap: calc(var(--spacing) / 2);
	}

	small {
		color: var(--lighter_foreground_text_color);
	}
</style>
