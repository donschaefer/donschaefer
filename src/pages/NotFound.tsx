import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import HeroContainer from '../components/HeroContainer/HeroContainer';
import { useElementDimensions } from '../hooks/useElementHeight';
import Page from '../components/BasicPageTemplate/BasicPageTemplate';

// TODO: This works on localhost, but not live server
const NotFound = () => {
	const theme = useTheme();
	const location = useLocation();
	const [headerHeight] = useElementDimensions(`header`);

	return (
		<Page>       
			<section style={{ 
				marginTop: `-${headerHeight}px` 
			}}>
				<HeroContainer
					minHeight={`90vh`}
					bgImage={`../media/images/raster/photography/photography_021.jpg`}
					dynamicBg={true}
					brightness={.125}
				>
					<Typography variant="h1">404 Not Found</Typography>					
					<Typography
						sx={{
							textAlign: `center`,
							color: theme.palette.primary.light
						}}
					>
						{`Sorry, but we couldn't find any content at "${location.pathname}". Please verify that the url you entered was correct or use the site navigation to find the page you're looking for.`}
					</Typography>
				</HeroContainer>								
			</section>
		</Page>
	);
};

export default NotFound;