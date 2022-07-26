<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import "$lib/services/firebase";
    import SEO from "$lib/components/SEO.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import BuildNumber from "$lib/components/BuildNumber.svelte";
    import "highlight.js/styles/stackoverflow-light.css";

    onMount(() => {
        window.onunhandledrejection = (e) => {
            goto("/");
        };
    });
</script>

<SEO />

<main>
    <Navbar id="navbar" />
    <div id="slot">
        <slot />
    </div>

    <div id="spacer" />
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
</main>

<style lang="scss">
    #slot {
        word-wrap: break-word;
    }

    #spacer {
        height: 50px;
    }

    main {
        position: relative;
        text-align: center;

        min-width: 60vw;
        min-height: 100vh;
        width: 60vw;
        margin: 0 auto;

        display: flex;
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

        text-align: center;
    }

    :global {
        body {
            margin: 0px;
            background-color: #fafafa;
            color: #303030;
        }

        hr {
            border: none;
            border-bottom: 1px solid black;
            width: 95%;
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

        input,
        button,
        textarea {
            min-height: 25px;

            box-sizing: border-box;
            border: 1px solid black;
            border-radius: 3px;

            background-color: #ffffff;
        }

        input {
            padding-left: 5px;
        }

        button {
            padding: 0px 10px;
            height: 25px;

            text-align: center;
            font-size: 16px;
        }

        button:hover {
            background-color: #e6e6e6;
        }
    }
</style>
