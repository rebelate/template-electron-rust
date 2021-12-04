import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		ssr: false,
	},
	preprocess: sveltePreprocess(),
};
export default config;