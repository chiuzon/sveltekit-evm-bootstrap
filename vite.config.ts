import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import nodePolyfills from 'rollup-plugin-polyfill-node';

const MODE = process.env.NODE_ENV;
const development = MODE === 'development';


export default defineConfig({
	plugins: [sveltekit(), development && nodePolyfills({
		include: [
			'node_modules/**/*.js',
			new RegExp('node_modules/.vite/.*js')
		]
	})],
	optimizeDeps: {
		exclude: ['wrtc', 'http', "viem"],
		include: [
			'@web3-onboard/core',
			'@web3-onboard/gas',
			'@web3-onboard/sequence',
			'js-sha3',
			'@ethersproject/bignumber'
		]
	},
	resolve: {
		alias: {
			crypto: 'crypto-browserify',
			stream: 'stream-browserify',
			assert: 'assert',
		}
	},
	build: {
		rollupOptions: {
			external: ['@web3-onboard/*'],
			plugins: [nodePolyfills()]
		},
		commonjsOptions: {
			transformMixedEsModules: true
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
