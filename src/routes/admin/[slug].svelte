<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { removePost } from "$lib/services/firebase/db";
    import ActionButton from "$lib/components/ActionButton.svelte";

    let removing;

    function handleRemovePost() {
        removing = true;
        
        removePost($page.params.slug).then((res) => {
            goto("/admin");
        }).catch((error) => {
            removing = false;
        });
    }
</script>

<p>{$page.params.slug}</p>
<ActionButton
    on:click={handleRemovePost}
    action={removing}
    actionText="Removing..."
    >Remove Post
</ActionButton>
