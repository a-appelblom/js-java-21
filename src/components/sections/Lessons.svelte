<script lang="ts">
	import PrismicDom from 'prismic-dom';

	export let lessons: any[];
</script>

<div class="mx-auto max-w-4xl w-full">
	{#each lessons as lesson}
		<div class="my-8">
			<details class="style-none border-2 p-4 rounded-md">
				<summary class="">
					<h3 class="text-xl sm:text-2xl py-4 hover:cursor-pointer hover:text-purple-500">
						{lesson.lesson_title[0].text}
					</h3>
				</summary>
				<div class="flex flex-col py-4 gap-4">
					{@html PrismicDom.RichText.asHtml(lesson.lesson_content)}
				</div>
				{#if lesson.lesson_github_link.url}
					<a
						class="text-purple-800 hover:opacity-80 underline"
						href={lesson.lesson_github_link.url}
						target="_blank"
					>
						GitHub-Repo för lektionen
					</a>
				{:else}
					<p class="underline">GitHub länk kommer här efter lektionen</p>
				{/if}
			</details>
		</div>
	{/each}
</div>
