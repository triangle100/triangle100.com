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
		<div class="mt-4 mb-8 [&>*]:inline-block">
			<h1 class="my-0">{title}</h1>
			<span class="ml-1">by <b>{post.data.author}</b></span>
		</div>
		<Markdown raw={content} />
	</div>
{:else}
	<h1>{title}</h1>
	<NoBlog slug={post.id} />
{/if}
