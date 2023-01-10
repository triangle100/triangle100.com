<script>
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { getPosts } from "$lib/services/firebase/db";
	import Loading from "$lib/components/Loading.svelte";
	import { DateTime } from "luxon";

	let posts = [];
	let loading = true;

	onMount(async () => {
		posts = await getPosts();
		loading = false;
	});
</script>

{#each posts as post}
	<button
		class="flex justify-between lg:w-4/6 md:w-full mx-auto text-2xl rounded mb-2 p-2 hover:bg-bluegray-100 bg-bluegray-700 dark:hover:bg-bluegray-600 transition-colors cursor-pointer"
		on:click={() => goto(`blog/${post.id}`)}
	>
		<div class="min-w-0">
			<span class="truncate max-w-[200px]">{post.data.title}</span>
			<span class="text-base">by {post.data.author}</span>
		</div>
		<div
			class="min-w-fit [&>*]:ml-3 [&>*]:border-none select-none [&>*]:select-auto"
		>
			<span>
				{DateTime.fromSeconds(
					post.data.createdAt.seconds
				).toRelativeCalendar()}
			</span>
		</div>
	</button>
{:else}
	{#if loading}
		<Loading />
	{:else}
		<h4>No blog posts</h4>
	{/if}
{/each}
