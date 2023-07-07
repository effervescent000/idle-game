<script lang="ts">
	import { rosterStore } from '../../stores/roster-stores';

	import HeroCard from '../../components/heroes/hero-card.svelte';

	// PROPS

	// STATE

	// LOGIC
</script>

{#each $rosterStore as hero}
	<HeroCard {hero} />
{/each}
