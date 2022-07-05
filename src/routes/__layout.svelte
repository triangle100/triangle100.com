<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import Font from "$lib/components/Font.svelte";

    onMount(() => {
		window.onunhandledrejection = (e) => {
			goto("/");
		}
	})
</script>

<Font />
<slot />
