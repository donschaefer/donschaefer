import { NavRouteLabel } from '../../models/NavRouteLabel';
import { navRoutes } from '../../data/navRoutes';
import { getShortNavRouteLabel } from '../../utilities/stringHelpers';

describe(`stringHelpers`, () => {
	describe(`getShortNavRouteLabel()`, () => {
		it(`should generate the expected short label for every route`, () => {
			navRoutes.forEach(route => {
				expect(getShortNavRouteLabel(route.label as NavRouteLabel)).toEqual(route.shortLabel);
			});
		});
	});
});
