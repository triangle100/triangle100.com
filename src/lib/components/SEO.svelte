<script>
    export let title = "triangle100";
    export let desc = "I'm a fullstack hobbyist, game developer, and computer nerd that loves learning the ins and outs of new bleeding edge technology.";
</script>

<svelte:head>
    <title>{title}</title>
    <meta
        name="description"
        content={desc}
    />

    <meta property="og:title" content={title} />
    <meta
        property="og:description"
        content={desc}
    />
</svelte:head>