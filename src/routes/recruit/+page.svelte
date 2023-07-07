<script lang="ts">
	import { enhance } from '$app/forms';

	import type { Recruit } from '../../types/heroes';

	import Button from '../../components/common/button.svelte';
	import HeroCard from '../../components/heroes/hero-card.svelte';

	// PROPS
	export let data: { data: Recruit[] };

	// STATE

	// LOGIC
</script>

<form method="post" action="?/fetch" use:enhance>
	<Button type="submit">Find recruits</Button>
</form>

<div>
	{#if data?.data}
		{#each data.data as recruit}
			<HeroCard hero={recruit} />
		{/each}
	{/if}
</div>
