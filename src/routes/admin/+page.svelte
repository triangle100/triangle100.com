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
    <button on:click={signOut}>Sign Out</button>

    <div class="flex [&>div]:flex-1 [&>div]:p-2 items-stretch">
        {#if !expanded}
            <div>
                <h2>Blog posts</h2>
                <AdminBlogList bind:this={blogsComp} />
            </div>
        {/if}
        <div class="relative">
            <div
                on:click={toggleExpand}
                class="absolute top-0 right-0 w-5 h-5 flex justify-center items-center cursor-pointer select-none"
            >
                <Icon data={expanded ? compress : expand} class="dark:text--600" />
            </div>
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
                    class="!px-2 !py-2 resize-y min-h-[16em]"
                    bind:this={el.content}
                    on:input={updatePreview}
                />
            </div>
            <div class="text-left">
                <h4 class="mt-6 mb-2">Preview</h4>
                <div
                    class="!mb-2 px-2 min-h-[8em] border border-black bg-white dark:bg--700 dark:border--700 rounded"
                >
                    <Markdown raw={preview} />
                </div>
            </div>
            <ActionButton
                on:click={handleSubmit}
                action={posting}
                actionText="Posting..."
                buttonClass="float-right"
                >Post
            </ActionButton>
        </div>
    </div>
{:else}
    <AdminLogin />
{/if}
