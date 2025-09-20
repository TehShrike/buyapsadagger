<script lang="ts">
	let { image, text } = $props()
</script>

<div class="image-link-layout">
	<div class="image">
		{@render image()}
	</div>
	<div class="text">
		{@render text()}
	</div>
</div>

<style>
	.image-link-layout {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		gap: 12px;
	}

	.image {
		flex-shrink: 0;
	}

	.text {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
</style>