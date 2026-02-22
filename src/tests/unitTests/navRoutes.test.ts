import { navRoutes, errorRoute } from '../../data/navRoutes';
import { NavRouteLabel } from '../../models/NavRouteLabel';

describe(`navRoutes data`, () => {
	describe(`structure and completeness`, () => {
		it(`should contain at least one route`, () => {
			expect(navRoutes.length).toBeGreaterThan(0);
		});

		it(`should have unique keys for every route`, () => {
			const keys = navRoutes.map(r => r.key);
			expect(new Set(keys).size).toBe(keys.length);
		});

		it(`should have unique paths for every route`, () => {
			const paths = navRoutes.map(r => r.path);
			expect(new Set(paths).size).toBe(paths.length);
		});

		it(`should have a non-empty label for every route`, () => {
			navRoutes.forEach(route => {
				expect(route.label).toBeTruthy();
			});
		});

		it(`should have a non-empty key for every route`, () => {
			navRoutes.forEach(route => {
				expect(route.key).toBeTruthy();
			});
		});

		it(`should have a non-empty path for every route`, () => {
			navRoutes.forEach(route => {
				expect(route.path).toBeTruthy();
			});
		});

		it(`should have an icon defined for every route`, () => {
			navRoutes.forEach(route => {
				expect(route.icon).toBeDefined();
			});
		});
	});

	describe(`internal routes`, () => {
		const internalRoutes = navRoutes.filter(r => r.path.startsWith(`/`));

		it(`should have at least one internal route`, () => {
			expect(internalRoutes.length).toBeGreaterThan(0);
		});

		it(`should have a pageComponent for every internal route`, () => {
			internalRoutes.forEach(route => {
				expect(route.pageComponent).toBeDefined();
			});
		});

		it(`should have paths starting with / for internal routes`, () => {
			internalRoutes.forEach(route => {
				expect(route.path.startsWith(`/`)).toBe(true);
			});
		});
	});

	describe(`external routes`, () => {
		const externalRoutes = navRoutes.filter(r => r.path.startsWith(`http`));

		it(`should have paths starting with https:// for external routes`, () => {
			externalRoutes.forEach(route => {
				expect(route.path.startsWith(`https://`)).toBe(true);
			});
		});

		it(`should not have a pageComponent for external routes`, () => {
			externalRoutes.forEach(route => {
				expect(route.pageComponent).toBeUndefined();
			});
		});
	});

	describe(`specific routes`, () => {
		it(`should include a Home route at path /`, () => {
			const home = navRoutes.find(r => r.label === NavRouteLabel.Home);
			expect(home).toBeDefined();
			expect(home?.path).toBe(`/`);
		});

		it(`should include a Development Case Studies route`, () => {
			const cs = navRoutes.find(r => r.label === NavRouteLabel.DevelopmentCaseStudies);
			expect(cs).toBeDefined();
			expect(cs?.path).toBe(`/development-case-studies`);
		});

		it(`should include a Gallery route`, () => {
			const gallery = navRoutes.find(r => r.label === NavRouteLabel.Gallery);
			expect(gallery).toBeDefined();
			expect(gallery?.path).toBe(`/gallery`);
		});

		it(`should include a Philosophy route`, () => {
			const philosophy = navRoutes.find(r => r.label === NavRouteLabel.Philosophy);
			expect(philosophy).toBeDefined();
			expect(philosophy?.path).toBe(`/philosophy`);
		});
	});

	describe(`errorRoute`, () => {
		it(`should have a /404 path`, () => {
			expect(errorRoute.path).toBe(`/404`);
		});

		it(`should have a "Not Found" label`, () => {
			expect(errorRoute.label).toBe(`Not Found`);
		});

		it(`should have a shortLabel of "Error"`, () => {
			expect(errorRoute.shortLabel).toBe(`Error`);
		});

		it(`should have a pageComponent defined`, () => {
			expect(errorRoute.pageComponent).toBeDefined();
		});

		it(`should have an icon defined`, () => {
			expect(errorRoute.icon).toBeDefined();
		});
	});
});
