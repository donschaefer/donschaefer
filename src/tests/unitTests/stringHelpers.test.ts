import { NavRouteLabel } from '../../models/NavRouteLabel';
import { navRoutes } from '../../data/navRoutes';
import { getShortNavRouteLabel } from '../../utilities/stringHelpers';

describe(`stringHelpers`, () => {
	describe(`getShortNavRouteLabel()`, () => {
		it(`should return "Development" for DevelopmentCaseStudies`, () => {
			expect(getShortNavRouteLabel(NavRouteLabel.DevelopmentCaseStudies)).toBe(`Development`);
		});

		it(`should return the label itself for all other NavRouteLabel values`, () => {
			const passthroughLabels = [
				NavRouteLabel.Home,
				NavRouteLabel.Connect,
				NavRouteLabel.GitHub,
				NavRouteLabel.Gallery,
				NavRouteLabel.Philosophy,
			];
			passthroughLabels.forEach(label => {
				expect(getShortNavRouteLabel(label)).toBe(label);
			});
		});

		it(`should generate the expected short label for every route`, () => {
			navRoutes.forEach(route => {
				expect(getShortNavRouteLabel(route.label as NavRouteLabel)).toEqual(route.shortLabel);
			});
		});
	});
});
