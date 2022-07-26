<script>
    import MarkdownIt from "markdown-it";
    import hljs from "highlight.js";

    import { goto } from "$app/navigation";
    import { signOut, newPost } from "$lib/services/firebase";
    import { user } from "$lib/stores/userStore";
    import SEO from "$lib/components/SEO.svelte";
    import AdminLogin from "$lib/components/AdminLogin.svelte";

    let preview = "";
    $: loggedIn = !!$user;

    const md = new MarkdownIt({
        html: true,
        linkify: true,
        breaks: true,
        typographer: true,
        langPrefix: "hljs-",
        highlight: function (str, lang, attrRaw) {
            const attrs = attrRaw.split(/\s+/g);
            const lineNumbers = attrs.includes("ln");

            let code =
                lang && hljs.getLanguage(lang)
                    ? hljs.highlight(str, {
                          language: lang,
                          ignoreIllegals: true,
                      }).value
                    : md.utils.escapeHtml(str);

            if (lineNumbers) {
                code = applyLineNumbers(code);
            }

            return `<pre class="hljs"><code>${code}</code></pre>`;
        },
    });

    const applyLineNumbers = (code) => {
        const lines = code.trim().split("\n");

        const rows = lines.map((line, idx) => {
            const lineNumber = idx + 1;

            let html = "<tr>";
            html += `<td class="line-number">${lineNumber}</td>`;
            html += `<td class="code-line">${line}</td>`;
            html += "</tr>";
            return html;
        });

        return `<table><tbody>${rows.join("")}</tbody></table>`;
    };

    function handleContentInput() {
        const el = document.getElementById("content");
        // @ts-ignore
        const val = el.value;

        preview = md.render(val);
    }

    function handleSubmit() {
        // @ts-ignore
        const slugValue = document.getElementById("slug").value;
        // @ts-ignore
        const titleValue = document.getElementById("title").value;
        // @ts-ignore
        const contentValue = document.getElementById("content").value;

        console.log("posting...", contentValue);
        newPost(slugValue, titleValue, contentValue).then((res) => {
            console.log("posted!", res);
        })
    }
</script>

<SEO title="Admin Console" desc="Admin Console" />

<h1>{loggedIn ? "Admin Console" : "Admin Login"}</h1>

{#if loggedIn}
    <p>Welcome, <b>{$user.email}</b></p>
    <button on:click={signOut}>Sign Out</button>

    <div id="inputs">
        <input type="text" id="slug" placeholder="Slug" />
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
        <div id="preview" data-theme="light">
            {@html preview}
        </div>
    </div>
    <button id="post" on:click={handleSubmit}>Post</button>
{:else}
    <AdminLogin />
{/if}

<style lang="scss">
    #inputs {
        margin-top: 50px;

        #title,
        #slug {
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

            :global {
                pre {
                    display: block;
                    overflow-x: auto;
                    padding: 0.5em;
                    color: #2f3337;
                    background-color: #eeeeee;
                    border-radius: 5px;
                }

                table {
                    width: 100%;
                }

                .line-number {
                    min-width: 22px;
                    text-align: right;
                    width: 1%;
                    padding-right: 5px;
                    user-select: none;
                }
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
