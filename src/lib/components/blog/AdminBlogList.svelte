<script>
    import { onMount } from "svelte";
    import { getPosts } from "$lib/services/firebase/db";
    import AdminBlogCard from "$lib/components/blog/AdminBlogCard.svelte";
    import loadingGif from "$lib/assets/loading.gif";

    let posts = [];
    let loading = true;

    onMount(async () => {
        posts = await getPosts();
        loading = false;
    });
</script>

{#each posts as post}
    <AdminBlogCard title={post.data.title} id={post.id} />
{:else}
    {#if loading}
        <img id="loading" src={loadingGif} alt="Loading..." />
    {:else}
        <h2>No blog posts</h2>
    {/if}
{/each}

<style lang="scss">
    #loading {
        width: 100px;
    }
</style>
