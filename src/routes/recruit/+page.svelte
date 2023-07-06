<script lang="ts">
	import { enhance } from '$app/forms';

	import Button from '../../components/common/button.svelte';

	// PROPS

	// STATE

	// LOGIC
</script>

<form method="post" action="?/recruit" use:enhance>
	<!-- TODO make this a submit button when we're ready -->
	<Button>Find recruits</Button>
</form>
