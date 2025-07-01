import { styled } from '@mui/material';
import React from 'react';

export interface ITagProps {
	text: string;
}

// eslint-disable-next-line quotes
const StyledTag = styled('span')(({ theme }) => ({
	backgroundColor: theme.palette.grey[300],
	color: theme.palette.background.default,
	padding: `.25em .35em`,
	borderRadius: `5px`,
	display: `inline-block`,
	margin: `0 .5em .5em 0`,
	boxShadow: `5px 5px 5px rgba(0, 0, 0, .5)`,
	whiteSpace: `pre`,
	fontSize: `.8rem`,
	[theme.breakpoints.up(`md`)]: {
		padding: `.25em .5em`,
		fontSize: `1rem`
	}
}));

const Tag = ({ text }: ITagProps) => {
	return (
		<StyledTag>
			{text}
		</StyledTag>
	);
};
export default Tag;