import { NavRouteLabel } from '../../models/NavRouteLabel';
import { navRoute } from '../../utilities/routeHelpers';
import { errorRoute, navRoutes } from '../../data/navRoutes';

describe(`routeHelpers`, () => {
	describe(`navRoute()`, () => {
		it(`should return the Home route for NavRouteLabel.Home`, () => {
			const route = navRoute(NavRouteLabel.Home);
			expect(route.label).toBe(NavRouteLabel.Home);
			expect(route.path).toBe(`/`);
		});

		it(`should return the correct route for each NavRouteLabel`, () => {
			const labels = Object.values(NavRouteLabel);
			labels.forEach(label => {
				const route = navRoute(label);
				const expected = navRoutes.find(r => r.label === label);
				if (expected) {
					expect(route).toEqual(expected);
				}
			});
		});

		it(`should return errorRoute for an unknown label`, () => {
			const route = navRoute(`Nonexistent Page` as NavRouteLabel);
			expect(route).toEqual(errorRoute);
		});
	});
});
