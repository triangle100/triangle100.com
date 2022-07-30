<script>
    import { user } from "$lib/stores/userStore";
    import Icon from "svelte-awesome";
    import github from "svelte-awesome/icons/github";

    $: loggedIn = !!$user;
</script>

<nav
    id={$$props.id}
    class="mh-12 py-4 mb-2 flex items-center border-b border-slate-300"
>
    <div id="logo" class="w-12 mr-4 rounded-md bg-slate-200">
        <a href="/" sveltekit:reload title="triangle100">
            <img src="/favicon.png" alt="Site logo" />
        </a>
    </div>
    <div id="buttons" class="cursor-default [&>*]:mr-2 [&>*]:border-none">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        {#if loggedIn}
            <a href="/admin">Console</a>
        {/if}
    </div>
    <div class="ml-auto">
        <a
            href="https://github.com/triangle100/triangle100-com"
            target="_blank"
            class="border-none"
            title="Source Code"
            data-noglyph
        >
            <Icon data={github} scale={2} class="text-slate-800" />
        </a>
    </div>
</nav>
