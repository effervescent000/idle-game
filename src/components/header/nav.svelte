<script lang="ts">
	import { ROUTE_TREE } from '../../constants/route-map';

	import NavLink from './nav-link.svelte';

	// PROPS

	// STATE

	// LOGIC
</script>

<div class="flex gap-10 text-2xl">
	{#each ROUTE_TREE as route}
		<NavLink {...route} />
	{/each}
</div>
