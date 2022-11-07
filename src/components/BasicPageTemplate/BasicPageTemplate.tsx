import React from 'react';
import { useElementDimensions } from '../../hooks/useElementHeight';
import { ICustomContainerProps } from '../../models/CustomContainer';

const BasicPageTemplate = ({ children }: ICustomContainerProps) => {
	const [headerHeight] = useElementDimensions(`header`);

	return (
		<article style={{ paddingTop: headerHeight }}>
			{children}
		</article>
	);
};

export default BasicPageTemplate;