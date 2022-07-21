<script>
    import { onMount } from "svelte";

    let page = "home";

    onMount(() => {
        console.log(document.getElementById(page));
    });
</script>

<div id={$$props.id} class="navbar">
    <div id="logo">
        <a href="/" sveltekit:reload>
            <img src="favicon.png" alt="Site logo" />
        </a>
    </div>
    <div id="buttons">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/404">404</a>
    </div>
</div>

<style lang="scss">
    .navbar {
        height: 50px;

        display: flex;
        align-items: center;

        #logo {
            width: 50px;
            margin-right: 10px;
            cursor: pointer;
            border-radius: 5px;
            background-color: #eaeaea;

            a {
                border: none;
            }

            img {
                width: 100%;
            }
        }

        #buttons {
            cursor: default;

            a {
                margin-right: 10px;
                border: none;
            }
        }
    }
</style>
