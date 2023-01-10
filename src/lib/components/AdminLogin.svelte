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

<div class="mx-auto w-96">
	<div class="mb-2 flex items-center justify-between text-left">
		<label for="email">Email</label>
		<input
			type="email"
			required
			id="email"
			name="email"
			class="w-9/12"
			on:change={handleChange}
		/>
	</div>
	<div class="mb-2 flex items-center justify-between text-left">
		<label for="password">Password</label>
		<input
			type="password"
			required
			id="password"
			name="password"
			class="w-9/12"
			on:change={handleChange}
		/>
	</div>
	<ActionButton
		on:click={onSubmit}
		action={submitting}
		actionText="Working..."
		buttonClass="block ml-auto"
		>Sign In
	</ActionButton>
</div>
