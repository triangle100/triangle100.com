<script>
    function handleChange(e) {
        console.log("form changed!", e);
    }

    function onSubmit(e) {
        e.preventDefault();

        console.log("submitted", e);
    }
</script>

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
<button on:click={onSubmit}>Login</button>

<style lang="scss">
    #input-area {
        margin-bottom: 10px;
        text-align: left;

        display: flex;
        align-items: center;

        label {
            margin-right: auto;
        }

        input {
            margin-left: auto;
            width: 70%;

            font-size: 16px;
        }
    }

    button {
        display: block;
        margin-left: auto;
    }
</style>
