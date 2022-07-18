<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import Navbar from "$lib/components/Navbar.svelte";
    import BuildNumber from "$lib/components/BuildNumber.svelte";

    onMount(() => {
        window.onunhandledrejection = (e) => {
            goto("/");
        };
    });
</script>

<div id="content">
    <Navbar id="navbar" />
    <slot />
    
    <div id="spacer"></div>
    <div id="foot">
        <span>
            Build
            <a
                href="https://github.com/triangle100/triangle100-com/releases"
                target="_blank"
            >
                <BuildNumber />
            </a>
        </span>
    </div>
</div>

<style lang="scss">
    #spacer {
        height: 50px;
    }

    #content {
        position: relative;
        text-align: center;

        min-width: 60vw;
        width: 60vw;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        flex-direction: column;

        :global(#navbar) {
            text-align: left;
            padding: 15px 0px;

            border-bottom: 1px #303030 solid;
        }
    }

    #foot {
        position: absolute;
        transform: translateX(-50%);
        bottom: 5px;
        left: 50%;

        width: 100%;
        margin-top: 50px;

        text-align: center;
    }

    a,
    :global(.link) {
        text-decoration: none;
        border-bottom: 2px dotted;
        color: #2f60e9;
        cursor: pointer;

        transition: color 200ms;
    }

    a:hover,
    :global(.link:hover) {
        color: #81a0f3;
    }
</style>
