<script>
    import MarkdownIt from "markdown-it";
    import hljs from "highlight.js";

    export let raw = "No content.";
    $: markdown = md.render(raw);

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
</script>

{@html markdown}
