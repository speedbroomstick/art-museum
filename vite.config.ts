/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'happy-dom',
	},
	resolve: {
		alias: {
			assets: '/src/assets',
			components: '/src/components',
			constants: '/src/constants',
			pages: '/src/pages',
			store: '/src/store',
			utils: '/src/utils',
		},
	},
});
