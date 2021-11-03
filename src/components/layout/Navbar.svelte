<script lang="ts">
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import { fly } from 'svelte/transition';

	export let slugs;
	let open = false;
</script>

<header class="p-4">
	<nav class="hidden sm:flex justify-around items-center p-8 max-w-6xl mx-auto">
		<a
			sveltekit:prefetch
			class="capitalize font-semibold text-2xl hover:text-purple-500 border-b-2 border-purple-500"
			href="/">Hem</a
		>
		{#each slugs as slug}
			<a
				sveltekit:prefetch
				class="capitalize font-semibold text-2xl hover:text-purple-500 border-b-2 border-purple-500"
				href={`/${slug}`}>{slug}</a
			>
		{/each}
	</nav>
	<div class="sm:hidden bg-white">
		<button class="fixed h-8 w-8 z-10" on:click={() => (open = !open)}><FaBars /></button>
		{#if open}
			<nav
				transition:fly={{ y: -200, duration: 500, opacity: 0 }}
				class="fixed top-0 w-full h-screen flex flex-col justify-center gap-8 items-center p-8 max-w-6xl mx-auto bg-white"
			>
				<a
					class="capitalize font-semibold text-xl hover:text-purple-500 border-b-2 border-purple-500"
					href="/">Hem</a
				>
				{#each slugs as slug}
					<a
						class="capitalize font-semibold text-xl hover:text-purple-500 border-b-2 border-purple-500"
						href={`/${slug}`}>{slug}</a
					>
				{/each}
			</nav>
		{/if}
	</div>
</header>
