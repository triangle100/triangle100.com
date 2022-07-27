<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { removePost } from "$lib/services/firebase";

    function handleRemovePost() {
        removePost($page.params.slug).then((res) => {
            goto("/admin");
        });
    }
</script>

<p>{$page.params.slug}</p>
<button on:click={handleRemovePost}>Remove post</button>
