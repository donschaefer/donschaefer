import mediaData from '../../data/media.json';
import { MediaType } from '../../models/MediaType';

const { media } = mediaData;
const validTypes = Object.values(MediaType) as string[];

describe(`media data`, () => {
	describe(`structure and completeness`, () => {
		it(`should contain at least one media item`, () => {
			expect(media.length).toBeGreaterThan(0);
		});

		it(`should have a non-empty title for every item`, () => {
			media.forEach(item => {
				expect(item.title).toBeTruthy();
			});
		});

		it(`should have a non-empty url for every item`, () => {
			media.forEach(item => {
				expect(item.url).toBeTruthy();
			});
		});

		it(`should have a valid type for every item`, () => {
			media.forEach(item => {
				expect(validTypes).toContain(item.type);
			});
		});
	});

	describe(`type groupings`, () => {
		it(`should contain Animation items`, () => {
			const animations = media.filter(item => item.type === MediaType.Animation);
			expect(animations.length).toBeGreaterThan(0);
		});

		it(`should contain Graphic Design items`, () => {
			const graphicDesign = media.filter(item => item.type === MediaType.GraphicDesign);
			expect(graphicDesign.length).toBeGreaterThan(0);
		});

		it(`should contain Photography items`, () => {
			const photography = media.filter(item => item.type === MediaType.Photography);
			expect(photography.length).toBeGreaterThan(0);
		});

		it(`should contain UI Design items`, () => {
			const uiDesign = media.filter(item => item.type === MediaType.UiDesign);
			expect(uiDesign.length).toBeGreaterThan(0);
		});
	});

	describe(`animation items`, () => {
		it(`should have a thumbnail for every Animation item`, () => {
			const animations = media.filter(item => item.type === MediaType.Animation);
			animations.forEach(item => {
				expect(item.thumbnail).toBeTruthy();
			});
		});
	});
});
