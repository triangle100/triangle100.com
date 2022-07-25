<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { getPost } from "$lib/services/firebase";
    import loadingGif from "$lib/assets/loading.gif";
    import SEO from "$lib/components/SEO.svelte";
    import NoBlog from "$lib/components/blog/NoBlog.svelte";

    let post;
    let loading = true;
    let title = "Loading...";

    onMount(async () => {
        post = await getPost($page.params.slug);

        setTimeout(() => {
            loading = false;
        }, 200);
        title = post.data ? post.data.title : "No blog post found!";

        console.log(post);
    });
</script>

<SEO
    {title}
    desc="A blog I use to post updates on what I'm working on at the moment"
/>

{#if loading}
    <img id="loading" src={loadingGif} alt="Loading..." />
{:else}
    <h1>{title}</h1>
    {#if post.data}
        <h2>{JSON.stringify(post)}</h2>
    {:else}
        <h2>
            <NoBlog id={post.id} />
        </h2>
    {/if}
{/if}

<style>
    #loading {
        width: 100px;
        margin-top: 50px;
    }
</style>
