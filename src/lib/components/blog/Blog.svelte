<script>
    import Loading from "$lib/components/Loading.svelte";
    import NoBlog from "$lib/components/blog/NoBlog.svelte";
    import Markdown from "$lib/components/Markdown.svelte";

    export let loading = true;
    export let post;
    export let title;
    export let content;

    $: title = loading
        ? "Loading..."
        : post.data
        ? post.data.title
        : "No blog post found!";
    $: content = loading ? "Loading..." : post.data ? post.data.content : "";
</script>

{#if loading}
    <Loading />
{:else if post.data}
    <div class="text-left">
        <h1>{title}</h1>
        <Markdown raw={content} />
    </div>
{:else}
    <h1>{title}</h1>
    <NoBlog slug={post.id} />
{/if}
