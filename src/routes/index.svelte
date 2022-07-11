<script>
    import Modal from "$lib/components/Modal/Modal.svelte";
    import BuildNumber from "$lib/components/BuildNumber.svelte";

    let modalOpen = false;

    function openModal() {
        modalOpen = true;
    }

    function closeModal() {
        modalOpen = false;
    }
</script>

<svelte:head>
    <title>triangle100</title>
    <meta
        name="description"
        content="I'm a fullstack hobbyist, game developer, and computer nerd that loves learning the ins and outs of new bleeding edge technology."
    />

    <meta property="og:title" content="triangle100" />
    <meta
        property="og:description"
        content="I'm a fullstack hobbyist, game developer, and computer nerd that loves learning the ins and outs of new bleeding edge technology."
    />
</svelte:head>

<div id="container">
    <h1>triangle100</h1>
    <p>Website is currently undergoing construction</p>

    <p>
        Meanwhile, you can check out this project's
        <span class="link" on:click={openModal}>tech stack</span>
    </p>
</div>

<div id="foot">
    <span>
        Build
        <a
            href="https://github.com/triangle100/triangle100-com/releases/latest"
            target="_blank"
        >
            <BuildNumber />
        </a>
    </span>
</div>

<Modal {modalOpen} on:closeModal={closeModal} />

<style>    
    :global(body) {
        margin: 0px;
        background-color: #fafafa;
        color: #303030;
    }

    h1 {
        margin: 0px;
    }

    #container {
        text-align: center;
        margin-top: 30px;
    }

    #foot {
        position: absolute;
        transform: translateX(-50%);
        bottom: 0px;
        left: 50%;

        width: 100%;
        margin-bottom: 5px;

        text-align: center;
    }

    a,
    .link {
        text-decoration: none;
        border-bottom: 2px dotted;
        color: #2f60e9;
        cursor: pointer;

        transition: color 200ms;
    }

    a:hover,
    .link:hover {
        color: #81a0f3;
    }
</style>
