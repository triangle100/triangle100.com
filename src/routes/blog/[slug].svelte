<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { getPost } from "$lib/services/firebase";
    import SEO from "$lib/components/SEO.svelte";
    import NoBlog from "$lib/components/blog/NoBlog.svelte";

    let post;
    let loading = true;
    let title = "Loading...";

    onMount(async () => {
        post = await getPost($page.params.slug);

        loading = false;
        title = post.data ? post.id : "No blog post found!"; // post.id => post.data.title
        
        console.log(post);
    });
</script>

<SEO
    title={title}
    desc="A blog I use to post updates on what I'm working on at the moment"
/>

<h1>{title}</h1>
{#if loading}
    <h2>loading...</h2>
{:else if post.data}
    <h2>{JSON.stringify(post)}</h2>
{:else}
    <h2>
        <NoBlog id={post.id} />
    </h2>
{/if}
