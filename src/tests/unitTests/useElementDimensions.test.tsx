import { renderHook } from '@testing-library/react';
import { useElementDimensions } from '../../hooks/useElementHeight';

describe(`useElementDimensions`, () => {
	it(`should return [0, 0] when selector does not match any element`, () => {
		const { result } = renderHook(() => useElementDimensions(`#nonexistent`));
		expect(result.current).toEqual([0, 0]);
	});

	it(`should add resize and orientationchange event listeners on mount`, () => {
		const addSpy = vi.spyOn(window, `addEventListener`);
		const { unmount } = renderHook(() => useElementDimensions(`#test`));

		expect(addSpy).toHaveBeenCalledWith(`orientationchange`, expect.any(Function));
		expect(addSpy).toHaveBeenCalledWith(`resize`, expect.any(Function));

		unmount();
		addSpy.mockRestore();
	});

	it(`should remove resize and orientationchange event listeners on unmount`, () => {
		const removeSpy = vi.spyOn(window, `removeEventListener`);
		const { unmount } = renderHook(() => useElementDimensions(`#test`));

		unmount();

		expect(removeSpy).toHaveBeenCalledWith(`orientationchange`, expect.any(Function));
		expect(removeSpy).toHaveBeenCalledWith(`resize`, expect.any(Function));

		removeSpy.mockRestore();
	});

	it(`should return the dimensions of a matching element`, () => {
		const el = document.createElement(`div`);
		el.id = `test-el`;
		document.body.appendChild(el);

		Object.defineProperty(el, `clientHeight`, { configurable: true, value: 80 });
		Object.defineProperty(el, `clientWidth`, { configurable: true, value: 320 });

		const { result } = renderHook(() => useElementDimensions(`#test-el`));

		expect(result.current).toEqual([80, 320]);

		document.body.removeChild(el);
	});
});
