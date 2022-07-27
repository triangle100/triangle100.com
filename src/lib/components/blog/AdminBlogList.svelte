<script>
    import { onMount } from "svelte";
    import { getPosts } from "$lib/services/firebase/db";
    import Loading from "$lib/components/Loading.svelte";
    import AdminBlogCard from "$lib/components/blog/AdminBlogCard.svelte";

    let posts = [];
    let loading = true;

    onMount(async () => {
        syncPosts();
    });

    export async function syncPosts() {
        posts = await getPosts();
        loading = false;
    }
</script>

{#if loading}
    <Loading />
{:else}
    {#each posts as post}
        <AdminBlogCard title={post.data.title} id={post.id} />
    {:else}
        <h2>No blog posts</h2>
    {/each}
{/if}
