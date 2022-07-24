<script>
    import { getPosts } from "$lib/services/firebase";
    import { onMount } from "svelte";
    import SEO from "$lib/components/SEO.svelte";

    let posts = [];
    let loading = true;

    onMount(async () => {
        posts = await getPosts();
        loading = false;
        console.log(posts);
    });
</script>

<SEO
    title="Blog"
    desc="A blog I use to post updates on what I'm working on at the moment"
/>

<h1>Blog</h1>
{#each posts as post}
    <h2><a href={`blog/${post.id}`}>{post.data.title}</a></h2>
{:else}
    {#if loading}
        <h2>Loading posts...</h2>
    {:else}
        <h2>No blog posts</h2>
    {/if}
{/each}
<h2><a href={"blog/dummy_id"}>No ID Error</a></h2>
