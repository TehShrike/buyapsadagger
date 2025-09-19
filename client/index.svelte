<script lang="ts">
	import RadioLink from './RadioLink.svelte'

	let size = $state(null)
</script>

<div class="container">
	<div class="intro">
		<h1>Buy a PSA Dagger</h1>
		<div class="pistol-size">
			<RadioLink group_name="size" name="micro" bind:group_value={size}>
				<img src="silhouettes/micro.svg" alt="Micro pistol silhouette" />
				Micro
			</RadioLink>
			<RadioLink group_name="size" name="compact" bind:group_value={size}>
				<img src="silhouettes/compact.svg" alt="Compact pistol silhouette" />
				Compact
			</RadioLink>
			<RadioLink group_name="size" name="full_size_s" bind:group_value={size}>
				<img
					src="silhouettes/full_size_s.svg"
					alt="Full size pistol silhouette"
				/>
				Full Size
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
	.pistol-size {
		display: flex;
		flex-direction: row;
		gap: var(--spacing);
		justify-content: center;
	}
	.container {
		--spacing: 16px;

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		width: 100%;
		max-width: 1200px;
		gap: var(--spacing);
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
