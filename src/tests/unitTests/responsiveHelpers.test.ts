import { Breakpoints } from '@mui/material';
import { responsiveImageSuffix, responsiveImageUrl, handleResizeListeners } from '../../utilities/responsiveHelpers';

const breakpoints = {
	values: {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536,
	},
} as Breakpoints;

describe(`responsiveHelpers`, () => {
	describe(`responsiveImageSuffix() boundary conditions`, () => {
		it(`should return "-sm" at exactly the sm breakpoint value`, () => {
			expect(responsiveImageSuffix(600, breakpoints)).toBe(`-sm`);
		});

		it(`should return "-sm" below the sm breakpoint value`, () => {
			expect(responsiveImageSuffix(0, breakpoints)).toBe(`-sm`);
		});

		it(`should return "-md" at exactly one pixel above the sm breakpoint`, () => {
			expect(responsiveImageSuffix(601, breakpoints)).toBe(`-md`);
		});

		it(`should return "-md" at exactly the md breakpoint value`, () => {
			expect(responsiveImageSuffix(900, breakpoints)).toBe(`-md`);
		});

		it(`should return "-lg" at exactly one pixel above the md breakpoint`, () => {
			expect(responsiveImageSuffix(901, breakpoints)).toBe(`-lg`);
		});

		it(`should return "-lg" at exactly the lg breakpoint value`, () => {
			expect(responsiveImageSuffix(1200, breakpoints)).toBe(`-lg`);
		});

		it(`should return "" (no suffix) at exactly one pixel above the lg breakpoint`, () => {
			expect(responsiveImageSuffix(1201, breakpoints)).toBe(``);
		});

		it(`should return "" (no suffix) for very large screen widths`, () => {
			expect(responsiveImageSuffix(3840, breakpoints)).toBe(``);
		});
	});

	describe(`responsiveImageUrl() with various URL formats`, () => {
		it(`should insert suffix before the file extension for a simple filename`, () => {
			const url = `photo.jpg`;
			expect(responsiveImageUrl(600, breakpoints, url)).toBe(`photo-sm.jpg`);
		});

		it(`should insert suffix correctly for URLs with multiple dots in the path`, () => {
			const url = `../media/images/photo.min.jpg`;
			expect(responsiveImageUrl(600, breakpoints, url)).toBe(`../media/images/photo.min-sm.jpg`);
		});

		it(`should insert suffix correctly for PNG files`, () => {
			const url = `../media/images/graphic.png`;
			expect(responsiveImageUrl(901, breakpoints, url)).toBe(`../media/images/graphic-lg.png`);
		});

		it(`should return the original URL for xl screen sizes`, () => {
			const url = `../media/images/photo.jpg`;
			expect(responsiveImageUrl(1536, breakpoints, url)).toBe(url);
		});
	});

	describe(`handleResizeListeners()`, () => {
		it(`should add resize and orientationchange event listeners when add is true`, () => {
			const mockFn = vi.fn();
			const addSpy = vi.spyOn(window, `addEventListener`);

			handleResizeListeners(window, true, mockFn);

			expect(addSpy).toHaveBeenCalledWith(`orientationchange`, mockFn);
			expect(addSpy).toHaveBeenCalledWith(`resize`, mockFn);

			addSpy.mockRestore();
		});

		it(`should remove resize and orientationchange event listeners when add is false`, () => {
			const mockFn = vi.fn();
			const removeSpy = vi.spyOn(window, `removeEventListener`);

			handleResizeListeners(window, false, mockFn);

			expect(removeSpy).toHaveBeenCalledWith(`orientationchange`, mockFn);
			expect(removeSpy).toHaveBeenCalledWith(`resize`, mockFn);

			removeSpy.mockRestore();
		});
	});
});
