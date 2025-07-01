import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// Vitest config must be imported from 'vitest/config' and merged

export default defineConfig({
	plugins: [react(), eslint()],
	server: {
		open: true,
	},
	build: {
		outDir: `build`,
	},
	// Vitest config (not typed by Vite, but supported by Vitest)
	// @ts-expect-error: 'test' is a Vitest config extension
	test: {
		environment: `jsdom`,
		globals: true,
		setupFiles: `./src/setupTests.ts`,
		coverage: {
			provider: `v8`,
			reporter: [`text`, `html`],
		},
	},
});
