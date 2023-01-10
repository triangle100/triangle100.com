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
		class="mx-auto mb-2 flex cursor-pointer justify-between rounded bg-bluegray-700 p-2 text-2xl transition-colors hover:bg-bluegray-100 dark:hover:bg-bluegray-600 md:w-full lg:w-4/6"
		on:click={() => goto(`blog/${post.id}`)}
	>
		<div class="min-w-0">
			<span class="max-w-[200px] truncate">{post.data.title}</span>
			<span class="text-base">by {post.data.author}</span>
		</div>
		<div
			class="min-w-fit select-none [&>*]:ml-3 [&>*]:select-auto [&>*]:border-none"
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
