import caseStudiesData from '../../data/caseStudies.json';

const { casestudies } = caseStudiesData;

describe(`caseStudies data`, () => {
	describe(`structure and completeness`, () => {
		it(`should contain at least one case study`, () => {
			expect(casestudies.length).toBeGreaterThan(0);
		});

		it(`should have unique ids for every case study`, () => {
			const ids = casestudies.map(cs => cs.id);
			expect(new Set(ids).size).toBe(ids.length);
		});

		it(`should have a non-empty client for every case study`, () => {
			casestudies.forEach(cs => {
				expect(cs.client).toBeTruthy();
			});
		});

		it(`should have a non-empty goal for every case study`, () => {
			casestudies.forEach(cs => {
				expect(cs.goal).toBeTruthy();
			});
		});

		it(`should have a non-empty backgroundUrl for every case study`, () => {
			casestudies.forEach(cs => {
				expect(cs.backgroundUrl).toBeTruthy();
			});
		});

		it(`should have backgroundUrl as a relative path for every case study`, () => {
			casestudies.forEach(cs => {
				expect(cs.backgroundUrl.startsWith(`../`)).toBe(true);
			});
		});

		it(`should have a non-empty agency for every case study`, () => {
			casestudies.forEach(cs => {
				expect(cs.agency).toBeTruthy();
			});
		});
	});

	describe(`tags`, () => {
		it(`should have a non-empty tags array for every case study`, () => {
			casestudies.forEach(cs => {
				expect(Array.isArray(cs.tags)).toBe(true);
				expect(cs.tags.length).toBeGreaterThan(0);
			});
		});

		it(`should have non-empty tag strings for every case study`, () => {
			casestudies.forEach(cs => {
				cs.tags.forEach(tag => {
					expect(tag).toBeTruthy();
				});
			});
		});
	});

	describe(`contributions`, () => {
		it(`should have a non-empty contributions array for every case study`, () => {
			casestudies.forEach(cs => {
				expect(Array.isArray(cs.contributions)).toBe(true);
				expect(cs.contributions.length).toBeGreaterThan(0);
			});
		});

		it(`should have a non-empty summary for every contribution`, () => {
			casestudies.forEach(cs => {
				cs.contributions.forEach(contribution => {
					expect(contribution.summary).toBeTruthy();
				});
			});
		});

		it(`should have a non-empty description for every contribution`, () => {
			casestudies.forEach(cs => {
				cs.contributions.forEach(contribution => {
					expect(contribution.description).toBeTruthy();
				});
			});
		});
	});

	describe(`URLs`, () => {
		it(`should have clientUrl as either "NDA" or a valid URL for every case study`, () => {
			casestudies.forEach(cs => {
				expect(
					cs.clientUrl === `NDA` || cs.clientUrl.startsWith(`http`)
				).toBe(true);
			});
		});

		it(`should have agencyUrl as a valid URL for every case study`, () => {
			casestudies.forEach(cs => {
				expect(cs.agencyUrl.startsWith(`http`)).toBe(true);
			});
		});
	});
});
