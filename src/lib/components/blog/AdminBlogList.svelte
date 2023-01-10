<script>
	import { onMount } from "svelte";
	import { getPosts, removePost } from "$lib/services/firebase/db";
	import Loading from "$lib/components/Loading.svelte";
	import AdminBlogCard from "$lib/components/blog/AdminBlogCard.svelte";

	let posts = [];
	let loading = true;

	onMount(async () => {
		syncPosts();
	});

	export async function syncPosts() {
		loading = true;
		posts = await getPosts();
		loading = false;
	}

	export async function deletePost(e) {
		loading = true;
		await removePost(e.detail.slug);
		await syncPosts();
		loading = false;
	}
</script>

{#if loading}
	<Loading />
{:else}
	{#each posts as post}
		<AdminBlogCard
			title={post.data.title}
			slug={post.id}
			on:deletePost={deletePost}
		/>
	{:else}
		<h4>No blog posts</h4>
	{/each}
{/if}
