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

{#if loading}
	<Loading />
{:else}
	<div
		class="mx-auto flex flex-col gap-[1px] bg-bluegray-200 dark:bg-bluegray-700 md:w-full lg:w-4/6"
	>
		{#each posts as post}
			<button
				class="flex w-full cursor-pointer items-center gap-4 bg-bluegray-50 p-3 transition-colors hover:bg-bluegray-100 dark:bg-bluegray-800 dark:hover:bg-bluegray-700"
				on:click={() => goto(`blog/${post.id}`)}
			>
				<span class="dim shrink-0 text-sm">
					{DateTime.fromSeconds(
						post.data.createdAt.seconds
					).toRelativeCalendar()}
				</span>
				<span class="truncate">
					{post.data.title}
				</span>
				<span
					class="dim ml-auto min-w-fit select-none items-center text-sm [&>*]:select-auto"
				>
					{post.data.author}
				</span>
			</button>
		{:else}
			<h4>No blog posts</h4>
		{/each}
	</div>
{/if}
