<script>
    import { signIn } from "$lib/services/firebase";

    let submitting;

    function handleChange(e) {
        console.log("form changed!", e);
    }

    async function onSubmit(e) {
        e.preventDefault();
        submitting = true;
        console.log("submitted", e);

        // @ts-ignore
        const email = document.getElementById("email").value;
        // @ts-ignore
        const password = document.getElementById("password").value;

        signIn(email, password)
            .then((res) => {
                console.log("signed in!");
            })
            .catch((error) => {
                submitting = false;
                console.log("error signing in!", error.code);
            });
    }

    function submit(e) {
        document.getElementById("form").submit();
    }
</script>

<form id="form" on:submit={onSubmit}>
    <div id="input-area">
        <label for="email">Email</label>
        <input
            type="email"
            required
            id="email"
            name="email"
            on:change={handleChange}
        />
    </div>
    <div id="input-area">
        <label for="password">Password</label>
        <input
            type="password"
            required
            id="password"
            name="password"
            on:change={handleChange}
        />
    </div>
    <button on:click={submit} disabled={submitting}>
        {submitting ? "Working..." : "Sign in"}
    </button>
</form>

<style lang="scss">
    #form {
        margin: 0px auto;

        width: 375px;
    }

    #input-area {
        margin-bottom: 10px;
        text-align: left;

        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            width: 70%;

            font-size: 16px;
        }
    }

    button {
        display: block;
        margin-left: auto;
    }
</style>
