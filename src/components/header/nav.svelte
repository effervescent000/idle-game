<script lang="ts">
	import { ROUTE_TREE } from '../../constants/route-map';

	import NavLink from './nav-link.svelte';

	// PROPS

	// STATE

	// LOGIC
</script>

<div>
	{#each ROUTE_TREE as route}
		<NavLink {...route} />
	{/each}
</div>
