
import { Breakpoints } from "@mui/material";
import { responsiveImageUrl } from "../../utilities/responsiveHelpers";
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

//TODO: Add test for responsiveImageSuffix()

// TODO: Add test for navRoute()

// TODO: Add test for getShortNavRouteLabel()