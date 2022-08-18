<!-- https://svelte.dev/repl/327aa441312e41d7937b4adcdab86765?version=3.46.2 -->
<script>
    import Loading from "$lib/components/Loading.svelte";
    import errorImage from "$lib/assets/error.png";
    import { onMount } from "svelte";
    export let src;
    export let alt;

    let failed = false;
    let loading = true;

    onMount(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            loading = false;
        };
        img.onerror = () => {
            failed = true;
        };
    });
</script>

{#if failed}
    <img src={errorImage} alt="Not Found" />
{:else if loading}
    <Loading style="!p-2" />
{:else}
    <img class="max-w-full max-h-full" {src} {alt} />
{/if}
