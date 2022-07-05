<!-- https://svelte.dev/repl/327aa441312e41d7937b4adcdab86765?version=3.46.2 -->
<script>
    import errorImage from "$lib/assets/error.png";
    import loadingGif from "$lib/assets/loading.gif";
    import { onMount } from "svelte";
    export let src;
    export let alt;

    let loaded = false;
    let failed = false;
    let loading = false;

    onMount(() => {
        const img = new Image();
        img.src = src;
        loading = true;

        img.onload = () => {
            loading = false;
            loaded = true;
        };
        img.onerror = () => {
            loading = false;
            failed = true;
        };
    });
</script>

{#if loaded}
    <img {src} {alt} />
{:else if failed}
    <img src={errorImage} alt="Not Found" />
{:else if loading}
    <img src={loadingGif} alt="Loading..." />
{/if}

<style>
    img {
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
        margin: auto;
    }
</style>
