
import { Breakpoints } from "@mui/material";
import { NavRouteLabel } from "../../models/NavRouteLabel";
import { navRoute } from "../../utilities/routeHelpers";
import { navRoutes } from "../../data/navRoutes";
import { responsiveImageSuffix, responsiveImageUrl } from "../../utilities/responsiveHelpers";
import { getShortNavRouteLabel } from "../../utilities/stringHelpers";
// TODO: get SCSS variables to import during test so that "muiBreakPoints can be leveraged instead of the current hard-coded breakpoints"
// import { muiBreakPoints } from "../../themes/muiBreakpoints";

const breakpoints = {
	values: {		
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	}
} as Breakpoints;
const baseUrl = `../media/images/photography/photography_001.jpg`;
const adjustmentValue = 1;

describe(`responsiveImageSuffix() tests`, () => {
	it(`responsiveImageSuffix() generates the expected suffix on xl devices`, () => {
		const xlDeviceSize = breakpoints.values.lg + adjustmentValue;
		expect(responsiveImageSuffix(xlDeviceSize, breakpoints)).toBe(``);
	});
	it(`responsiveImageSuffix() generates the expected suffix on lg devices`, () => {
		const lgDeviceSize = breakpoints.values.md + adjustmentValue;
		expect(responsiveImageSuffix(lgDeviceSize, breakpoints)).toBe(`-lg`);
	});
	it(`responsiveImageSuffix() generates the expected suffix on md devices`, () => {
		const mdDeviceSize = breakpoints.values.sm + adjustmentValue;
		expect(responsiveImageSuffix(mdDeviceSize, breakpoints)).toBe(`-md`);
	});
	it(`responsiveImageSuffix() generates the expected suffix on sm devices`, () => {
		const smDeviceSize = breakpoints.values.sm;
		expect(responsiveImageSuffix(smDeviceSize, breakpoints)).toBe(`-sm`);
	});
});

describe(`responsiveImageUrl() tests`, () => {
	it(`responsiveImageUrl() generates the expected url on xl devices`, () => {
		const xlDeviceSize = breakpoints.values.lg + adjustmentValue;
		expect(responsiveImageUrl(xlDeviceSize, breakpoints, baseUrl)).toBe(`../media/images/photography/photography_001.jpg`);
	});
	it(`responsiveImageUrl() generates the expected url on lg devices`, () => {
		const lgDeviceSize = breakpoints.values.md + adjustmentValue;
		expect(responsiveImageUrl(lgDeviceSize, breakpoints, baseUrl)).toBe(`../media/images/photography/photography_001-lg.jpg`);
	});
	it(`responsiveImageUrl() generates the expected url on md devices`, () => {
		const mdDeviceSize = breakpoints.values.sm + adjustmentValue;
		expect(responsiveImageUrl(mdDeviceSize, breakpoints, baseUrl)).toBe(`../media/images/photography/photography_001-md.jpg`);
	});
	it(`responsiveImageUrl() generates the expected url on sm devices`, () => {
		const smDeviceSize = breakpoints.values.sm;
		expect(responsiveImageUrl(smDeviceSize, breakpoints, baseUrl)).toBe(`../media/images/photography/photography_001-sm.jpg`);
	});
});

describe(`navRoute() tests`, () => {
	it(`navRoute() always generates the expected paths`, () => {
		navRoutes.forEach(route => {
			expect(navRoute(route.label as NavRouteLabel)).toEqual(route);
		});
	});
});

describe(`getShortNavRouteLabel() tests`, () => {
	it(`getShortNavRouteLabel() always generates the expected labels`, () => {
		navRoutes.forEach(route => {
			expect(getShortNavRouteLabel(route.label as NavRouteLabel)).toEqual(route.shortLabel);
		});
	});
});