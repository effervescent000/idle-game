<script lang="ts">
	import { page } from '$app/stores';

	// PROPS
	export let label: string;
	export let path: string;

	// STATE

	// LOGIC
	$: active = $page.url.pathname === path;
</script>

<a href={path} class={`border-b border-accent-primary ${!active && 'border-opacity-0'}`}>{label}</a>
