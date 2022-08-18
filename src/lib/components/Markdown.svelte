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

            return `<pre class="block overflow-x-auto p-2 px-6 text-[#2f3337] bg-[#eeeeee] rounded">${code}</pre>`;
        },
    });

    const applyLineNumbers = (code) => {
        const lines = code.trim().split("\n");

        const rows = lines.map((line, idx) => {
            const lineNumber = idx + 1;

            let html = "<tr>";
            html += `<td class="min-w-[1.75em] text-right pr-3 select-none pointer-events-none font-mono font-bold">${lineNumber}</td>`;
            html += `<td class="p-0 leading-[1.75em] font-mono">${line}</td>`;
            html += "</tr>";
            return html;
        });

        return `<table cellspacing="0" ><tbody>${rows.join("")}</tbody></table>`;
    };
</script>

{@html markdown}
