import { CardContent, Container, Grid, Grow, styled, Typography, useTheme } from '@mui/material';
import MuiCard from '@mui/material/Card';
import MuiCardActionArea from '@mui/material/CardActionArea';
import React, { useEffect, useState } from 'react';
import CaseStudy, { ICaseStudyProps } from '../components/CaseStudy/CaseStudy';
import HeroContainer from '../components/HeroContainer/HeroContainer';
import { useElementDimensions } from '../hooks/useElementHeight';
import BasicPage from '../components/BasicPageTemplate/BasicPageTemplate';
import data from '../data/caseStudies.json';
import { navRoute } from '../utilities/routeHelpers';
import { NavRouteLabel } from '../models/NavRouteLabel';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Link } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
	backgroundColor: `#fff`,
	...theme.typography.body2,
	padding: 0,
	textAlign: `center`,
	color: theme.palette.primary.main,
	height: `100%`
}));
const CardActionArea = styled(MuiCardActionArea)(({ theme }) => ({
	padding: theme.spacing(2),
	height: `100%`,
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `flex-start`,
	"& svg": {
		fontSize: `3rem`,
		fill: theme.palette.primary.main
	},
	"& *": {
		textDecoration: `none`
	},
}));
interface CaseStudiesWithBackgrounds extends ICaseStudyProps {
	backgroundUrl: string;
}
const CaseStudies = () => {
	const theme = useTheme();
	const [headerHeight] = useElementDimensions(`header`);
	const [caseStudies, setCaseStudies] = useState<CaseStudiesWithBackgrounds[]>([]);
	const gridSpacing = 4; // TODO: Find a good centralized location for this

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
							bgColor={theme.palette.background.default}
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
			<section key={`more`} style={{ borderBottom: `1px solid ${theme.palette.grey[400]}`}}>
				<HeroContainer
					minHeight={`max-content`}
					bgImage={``}
					dynamicBg={true}
					bgColor={theme.palette.background.default}
					grayscale={true}
				>
					<Container
						sx={{ padding: 0,
							margin: 0,
							[theme.breakpoints.up(`sm`)]: {
								padding: 0,
								margin: 0
							}
						}}
					>
						<Typography
							sx={{
								marginBottom: theme.spacing(4)
							}}
						>
							{`The case studies I've chosen to include here are merely meant to highlight some of the work that I've done as a web developer over the years and are by no means a full representation of my work.`}
						</Typography>
						<Grid 
							container 
							spacing={gridSpacing}
							sx={{
								maxWidth: theme.breakpoints.values.xl
							}}
						>
							<Grid item xs={12} md={6}>
								<Grow 
									in={true}
									style={{ transformOrigin: `0 0 0`}}
									{...{ timeout: 1000 }}
								>
									<Card>
										<CardActionArea>
											<Link 
												to={navRoute(NavRouteLabel.Gallery).path}									
											>
												<CollectionsIcon />
												<CardContent>
													<Typography 
														gutterBottom 
														variant="h3" 
														component="div"
														sx={{
															textAlign: `center`,
															wordBreak: `break-word`,
															color: theme.palette.common.black
														}}
													>
														{NavRouteLabel.Gallery}
													</Typography>
													<Typography 									
														sx={{
															textAlign: `center`,							
															color: theme.palette.grey[900]
														}}
													>
														{`If you're interested in checking out work that I've done that's more artistic in nature & less code-focused, check out my gallery.`}
													</Typography>
												</CardContent>
											</Link>									
										</CardActionArea>
									</Card>
								</Grow>
							</Grid>
							<Grid item xs={12} md={6}>
								<Grow 
									in={true}
								>
									<Card>
										<CardActionArea>
											<a 
												href={navRoute(NavRouteLabel.Connect).path} target={`_blank`} 
												rel={`noopener noreferrer`}
											>
												<LinkedInIcon 

												/>
												<CardContent>
													<Typography 
														gutterBottom 
														variant="h3" 
														component="div"
														sx={{
															wordBreak: `break-word`,
															textAlign: `center`,
															color: theme.palette.common.black
														}}
													>
														{NavRouteLabel.Connect}
													</Typography>
													<Typography 									
														sx={{
															textAlign: `center`,							
															color: theme.palette.grey[900]
														}}
													>
														{`If you're interested in hearing about dozens of additional projects I've worked on in the past, featuring other technologies & more recent design work I've done professionally that I'm not able to showcase on this site, let's connect!`}
													</Typography>
												</CardContent>
											</a>									
										</CardActionArea>
									</Card>
								</Grow>
							</Grid>								
						</Grid>
					</Container>
				</HeroContainer>
			</section>			
		</BasicPage>
	);
};

export default CaseStudies;