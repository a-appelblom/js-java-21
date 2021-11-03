<script lang="ts">
	export let title;
	export let content: any[];
	export let image;
</script>

<div class="h-96 w-full grid grid-cols-1 md:grid-cols-3 content-center text-left max-w-6xl mx-auto">
	<img
		class="object-contain col-span-2 max-h-full overflow-hidden w-full"
		src={image.url}
		alt={image.alt}
	/>
	<div class="col-span-1 grid content-center p-4">
		<h1 class="text-4xl lg:text-5xl xl:text-6xl text-center md:text-left">{title}</h1>
		<div class="py-4 text-center md:text-left text-lg">
			{#each content as paragraph}
				<p>{paragraph.text}</p>
			{/each}
		</div>
	</div>
</div>
