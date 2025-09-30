<script lang="ts">
	import RadioLink from './RadioLink.svelte'
	import ImageLinkLayout from './ImageLinkLayout.svelte'
	import type { Size } from './option_types.d.ts'

	let {
		size = $bindable(),
	}: {
		size: Size
	} = $props()
</script>

<div class="pistol-size">
	<RadioLink group_name="size" name="micro" bind:group_value={size}>
		<ImageLinkLayout>
			{#snippet image()}
				<img
					src="silhouettes/micro.svg"
					alt="Micro pistol silhouette"
					style="width: var(--base_image_width);"
				/>
			{/snippet}
			{#snippet text()}
				Micro
				<small>It's pretty small</small>
			{/snippet}
		</ImageLinkLayout>
	</RadioLink>
	<RadioLink group_name="size" name="compact" bind:group_value={size}>
		<ImageLinkLayout>
			{#snippet image()}
				<img
					src="silhouettes/compact.svg"
					alt="Compact pistol silhouette"
					style="width: calc(var(--base_image_width) * 1.14369501);"
				/>
			{/snippet}
			{#snippet text()}
				Compact
				<small>
					Several credit cards wider, more than half an inch longer
				</small>
			{/snippet}
		</ImageLinkLayout>
	</RadioLink>
	<RadioLink group_name="size" name="full_size_s" bind:group_value={size}>
		<ImageLinkLayout>
			{#snippet image()}
				<img
					src="silhouettes/full_size_s.svg"
					alt="Full size pistol silhouette"
					style="width: calc(var(--base_image_width) * 1.14369501);"
				/>
			{/snippet}
			{#snippet text()}
				Full Size
				<small>
					Longer handle if you have big hands or want the extra 2 rounds per
					magazine
				</small>
			{/snippet}
		</ImageLinkLayout>
	</RadioLink>
</div>

<style>
	.pistol-size {
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
</style>
