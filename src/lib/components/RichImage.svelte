<!-- https://svelte.dev/repl/327aa441312e41d7937b4adcdab86765?version=3.46.2 -->
<script>
    import Loading from "$lib/components/Loading.svelte";
    import errorImage from "$lib/assets/error.png";
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
            setTimeout(() => {
                loading = false;
                loaded = true;
            }, 5000);
        };
        img.onerror = () => {
            // loading = false;
            // failed = true;
        };
    });
</script>

{#if loaded}
    <img class="max-w-full max-h-full" {src} {alt} />
{:else if failed}
    <img src={errorImage} alt="Not Found" />
{:else if loading}
    <Loading style="!p-2" />
{/if}
