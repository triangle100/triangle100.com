<script>
    // @ts-nocheck PLEASE REMOVE

    import ActionButton from "$lib/components/ActionButton.svelte";
    import { signIn } from "$lib/services/firebase/auth";

    let submitting;

    function handleChange(e) {
        // Handle input change
    }

    async function onSubmit(e) {
        e.preventDefault();
        submitting = true;

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        //TODO Drop validity reporting (modal?)
        emailInput.setCustomValidity("");
        passwordInput.setCustomValidity("");
        if (emailInput.reportValidity() && passwordInput.reportValidity()) {
            const email = emailInput.value;
            const password = passwordInput.value;

            signIn(email, password).catch((error) => {
                const pretty = error.code.split("/")[1].replace(/-/g, " ");
                submitting = false;

                if (error.code == "auth/wrong-password") {
                    passwordInput.setCustomValidity(pretty);
                    passwordInput.reportValidity();
                } else {
                    emailInput.setCustomValidity(pretty);
                    emailInput.reportValidity();
                }

                console.error("Error signing in!", error.code);
            });
        } else {
            submitting = false;
        }
    }
</script>

<div id="form">
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

    <ActionButton
        on:click={onSubmit}
        action={submitting}
        actionText="Working..."
        id="btn"
        >Sign In
    </ActionButton>
</div>

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

    :global(#btn) {
        display: block;
        margin-left: auto;
    }
</style>
