<script context="module" lang="ts">
	import { client } from '../utils/prismicClient';
	import prismic from '@prismicio/client';

	export async function load({ page, stuff }) {
		const data = await client.getByUID('page', page.params.slug, {});
		return {
			props: {
				data
			}
		};
	}
</script>

<script lang="ts">
	import Hero from '../components/common/Hero.svelte';
	import SliceSection from '../components/common/SliceSection.svelte';
	export let data;

	let { body } = data.data;
</script>

<div>
	<Hero
		title={data.data.page_title[0].text}
		image={{
			url: data.data.hero_image.url,
			alt: data.data.hero_image.alt
		}}
		content={data.data.page_info}
	/>
	<SliceSection body={data.data.body} />
</div>
