<script>
	import { signOut } from "$lib/services/firebase/auth";
	import { newPost } from "$lib/services/firebase/db";
	import { user } from "$lib/stores/userStore";
	import SEO from "$lib/components/SEO.svelte";
	import AdminLogin from "$lib/components/AdminLogin.svelte";
	import AdminBlogList from "$lib/components/blog/AdminBlogList.svelte";
	import Markdown from "$lib/components/Markdown.svelte";
	import ActionButton from "$lib/components/ActionButton.svelte";
	import Icon from "svelte-awesome";
	import expand from "svelte-awesome/icons/expand";
	import compress from "svelte-awesome/icons/compress";

	let preview = "";
	$: loggedIn = !!$user;
	let posting;
	let blogsComp;
	let expanded = false;
	let el = {};

	function updatePreview() {
		preview = el.content.value;
	}

	function handleSubmit() {
		posting = true;

		newPost(el.title.value, el.content.value)
			.then((res) => {
				blogsComp.syncPosts();
				el.title.value = null;
				el.content.value = null;
				updatePreview();
			})
			.finally(() => {
				posting = false;
			});
	}

	function toggleExpand() {
		expanded = !expanded;
	}
</script>

<SEO title="Admin Console" desc="Admin Console" />

<h1>{loggedIn ? "Admin Console" : "Admin Login"}</h1>

{#if loggedIn}
	<p>Welcome, <b>{$user.email}</b></p>
	<button class="button" on:click={signOut}>Sign Out</button>

	<div class="flex items-stretch [&>div]:flex-1 [&>div]:p-2">
		{#if !expanded}
			<div>
				<h2>Blog posts</h2>
				<AdminBlogList bind:this={blogsComp} />
			</div>
		{/if}
		<div class="relative">
			<button
				on:click={toggleExpand}
				class="absolute top-0 right-0 flex h-8 w-8 cursor-pointer select-none items-center justify-center"
			>
				<Icon data={expanded ? compress : expand} />
			</button>
			<h2>Create a Blog Post</h2>
			<div class="[&>*]:w-full">
				<input
					id="title"
					bind:this={el.title}
					placeholder="Title"
					class="mb-1 !p-2"
				/>
				<textarea
					id="content"
					placeholder="Content"
					class="min-h-[16em] resize-y !px-2 !py-2"
					bind:this={el.content}
					on:input={updatePreview}
				/>
			</div>
			<div class="text-left">
				<h4 class="mt-6 mb-2">Preview</h4>
				<div
					class="!mb-2 min-h-[8em] rounded border border-black bg-white px-2 dark:border-bluegray-700 dark:bg-bluegray-700"
				>
					<Markdown raw={preview} />
				</div>
			</div>
			<div class="float-right">
				<ActionButton
					on:click={handleSubmit}
					action={posting}
					actionText="Posting..."
					>Post
				</ActionButton>
			</div>
		</div>
	</div>
{:else}
	<AdminLogin />
{/if}
