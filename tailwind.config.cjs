/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'space-grotesk': ['Space Grotesk', 'sans-serif']
			},
			colors:{
				'custom-dark':'rgb(24 24 24 / var(--tw-bg-opacity))',
				'solana-dark':'#10141f'
			}
		}
	},
	plugins: []
};
