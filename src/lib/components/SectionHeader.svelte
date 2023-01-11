<script lang="ts">
	import { base } from '$app/paths';

	export let icon: string;
	export let title: string;
</script>

<div>
	<img src={`${base}/${icon}.svg`} class="w-12 inline-block align-middle" alt={`${title} icon`} />
	<h2 class="text-3xl inline-block align-middle">
		{title}
	</h2>
</div>
