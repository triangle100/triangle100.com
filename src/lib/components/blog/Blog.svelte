<script>
	import Loading from "$lib/components/Loading.svelte";
	import NoBlog from "$lib/components/blog/NoBlog.svelte";
	import Markdown from "$lib/components/Markdown.svelte";
	import { DateTime } from "luxon";

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
	<div class="mt-4 mb-8 flex flex-col">
		<h1 class="my-0">{title}</h1>
		<div class="flex justify-center gap-2 text-bluegray-400">
			<span>
				{DateTime.fromSeconds(post.data.createdAt.seconds).toFormat(
					"DDD"
				)}
			</span>
			<span>•</span>
			<span>{post.data.author}</span>
		</div>
	</div>
	<div class="text-left w-[600px] mx-auto">
		<Markdown raw={content} />
	</div>
{:else}
	<h1>{title}</h1>
	<NoBlog slug={post.id} />
{/if}
