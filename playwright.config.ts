import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for visual regression tests.
 *
 * Tests run against the Vite dev server (started automatically via webServer)
 * at two viewport sizes:
 *   - Desktop 4K  (3840 × 2160)
 *   - iPhone SE 3rd gen (375 × 667)
 *
 * Screenshot references are managed by Playwright's built-in snapshot system
 * and stored alongside the test file in a -snapshots directory.
 *
 * updateSnapshots behaviour (default):
 *   - First run (no reference exists): screenshot is saved as the baseline → test fails
 *     so you can manually review the generated images.
 *   - Subsequent runs: screenshot is compared to the baseline → pass if match, fail if different.
 *   - To accept all current screenshots as baselines: npx playwright test --update-snapshots
 */
export default defineConfig({
	testDir: `./src/tests/visualTests`,

	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,

	/* No retries – visual diffs should be deterministic */
	retries: 0,

	/* Run tests sequentially to keep resource usage predictable */
	workers: 1,

	/* Reporter */
	reporter: `list`,

	/* Shared settings for all projects */
	use: {
		baseURL: `http://localhost:5173`,
		/* Take a screenshot on failure for debugging */
		screenshot: `only-on-failure`,
	},

	/* Two projects: one per device size */
	projects: [
		{
			name: `desktop-4k`,
			use: {
				...devices[`Desktop Chrome`],
				viewport: { width: 3840, height: 2160 },
			},
		},
		{
			name: `iphone-se`,
			use: {
				...devices[`Desktop Chrome`],
				viewport: { width: 375, height: 667 },
				isMobile: true,
				hasTouch: true,
				deviceScaleFactor: 2,
			},
		},
	],

	/* Start the Vite dev server before running tests */
	webServer: {
		command: `npx vite --port 5173`,
		port: 5173,
		reuseExistingServer: !process.env.CI,
		timeout: 30_000,
	},
});
