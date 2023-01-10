<script lang="ts">
	import type J from '$lib/types/Job';
	import Job from '$lib/components/Job.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	export let icon: string;
	export let title: string;
	export let jobs: J[];
	export let includeEmbelishments: boolean;
</script>

<SectionHeader {title} {icon} />
<ul class="w-full">
	{#each jobs.slice(0, 5) as job}
		<li><Job {job} {includeEmbelishments} /></li>
	{/each}
	{#if jobs.length > 5}
		<details class="print:hidden">
			<summary
				class="text-center w-48 ml-10 my-4 border border-green-600 rounded-full cursor-pointer hover:bg-amber-100"
				>Show more</summary
			>
			{#each jobs.slice(5) as job}
				<li><Job {job} {includeEmbelishments} /></li>
			{/each}
		</details>
	{/if}
</ul>
