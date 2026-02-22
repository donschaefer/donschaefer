import { variables } from '../../styles/variables';

describe(`variables`, () => {
	describe(`color values`, () => {
		it(`should define valid hex color codes`, () => {
			const hexPattern = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
			const colorKeys = [
				`white`, `lighter`, `light`, `dark`, `darker`, `black`,
				`primary`, `primaryLight`, `primaryDark`,
				`secondary`, `secondaryLight`, `secondaryDark`,
			] as const;

			colorKeys.forEach(key => {
				expect(variables[key]).toMatch(hexPattern);
			});
		});

		it(`should have white as #fff`, () => {
			expect(variables.white).toBe(`#fff`);
		});

		it(`should have black as #000`, () => {
			expect(variables.black).toBe(`#000`);
		});

		it(`should define primary, secondary, and their light/dark variants`, () => {
			expect(variables.primary).toBeDefined();
			expect(variables.primaryLight).toBeDefined();
			expect(variables.primaryDark).toBeDefined();
			expect(variables.secondary).toBeDefined();
			expect(variables.secondaryLight).toBeDefined();
			expect(variables.secondaryDark).toBeDefined();
		});
	});

	describe(`breakpoint values`, () => {
		it(`should define numeric breakpoint values`, () => {
			expect(typeof variables.xs).toBe(`number`);
			expect(typeof variables.sm).toBe(`number`);
			expect(typeof variables.md).toBe(`number`);
			expect(typeof variables.lg).toBe(`number`);
			expect(typeof variables.xl).toBe(`number`);
		});

		it(`should have breakpoints in ascending order`, () => {
			expect(variables.xs).toBeLessThan(variables.sm);
			expect(variables.sm).toBeLessThan(variables.md);
			expect(variables.md).toBeLessThan(variables.lg);
			expect(variables.lg).toBeLessThan(variables.xl);
		});

		it(`should start at 0 for xs`, () => {
			expect(variables.xs).toBe(0);
		});

		it(`should match standard MUI breakpoint defaults`, () => {
			expect(variables.sm).toBe(600);
			expect(variables.md).toBe(900);
			expect(variables.lg).toBe(1200);
			expect(variables.xl).toBe(1536);
		});
	});
});
