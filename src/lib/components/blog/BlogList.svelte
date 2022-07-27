<script>
    import { onMount } from "svelte";
    import { getPosts } from "$lib/services/firebase/db";
    import Loading from "$lib/components/Loading.svelte";

    let posts = [];
    let loading = true;

    onMount(async () => {
        posts = await getPosts();
        loading = false;
    });
</script>

{#each posts as post}
    <h2><a href={`blog/${post.id}`}>{post.data.title}</a></h2>
{:else}
    {#if loading}
        <Loading />
    {:else}
        <h2>No blog posts</h2>
    {/if}
{/each}
