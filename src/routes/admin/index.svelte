<script>
    import { goto } from "$app/navigation";
    import { signOut, newPost } from "$lib/services/firebase";
    import { user } from "$lib/stores/userStore";
    import SEO from "$lib/components/SEO.svelte";
    import AdminLogin from "$lib/components/AdminLogin.svelte";
    import MarkDown from "$lib/components/MarkDown.svelte";
    import BlogList from "$lib/components/blog/BlogList.svelte";

    let preview = "";
    $: loggedIn = !!$user;

    function handleContentInput() {
        const el = document.getElementById("content");

        // @ts-ignore
        preview = el.value;
    }

    function handleSubmit() {
        // @ts-ignore
        const titleValue = document.getElementById("title").value;
        // @ts-ignore
        const contentValue = document.getElementById("content").value;

        console.log("posting...", contentValue);
        newPost(titleValue, contentValue).then((res) => {
            console.log("posted!", res);
            window.location.reload();
        });
    }
</script>

<SEO title="Admin Console" desc="Admin Console" />

<h1>{loggedIn ? "Admin Console" : "Admin Login"}</h1>

{#if loggedIn}
    <p>Welcome, <b>{$user.email}</b></p>
    <button on:click={signOut}>Sign Out</button>

    <div id="new-blog-post">
        <div id="inputs">
            <input type="text" id="title" placeholder="Title" />
            <textarea
                id="content"
                placeholder="Content"
                rows="15"
                cols="50"
                on:input={handleContentInput}
            />
        </div>
        <hr />
        <div id="preview-container">
            <h3>Preview</h3>
            <div id="preview">
                <MarkDown raw={preview} />
            </div>
        </div>
        <button id="post" on:click={handleSubmit}>Post</button>
    </div>
    <div id="blog-list">
        <h2>Blog posts</h2>
        <BlogList linkPath="admin" />
    </div>
{:else}
    <AdminLogin />
{/if}

<style lang="scss">
    #new-blog-post {
        margin-bottom: 30px;

        #inputs {
            margin-top: 50px;

            #title {
                margin-bottom: 5px;
            }

            #content {
                display: block;
                resize: none;
                margin: 0px;
                padding-left: 5px;
            }
        }

        #preview-container {
            text-align: left;

            h3 {
                margin-top: 0px;
                margin-bottom: 10px;
            }

            #preview {
                margin-bottom: 5px;
                border: 1px solid black;
                border-radius: 4px;
                background-color: white;
                min-height: 100px;
                padding: 5px;
            }
        }
    }

    #post {
        width: min-content;
        float: right;
    }

    #inputs * {
        width: 100%;
        box-sizing: border-box;
    }
</style>
