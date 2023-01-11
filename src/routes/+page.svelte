<script lang="ts">
	import Job from '$lib/components/Job.svelte';
	import Jobs from '$lib/components/Jobs.svelte';
	import Link from '$lib/components/Link.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let skills: string[] = [...new Set(data.jobs.map((j) => j.skills).flat(1))];
</script>

<div
	class="hex rotate-[45deg] bg-amber-100 border-amber-100 print:border-white absolute top-0 left-20 z-0"
/>

<div class="p-3 md:p-10 mr--12 md:m-0 relative z-50">
	<h1 class="text-6xl md:text-9xl mb-9 py-9 border-b-4 border-green-600">Rob Newton</h1>
	<div class="flex flex-wrap align-top">
		<div class="w-full md:w-1/3">
			<SectionHeader title="Links" icon="links" />
			<ul class="ml-9 pb-4">
				<li>
					<Link
						url="mailto:robert.newton11@gmail.com"
						icon="email"
						label="robert.newton11@gmail.com"
					/>
				</li>
				<li>
					<Link url="https://github.com/rnewton" icon="code" label="github.com/rnewton" />
				</li>
				<li>
					<Link url="https://coinflip.games" icon="star" label="coinflip.games" />
				</li>
			</ul>

			<SectionHeader title="Education" icon="education" />
			<Job
				job={{
					company: 'Colorado State University',
					title: 'BS, Applied Computing Technology',
					startDate: '2007-08-01',
					endDate: '2011-05-01',
					currentPosition: false,
					description: '',
					location: 'Fort Collins, CO',
					skills: []
				}}
				includeEmbelishments={false}
			/>

			<SectionHeader title="Skills" icon="skills" />
			<ul class="ml-10 columns-3 mb-6">
				{#each skills as skill}
					<li class="pl-2 mb-1 w-32 bg-gray-100/30 hover:bg-amber-100">{skill}</li>
				{/each}
			</ul>

			<Jobs
				jobs={data.volunteering}
				title="Volunteering"
				icon="volunteering"
				includeEmbelishments={false}
			/>
		</div>
		<div class="flex-1 max-w-full ml-4 pl-6 border-l-2 border-green-600">
			<Jobs jobs={data.jobs} title="Experience" icon="experience" includeEmbelishments={true} />
		</div>
	</div>
</div>
