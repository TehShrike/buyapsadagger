<script lang="ts">
	import type { Snippet } from 'svelte'

	let {
		image,
		text,
	}: {
		image: Snippet,
		text: Snippet,
	} = $props()
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
		gap: 20px;

		flex-grow: 1;
		align-self: stretch;
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
		justify-content: stretch;
	}
</style>
