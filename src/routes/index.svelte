<script context="module" lang="ts">
	import { client } from '../utils/prismicClient';
	import PrismicDom from 'prismic-dom';

	export async function load() {
		const data = await client.getByUID('homepage', 'homepage', {});
		return { props: { data } };
	}
</script>

<script lang="ts">
	import type { InfoRow } from '$lib/types';
	import SliceSection from '../components/common/SliceSection.svelte';

	export let data: any;
	const { body, page_title, hero_image }: { body: InfoRow[]; page_title: any; hero_image: any } =
		data.data;
</script>

<div class="flex flex-col gap-8 my-8">
	<h1 class="text-3xl sm:text-5xl xl:text-6xl text-center">{page_title[0].text}</h1>
	<img src={hero_image.url} alt={hero_image.alt} />
</div>
<SliceSection {body} />
