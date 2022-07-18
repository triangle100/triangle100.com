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

<svelte:head>
    <link rel="prefetch" as="image" href={errorImage} />
    <link rel="prefetch" as="image" href={loadingGif} />
</svelte:head>

{#if loaded}
    <img id={$$props.id} {src} {alt} />
{:else if failed}
    <img id={$$props.id} src={errorImage} alt="Not Found" />
{:else if loading}
    <img id={$$props.id} src={loadingGif} alt="Loading..." />
{/if}

<style>
    img {
        max-width: 100%;
        max-height: 100%;
    }
</style>
