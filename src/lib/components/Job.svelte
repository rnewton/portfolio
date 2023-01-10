<script lang="ts">
	import { format } from 'date-fns';
	import SvelteMarkdown from 'svelte-markdown';
	import type Job from '$lib/types/Job';

	export let job: Job;
	export let includeEmbelishments: boolean;
</script>

<div
	class={`w-full px-6 py-4 hover:bg-amber-100 ${
		includeEmbelishments ? 'border-b border-green-600' : null
	}`}
>
	<h3 class="text-xl">{job.title}</h3>
	<div>
		<span class="text-lg inline">{job.company}</span>
		<span class="inline">{job.location ? ` • ${job.location}` : null}</span>
	</div>
	{#if includeEmbelishments}<div
			class="w-8 h-8 border border-green-600 rounded-full -ml-16 -mt-4 float-left"
		/>{/if}
	<span class="text-lg">
		{format(new Date(`${job.startDate}T00:00:00`), 'MMM YYY')}
		{#if job.currentPosition || job.endDate}&rarr;{/if}
		{#if job.currentPosition}
			present{/if}{#if job.endDate}
			{format(new Date(`${job.endDate}T00:00:00` || ''), 'MMM YYY')}{/if}
	</span>
	<div class="pt-4"><SvelteMarkdown source={job.description} /></div>
</div>
