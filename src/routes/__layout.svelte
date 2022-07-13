<script>
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	onMount(() => {
		window.onunhandledrejection = (e) => {
			goto("/");
		};
	});
</script>

<slot />
