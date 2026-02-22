# Getting Started with Vite React App

This project is now powered by [Vite](https://vitejs.dev/) and uses [Vitest](https://vitest.dev/) for unit testing and [Playwright](https://playwright.dev/) for visual regression testing.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode using Vite.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.\
The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder using Vite.

### `npm run preview`

Previews the production build locally.

### `npm test`

Launches the Vitest UI for running and managing unit tests interactively.

### `npm run test:unit`

Runs all unit tests in a single non-interactive pass using Vitest.

### `npm run test:visual`

Runs visual regression tests using Playwright. On the first run (when no reference screenshots exist), screenshots are captured and saved as baselines — the tests will fail so you can manually review the images. On subsequent runs, new screenshots are compared against the baselines; tests pass if they match and fail if they differ.

### `npm run test:visual:update`

Regenerates all visual regression baselines by overwriting existing reference screenshots with new ones.

### `npm run test:all`

Runs unit tests followed by visual regression tests in a single command.

### `npm run lint`

Runs ESLint on the `src` directory for `.ts`, `.tsx`, `.js`, and `.jsx` files.

## Testing

### Unit Tests

- Run using [Vitest](https://vitest.dev/), which is Jest-compatible for most syntax and assertions.
- Test files are located in `src/tests/unitTests/` and use `.test.ts` or `.test.tsx` extensions.
- To run interactively, use `npm test`. To run in a single pass, use `npm run test:unit`.

### Visual Regression Tests

- Run using [Playwright](https://playwright.dev/) with Chromium.
- Test files are located in `src/tests/visualTests/`.
- Each testable route is screenshotted at two viewport sizes:
  - **Desktop 4K** (3840 × 2160)
  - **iPhone SE 3rd gen** (375 × 667)
- Reference screenshots are stored in `src/tests/visualTests/visual-regression.spec.ts-snapshots/` and should be committed to version control.
- **First run:** Screenshots are captured and saved as baselines. Tests fail so you can review the images before accepting them.
- **Subsequent runs:** New screenshots are compared to baselines. Tests pass if images match, fail if they differ.
- **Regenerating baselines:** Run `npm run test:visual:update` to overwrite all existing references with fresh screenshots.
- **Prerequisites:** Chromium must be installed for Playwright. Run `npx playwright install chromium` if it is not already present.

## Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [Vitest Documentation](https://vitest.dev/guide/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [React Documentation](https://react.dev/)
