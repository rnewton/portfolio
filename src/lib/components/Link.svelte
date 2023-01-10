<script lang="ts">
	export let url: string;
	export let icon: string;
	export let label: string;
</script>

<a href={url} class="font-bold inline-block w-full"
	><img src={`/${icon}.svg`} alt={`${label} icon`} class="w-6 inline align-top" /><span class="pl-1"
		>{label}</span
	></a
>
