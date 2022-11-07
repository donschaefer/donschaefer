import { useEffect, useState } from "react";
import { handleResizeListeners } from "../utilities/responsiveHelpers";

export function useElementDimensions(selector: string) {
	const [elementDimensions, setElementDimensions] = useState({
		height: 0,
		width: 0
	});

	useEffect(() => {		
		const updateHeaderDimensions = () => {			
			const element = document.querySelector(selector);
			const currentElementHeight = element ? Math.ceil(element.clientHeight) : 0;
			const currentElementWidth = element ? Math.ceil(element.clientWidth) : 0;
			if ((elementDimensions.height !== currentElementHeight) 
				|| (elementDimensions.width !== currentElementWidth)) {
				setElementDimensions({
					height: currentElementHeight,
					width: currentElementWidth
				});
			}
		};

		handleResizeListeners(window, true, updateHeaderDimensions);
		updateHeaderDimensions();		
		return () => {
			handleResizeListeners(window, false, updateHeaderDimensions);
		};
	}, [selector, elementDimensions]);
	
	return [elementDimensions.height, elementDimensions.width];
}