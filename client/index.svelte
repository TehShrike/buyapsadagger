<script lang="ts">
	import type { Size } from './option_types.d.ts'
	import PistolSizeSelector from './PistolSizeSelector.svelte'

	let size = $state<Size>('compact')
</script>

<div class="container">
	<div class="intro">
		<h1>Buy a PSA Dagger</h1>
		<PistolSizeSelector bind:size />
	</div>
	<div class="filters-and-results">
		<div class="filters">
			<h2>Filters</h2>
			<div>
				<strong>Threaded Barrel</strong>
				<small>
					If you want to be able to stick a suppressor or flash hider or
					something on your gun
				</small>
			</div>
			<div>
				<strong>Night Sight</strong>
				<small>they glow in the dark</small>
			</div>
			<div>
				<strong>Optic Compatibility</strong>
			</div>
			<div>
				<strong>Has Cover Plate</strong>
				<small>if you're not going to put an optic on right away</small>
			</div>
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
