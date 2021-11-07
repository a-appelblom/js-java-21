<script lang="ts">
	import InfoRowSection from '../sections/InfoRow.svelte';
	import Lessons from '../sections/Lessons.svelte';
	export let body: any[];
</script>

{#each body as section}
	<section class="grid grid-cols-1 gap-8">
		{#if section.slice_type === 'info_rows'}
			<InfoRowSection rows={section} />
		{:else if section.slice_type === 'lesson'}
			<Lessons lessons={section.items} />
		{:else}
			<!-- else content here -->
		{/if}
	</section>
{/each}
