<script lang="ts">
	import RadioLink from './RadioLink.svelte'
	import ImageLinkLayout from './ImageLinkLayout.svelte'

	let size = $state(null)
</script>

<div class="container">
	<div class="intro">
		<h1>Buy a PSA Dagger</h1>
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
	</div>
	<div class="filters-and-results">
		<div class="filters">
			<h2>Filters</h2>
		</div>
		<div class="results">
			<h2>Results</h2>
		</div>
	</div>
</div>

<style>
	.container {
		--spacing: 16px;
		--base_image_width: 100px;

		@media (max-width: 800px) {
			--spacing: 8px;
			--base_image_width: 80px;
		}

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		width: 100%;
		max-width: 1200px;
		box-sizing: border-box;
		gap: var(--spacing);
		padding: var(--spacing);
	}

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

	.filters-and-results {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: space-between;
		gap: var(--spacing);
	}

	@media (max-width: 800px) {
		.filters-and-results {
			flex-direction: column;
		}
	}

	.filters {
		width: 300px;
	}

	.results {
		flex: 1;
	}
</style>
