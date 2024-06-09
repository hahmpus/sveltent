import { join } from 'path';
import type { Config } from 'tailwindcss';


const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["light", "dark"],
	  },
	plugins: [
		require('daisyui')
	]
} satisfies Config;

export default config;