import { Container, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CaseStudy, { ICaseStudyProps } from '../components/CaseStudy/CaseStudy';
import HeroContainer from '../components/HeroContainer/HeroContainer';
import { useElementDimensions } from '../hooks/useElementHeight';
import BasicPage from '../components/BasicPageTemplate/BasicPageTemplate';
import data from '../data/caseStudies.json';

interface CaseStudiesWithBackgrounds extends ICaseStudyProps {
	backgroundUrl: string;
}
const CaseStudies = () => {
	const theme = useTheme();
	const [headerHeight] = useElementDimensions(`header`);
	const [caseStudies, setCaseStudies] = useState<CaseStudiesWithBackgrounds[]>([]);

	useEffect(() => {
		// TODO: Replace with a fetch from an external source
		setCaseStudies(data.casestudies);
	}, []);

	// TODO: Add a control bar that allows users to search by keyword or filter by tag
	
	return (
		<BasicPage>   			
			<section style={{ 
				marginTop: `-${headerHeight}px`,
				borderBottom: `1px solid ${theme.palette.getContrastText(theme.palette.background.default)}`
			}}>
				<HeroContainer
					minHeight={`15vh`}
					bgImage={`../media/images/raster/photography/photography_039.jpg`}
					dynamicBg={true}
					brightness={.4}
					bgColor={theme.palette.primary.main}
				>
					<Typography 
						variant="h1"
						sx={{		
							padding: `0 1em`,
							textAlign: `center`,
							wordBreak: `break-word`,
						}}
					>
						{`Case Studies`}
					</Typography>					
				</HeroContainer>
			</section>
			{/* TODO: Delay bg zoom until user has scrolled to case study */}
			{caseStudies.map((caseStudy) => {
				return (
					<section key={caseStudy.id} style={{ borderBottom: `1px solid ${theme.palette.grey[400]}`}}>
						<HeroContainer
							minHeight={`max-content`}
							bgImage={caseStudy.backgroundUrl}
							dynamicBg={true}
							// bgColor={alternate ? theme.palette.background.default : theme.palette.primary.main}
							bgColor={theme.palette.background.default}
							// brightness={alternate ? undefined : .125 }
							// grayscale={alternate}
							grayscale={true}
						>
							<CaseStudy
								client={caseStudy.client}
								clientUrl={caseStudy.clientUrl}
								agency={caseStudy.agency}
								agencyUrl={caseStudy.agencyUrl}
								goal={caseStudy.goal}
								tags={caseStudy.tags.sort()}
								contributions={caseStudy.contributions}
							/>
						</HeroContainer>
					</section>
				);
			})}
		</BasicPage>
	);
};

export default CaseStudies;