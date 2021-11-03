<script lang="ts">
	import PrismicDom from 'prismic-dom';
	import type { InfoRow } from '../../lib/types';
	export let rows: InfoRow;
	console.log(rows.items);
</script>

{#each rows.items as row}
	{#if row.link}
		<a
			href={row.link}
			class="grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-4 p-4 py-8 border-2 rounded-md shadow-md hover:scale-105"
		>
			{#if !row.image_position}
				<div class="col-span-1 grid content-center">
					<img src={row.row_image.url} alt={row.row_image.alt} />
				</div>
			{/if}
			<div class="col-span-2 px-8 grid content-center gap-4">
				<h3 class="text-center text-2xl sm:text-3xl">{row.row_title[0].text}</h3>
				<div class="text-center sm:text-left">
					{@html PrismicDom.RichText.asHtml(row.row_content)}
				</div>
			</div>
			{#if row.image_position}
				<div class="col-span-1 order-first sm:order-none grid content-center">
					<img src={row.row_image.url} alt={row.row_image.alt} />
				</div>
			{/if}
		</a>
	{:else}
		<div
			class="grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-4 p-4 py-8 border-2 rounded-md shadow-md"
		>
			{#if !row.image_position}
				<div class="col-span-1 grid content-center">
					<img src={row.row_image.url} alt={row.row_image.alt} />
				</div>
			{/if}
			<div class="col-span-2 px-8 grid content-center gap-4">
				<h3 class="text-center text-2xl sm:text-3xl">{row.row_title[0].text}</h3>
				<div class="text-center sm:text-left even:m-1">
					{@html PrismicDom.RichText.asHtml(row.row_content)}
				</div>
			</div>
			{#if row.image_position}
				<div class="col-span-1 order-first sm:order-none grid content-center">
					<img src={row.row_image.url} alt={row.row_image.alt} />
				</div>
			{/if}
		</div>
	{/if}
{/each}
