<script>
    import { goto } from "$app/navigation";
    import { signOut } from "$lib/services/firebase/auth";
    import { newPost } from "$lib/services/firebase/db";
    import { user } from "$lib/stores/userStore";
    import SEO from "$lib/components/SEO.svelte";
    import AdminLogin from "$lib/components/AdminLogin.svelte";
    import AdminBlogList from "$lib/components/blog/AdminBlogList.svelte";
    import Markdown from "$lib/components/Markdown.svelte";
    import ActionButton from "$lib/components/ActionButton.svelte";

    let preview = "";
    $: loggedIn = !!$user;
    let posting;
    let blogsComp;

    function handleContentInput() {
        const el = document.getElementById("content");

        // @ts-ignore
        preview = el.value;
    }

    function handleSubmit() {
        posting = true;

        // @ts-ignore
        const titleValue = document.getElementById("title").value;
        // @ts-ignore
        const contentValue = document.getElementById("content").value;

        newPost(titleValue, contentValue)
            .then((res) => {
                blogsComp.syncPosts();
            })
            .finally(() => {
                posting = false;
            });
    }
</script>

<SEO title="Admin Console" desc="Admin Console" />

<h1>{loggedIn ? "Admin Console" : "Admin Login"}</h1>

{#if loggedIn}
    <p>Welcome, <b>{$user.email}</b></p>
    <button on:click={signOut}>Sign Out</button>

    <div class="[&>div]:float-left [&>div]:w-1/2 [&>div]:p-2">
        <div id="blog-list">
            <h2>Blog posts</h2>
            <AdminBlogList bind:this={blogsComp} />
        </div>
        <div id="new-blog-post">
            <h2>Create a Blog Post</h2>
            <div class="[&>*]:w-full">
                <input id="title" placeholder="Title" class="border border-black mb-1 p-2 rounded" />
                <textarea
                    id="content"
                    placeholder="Content"
                    class="border border-black px-2 block resize-none py-2 rounded"
                    on:input={handleContentInput}
                />
            </div>
            <hr class="my-4 mx-auto" />
            <div class="text-left">
                <h4 class="mt-0 mb-2">Preview</h4>
                <div class="!mb-2 px-2 min-h-[100px] border border-black bg-white rounded">
                    <Markdown raw={preview} />
                </div>
            </div>
            <ActionButton
                on:click={handleSubmit}
                action={posting}
                actionText="Posting..."
                buttonClass="w-min float-right"
                >Post
            </ActionButton>
        </div>
    </div>
{:else}
    <AdminLogin />
{/if}
