const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	variants: {
		extend: {
			margin: ['odd', 'even']
		}
	},

	plugins: []
};

module.exports = config;
