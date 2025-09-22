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
		align-items: flex-start;
		gap: 12px;
	}

	.image {
		flex-shrink: 1;
		flex-grow: 0;
		flex-basis: content;
	}

	.text {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		justify-content: flex-start;
	}
</style>
