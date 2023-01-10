<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { user } from "$lib/stores/userStore";
	import { onMount } from "svelte";
	import { getPost, editPost } from "$lib/services/firebase/db";
	import SEO from "$lib/components/SEO.svelte";
	import Blog from "$lib/components/blog/Blog.svelte";
	import ActionButton from "$lib/components/ActionButton.svelte";

	let post;
	let posting;
	let loading = true;
	let title = "Loading...";
	let _title;
	let content;
	let el = {};
	$: loggedIn = !!$user;

	onMount(async () => {
		if (!loading && !loggedIn) {
			goto("/admin");
		}

		post = await getPost($page.params.slug);

		loading = false;

		_title = post.data.title;
		el.title.value = post.data.title;
		el.content.value = post.data.content;
	});

	function updatePreview() {
		title = el.title.value;
		content = el.content.value;
	}

	function handleSubmit() {
		posting = true;

		editPost($page.params.slug, title, content)
			.then((res) => {
				const path = $page.url.pathname;

				goto(path.substring(0, path.lastIndexOf("/")));
			})
			.finally(() => {
				posting = false;
			});
	}
</script>

<SEO title="Editor - {title}" desc="Blog edtior" />

{#if loggedIn}
	<h1>{loading ? "Loading..." : `Editing ${_title}`}</h1>
	<div class="text-left">
		<div class="[&>*]:w-full">
			<input
				id="title"
				placeholder="Title"
				class="mb-1 !p-2"
				disabled={loading}
				bind:this={el.title}
				on:input={updatePreview}
			/>
			<textarea
				id="content"
				placeholder="Content"
				class="min-h-[24em] resize-y !px-2 !py-2"
				disabled={loading}
				bind:this={el.content}
				on:input={updatePreview}
			/>
		</div>
	</div>
	<div class="mb-2 text-left">
		<h2>Preview</h2>
		<div class="rounded border border-black p-5 dark:border-bluegray-700">
			<Blog {post} {loading} bind:title bind:content />
		</div>
	</div>
	<ActionButton
		on:click={handleSubmit}
		action={posting}
		actionText="Posting..."
		buttonClass="float-right"
		>Post
	</ActionButton>
{/if}
