import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests
 *
 * For every testable route × device-size combination the test:
 *  1. Navigates to the route and waits for the page to be fully loaded.
 *  2. Uses Playwright's built-in toHaveScreenshot() to compare against
 *     a stored reference image.
 *
 * Behaviour (controlled by updateSnapshots: 'missing' in playwright.config.ts):
 *   • If no reference screenshot exists → one is created and the test passes.
 *   • If a reference exists → a new screenshot is taken and compared.
 *     The test passes if the images match and fails if they differ.
 *
 * Reference images are stored automatically by Playwright in:
 *   src/tests/visualTests/visual-regression.spec.ts-snapshots/
 *
 * Device sizes (configured as Playwright projects):
 *   • desktop-4k   – 3840 × 2160  (standard 4K monitor)
 *   • iphone-se    – 375 × 667    (iPhone SE 3rd generation)
 */

/** Routes that render local page components (external links are excluded). */
const routes: { name: string; path: string }[] = [
	{ name: `home`, path: `/` },
	{ name: `development-case-studies`, path: `/development-case-studies` },
	{ name: `gallery`, path: `/gallery` },
	{ name: `philosophy`, path: `/philosophy` },
];

for (const route of routes) {
	test(`visual – ${route.name}`, async ({ page }) => {
		await page.goto(route.path, { waitUntil: `networkidle` });

		// Give animations, transitions, and lazy-loaded images time to settle.
		await page.waitForTimeout(2_000);

		await expect(page).toHaveScreenshot(`${route.name}.png`, {
			fullPage: true,
			maxDiffPixelRatio: 0.01,
		});
	});
}
