<script>
	let name = 'world'
</script>

<div class="container">
	<div class="intro">
		<h1>Buy a PSA Dagger</h1>
		<p>First three choices go here</p>
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
