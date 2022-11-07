import { Breakpoints } from '@mui/material';

export const responsiveImageSuffix = (ww: number, breakpoints: Breakpoints): string => {
	if (ww > breakpoints.values.lg) {
		return ``;
	} else if (ww > breakpoints.values.md) {
		return `-lg`;
	} else if (ww > breakpoints.values.sm) {
		return `-md`;
	} 
	return `-sm`;	
};

export const responsiveImageUrl = (ww: number, breakpoints: Breakpoints, baseUrl: string): string => {
	if (ww > breakpoints.values.lg) {
		return baseUrl;
	} 
	return baseUrl.split(`.`).map((v, i) => i === (baseUrl.split(`.`).length - 2) ? v += responsiveImageSuffix(ww, breakpoints) : v).join(`.`);	
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleResizeListeners = (window: Window, add: boolean, func: () => any) => {
	if (add) {
		window.addEventListener(`orientationchange`, func);
		window.addEventListener(`resize`, func);
	} else {
		window.removeEventListener(`orientationchange`, func);
		window.removeEventListener(`resize`, func);
	}
};