import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Vitest config must be imported from 'vitest/config' and merged

export default defineConfig({
	plugins: [react()],
	server: {
		open: true,
	},
	build: {
		outDir: `build`,
	},
	// Vitest config (not typed by Vite, but supported by Vitest)
	test: {
		environment: `jsdom`,
		globals: true,
		setupFiles: `./src/setupTests.ts`,
		exclude: [`src/tests/visualTests/**`, `node_modules/**`],
		coverage: {
			provider: `v8`,
			reporter: [`text`, `html`],
		},
	},
});
