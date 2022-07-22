<script>
    import { onMount } from "svelte";
    import githubImage from "$lib/assets/github.png";

    let page = "home";

    onMount(() => {
        console.log(document.getElementById(page));
    });
</script>

<div id={$$props.id} class="navbar">
    <div id="logo" class="icon">
        <a href="/" sveltekit:reload title="triangle100">
            <img src="favicon.png" alt="Site logo" />
        </a>
    </div>
    <div id="buttons">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/404">404</a>
    </div>

    <div id="source-button" class="icon">
        <a href="https://github.com/triangle100/triangle100-com" target="_blank" title="Source Code">
            <img src={githubImage} alt="GitHub logo" />
        </a>
    </div>
</div>

<style lang="scss">
    .navbar {
        height: 50px;

        display: flex;
        align-items: center;

        .icon {
            width: 50px;
            height: 50px;

            img {
                width: 100%;
            }

            a {
                border: none;
            }
        }

        #source-button {
            padding: 8px;
            box-sizing: border-box;
        }

        #logo {
            margin-right: 10px;
            cursor: pointer;
            border-radius: 5px;
            background-color: #eaeaea;
        }

        #buttons {
            cursor: default;

            a {
                margin-right: 10px;
                border: none;
            }
        }

        #source-button {
            margin-left: auto;
        }
    }
</style>
