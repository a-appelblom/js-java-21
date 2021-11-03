<script context="module" lang="ts">
	import { client } from '../utils/prismicClient';
	import prismic from '@prismicio/client';
	export async function load() {
		const data = await client.query(prismic.Predicates.at('document.type', 'page'));
		const slugs = data.results.map((item) => item.uid);
		return {
			props: {
				slugs
			}
		};
	}
</script>

<script>
	import '../app.css';
	import Navbar from '../components/layout/Navbar.svelte';
	import Footer from '../components/layout/Footer.svelte';
	export let slugs;
</script>

<Navbar {slugs} />
<main class="mx-auto container px-8 min-h-screen my-16">
	<slot />
</main>
<!-- <Footer /> -->
