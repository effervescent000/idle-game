<script lang="ts">
	// PROPS
	export let classes = '';
	export let type: 'submit' | 'button' = 'button';
	export let callback = () => {};

	// STATE

	// LOGIC
</script>

<button
	{type}
	class={`bg-accent-secondary border-accent-primary border rounded-md p-1 ${classes}`}
	on:click={callback}
>
	<slot />
</button>
