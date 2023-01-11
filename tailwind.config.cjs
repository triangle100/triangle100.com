const config = {
	content: ["./src/**/*.{html,js,svelte,ts,css}"],
	theme: {
		extend: {
			colors: {
				bluegray: {
					50: "#f9fafb",
					100: "#eeeff2",
					200: "#e2e4e9",
					300: "#cbcfd8",
					400: "#bfc4cf",
					500: "#636d83",
					600: "#4d5466",
					700: "#373c49",
					800: "#262A32",
					900: "#1E2128",
				},
			},
		},
	},
	plugins: [],
	darkMode: "class",
};

module.exports = config;
