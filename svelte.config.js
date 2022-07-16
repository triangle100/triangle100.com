import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: adapter({
            fallback: 'index.html'
        }),
        prerender: {
            default: true
        },
    },
    tralingSlash: "always"
};

export default config;
