<script>
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

        const titleRef = document.getElementById("title");
        const contentRef = document.getElementById("content");
        const titleValue = titleRef.value;
        const contentValue = contentRef.value;
        titleRef.value = null;
        contentRef.value = null;

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
                <input id="title" placeholder="Title" class="mb-1 !p-2" />
                <textarea
                    id="content"
                    placeholder="Content"
                    class="!px-2 !py-2 resize-y min-h-[8em]"
                    on:input={handleContentInput}
                />
            </div>
            <div class="text-left">
                <h4 class="mt-6 mb-2">Preview</h4>
                <div class="!mb-2 px-2 min-h-[8em] border border-black bg-white rounded">
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
