<script>
    import { onMount } from "svelte";
    import { getPosts } from "$lib/services/firebase";
    import loadingGif from "$lib/assets/loading.gif";

    let posts = [];
    let loading = true;

    onMount(async () => {
        posts = await getPosts();
        loading = false;
        console.log(posts);
    });
</script>

{#each posts as post}
    <h2><a href={`blog/${post.id}`}>{post.data.title}</a></h2>
{:else}
    {#if loading}
        <img id="loading" src={loadingGif} alt="Loading..." />
    {:else}
        <h2>No blog posts</h2>
    {/if}
{/each}

<style>
    #loading {
        width: 100px;
    }
</style>
