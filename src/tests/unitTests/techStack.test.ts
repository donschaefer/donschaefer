import { techStack } from '../../data/techStack';
import { TechStackLabel } from '../../models/TechStackLabel';

describe(`techStack data`, () => {
	describe(`structure and completeness`, () => {
		it(`should contain at least one item`, () => {
			expect(techStack.length).toBeGreaterThan(0);
		});

		it(`should have unique keys for every item`, () => {
			const keys = techStack.map(t => t.key);
			expect(new Set(keys).size).toBe(keys.length);
		});

		it(`should have a non-empty key for every item`, () => {
			techStack.forEach(item => {
				expect(item.key).toBeTruthy();
			});
		});

		it(`should have a non-empty label for every item`, () => {
			techStack.forEach(item => {
				expect(item.label).toBeTruthy();
			});
		});

		it(`should have an icon defined for every item`, () => {
			techStack.forEach(item => {
				expect(item.icon).toBeDefined();
			});
		});
	});

	describe(`labels`, () => {
		it(`should only include labels that are valid TechStackLabel values`, () => {
			const validLabels = Object.values(TechStackLabel) as string[];
			techStack.forEach(item => {
				expect(validLabels).toContain(item.label);
			});
		});

		it(`should include React`, () => {
			const react = techStack.find(t => t.label === TechStackLabel.React);
			expect(react).toBeDefined();
		});

		it(`should include TypeScript`, () => {
			const ts = techStack.find(t => t.label === TechStackLabel.TypeScript);
			expect(ts).toBeDefined();
		});
	});
});
