<script>
    import BlogList from "$lib/components/blog/BlogList.svelte";
    import SEO from "$lib/components/SEO.svelte";
</script>

<SEO
    title="Blog"
    desc="A blog I use to post updates on what I'm working on at the moment"
/>

<h1>Blog</h1>
<BlogList />
<h2><a href={"blog/dummy_id"}>No ID Error</a></h2>
