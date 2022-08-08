import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
    kit: {
        adapter: adapter({
            fallback: "index.html",
        }),
        prerender: {
            default: true,
        },
    },
    tralingSlash: "always",
};

export default config;
