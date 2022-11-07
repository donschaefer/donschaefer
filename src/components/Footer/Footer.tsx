import { Box, useTheme } from '@mui/material';
import React from 'react';

const Footer = () => {
	const theme = useTheme();
	
	return (
		<Box
			sx={{
				minHeight: `10vh`,
				borderRadius: 0,
				backgroundColor: theme.palette.grey[900]
			}}
		>
			Footer Content goes here
		</Box>
	);
};
export default Footer;