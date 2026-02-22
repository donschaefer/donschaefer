import { experience } from '../../utilities/dateHelpers';

describe(`dateHelpers`, () => {
	describe(`experience`, () => {
		it(`should be a positive integer`, () => {
			expect(Number.isInteger(experience)).toBe(true);
			expect(experience).toBeGreaterThan(0);
		});

		it(`should reflect years since November 2005`, () => {
			const startDate = new Date(`11/1/2005`);
			const today = new Date();
			const expectedYears = Math.floor(
				(today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
			);
			expect(experience).toBe(expectedYears);
		});

		it(`should be at least 20 years`, () => {
			expect(experience).toBeGreaterThanOrEqual(20);
		});
	});
});
