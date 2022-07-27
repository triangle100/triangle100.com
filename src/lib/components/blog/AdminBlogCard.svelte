<script>
    import { removePost } from "$lib/services/firebase/db";

    export let title;
    export let id;

    function deletePost(slug) {
        removePost(slug).then((res) => {
            window.location.reload();
        });
    }
</script>

<div id="card">
    <div id="left">
        <h2>{title}</h2>
    </div>
    <div id="right">
        <a href={`blog/${id}`} target="_blank">View</a>
        <a href={`blog/${id}?edit`} target="_blank">Edit</a>
        <span class="link" id="delete" on:click={() => deletePost(id)}
            >Delete</span
        >
    </div>
</div>

<style lang="scss">
    #card {
        display: flex;
        justify-content: space-between;
        overflow: auto;
        flex-direction: row;
        align-items: center;

        border: 1px solid black;
        border-radius: 20px;
        margin: 0px auto 20px auto;
        padding: 0px 20px;
        box-sizing: border-box;

        #right {
            a,
            .link {
                margin-left: 10px;
                border: none;
            }
        }

        #delete {
            color: #ff3232;
            font-weight: bold;
        }
    }
</style>
