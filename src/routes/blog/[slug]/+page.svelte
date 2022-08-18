<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { getPost } from "$lib/services/firebase/db";
    import SEO from "$lib/components/SEO.svelte";
    import Blog from "$lib/components/blog/Blog.svelte";

    let post;
    let loading;
    let title = "Loading...";
    let content;

    onMount(async () => {
        post = await getPost($page.params.slug);

        loading = false;

        console.log(post);
    });
</script>

<SEO {title} desc="A blog I use to post updates on what I'm working on at the moment" />

<Blog {post} {loading} bind:title={title} bind:content={content} />
