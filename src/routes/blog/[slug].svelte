<script>
    import MarkdownIt from "markdown-it";
    import hljs from "highlight.js";

    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { getPost } from "$lib/services/firebase";
    import loadingGif from "$lib/assets/loading.gif";
    import SEO from "$lib/components/SEO.svelte";
    import NoBlog from "$lib/components/blog/NoBlog.svelte";

    let post;
    let loading = true;
    let title = "Loading...";
    let content = "Loading...";

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

    onMount(async () => {
        post = await getPost($page.params.slug);

        setTimeout(() => {
            loading = false;
        }, 200);
        title = post.data ? post.data.title : "No blog post found!";
        content = post.data.content
            ? md.render(post.data.content)
            : "No content";

        console.log(post);
    });
</script>

<SEO
    {title}
    desc="A blog I use to post updates on what I'm working on at the moment"
/>

{#if loading}
    <img id="loading" src={loadingGif} alt="Loading..." />
{:else}
    <div id="blog-post">
        <h1>{title}</h1>
        {#if post.data}
            <div>{@html content}</div>
        {:else}
            <h2>
                <NoBlog id={post.id} />
            </h2>
        {/if}
    </div>
{/if}

<style>
    #loading {
        width: 100px;
        margin-top: 50px;
    }

    #blog-post {
        text-align: left;
    }
</style>
