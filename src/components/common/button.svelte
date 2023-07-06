<script lang="ts">
	// PROPS
	export let classes = '';
	export let type: 'submit' | 'button' = 'button';

	// STATE

	// LOGIC
</script>

<button {type} class={`bg-accent-secondary border-accent-primary border rounded-md p-1 ${classes}`}>
	<slot />
</button>
