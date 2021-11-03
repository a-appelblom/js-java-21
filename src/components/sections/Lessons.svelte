<script lang="ts">
	import PrismicDom from 'prismic-dom';

	export let lessons: any[];
</script>

<div class="mx-auto">
	{#each lessons as lesson}
		<div class="my-8">
			<h3 class="text-3xl py-4">{lesson.lesson_title[0].text}</h3>
			<pre
				class="py-4">
                    {@html PrismicDom.RichText.asHtml(lesson.lesson_content)}
                </pre>
			{#if lesson.lesson_github_link.url}
				<a
					class="text-purple-800 hover:opacity-80"
					href={lesson.lesson_github_link.url}
					target="_blank"
				>
					GitHub-Repo för lektionen
				</a>
			{:else}
				<p>GitHub länk kommer här efter lektionen</p>
			{/if}
		</div>
	{/each}
</div>
