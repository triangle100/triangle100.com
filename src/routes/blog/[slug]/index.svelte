<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { getPost } from "$lib/services/firebase/db";
    import Loading from "$lib/components/Loading.svelte";
    import SEO from "$lib/components/SEO.svelte";
    import NoBlog from "$lib/components/blog/NoBlog.svelte";
    import Markdown from "$lib/components/Markdown.svelte";

    let post;
    let loading = true;
    let title;
    let content;

    onMount(async () => {
        post = await getPost($page.params.slug);

        loading = false;

        title = post.data ? post.data.title : "No blog post found!";
        content = post.data ? post.data.content : "";

        console.log(post);
    });
</script>

<SEO
    {title}
    desc="A blog I use to post updates on what I'm working on at the moment"
/>

{#if loading}
    <Loading imageClass="mt-12" />
{:else if post.data}
    <div class="text-left">
        <h1>{title}</h1>
        <Markdown raw={content} />
    </div>
{:else}
    <h1>{title}</h1>
    <NoBlog slug={post.id} />
{/if}
