import { Box, Typography, useTheme, Zoom, styled, Grid, CardContent, Grow } from '@mui/material';
import MuiCard from '@mui/material/Card';
import MuiCardActionArea from '@mui/material/CardActionArea';
import React from 'react';
import HeroContainer from '../components/HeroContainer/HeroContainer';
import Logo from '../components/Logo/Logo';
import { useElementDimensions } from '../hooks/useElementHeight';
import { experience } from '../utilities/dateHelpers';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { NavRouteLabel } from '../models/NavRouteLabel';
import { navRoute } from '../utilities/routeHelpers';
import BasicPage from '../components/BasicPageTemplate/BasicPageTemplate';
import { getShortNavRouteLabel } from '../utilities/stringHelpers';

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

const Home = () => {	
	const theme = useTheme();
	const [headerHeight] = useElementDimensions(`header`);
	const centerContentWidth = `635px`;
	const centerContentMaxWidth = `calc(100vw - ${theme.spacing()})`;
	const principals = [`Question`, `Explore`, `Simplify`];
	const gridSpacing = 4; // TODO: Find a good centralized location for this
	
	return (
		<BasicPage>   			
			<section style={{ 
				marginTop: `-${headerHeight}px` 
			}}>
				<HeroContainer
					minHeight={`60vh`}
					bgImage={`../media/images/raster/photography/photography_025.jpg`}
					dynamicBg={true}
					bgColor={theme.palette.grey[900]}
				>
					<Logo style={{ marginBottom: `2rem` }} />					
					<Zoom in={true}>							
						<Box
							sx={{
								display: `flex`,
								flexWrap: `wrap`,
								width: centerContentWidth,
								maxWidth: centerContentMaxWidth,
								justifyContent: `center`,
								alignContent: `center`,
								marginBottom: theme.spacing(4),
								overflow: `hidden`,
							}}
						>
							{principals.map((word, index) => {
								return (					
									<Box	
										key={word}
										sx={{
											padding: `${theme.spacing()} 0`,
											maxWidth: `100%`,
										}}
									>											
										<Link to={navRoute(NavRouteLabel.Philosophy).path} style={{ textDecoration: `none` }}>
											<Typography 
												sx={{
													fontFamily: `goodtime`,
													margin: 0,
													padding: `0 .5rem 0 0`,
													textAlign: `center`,
													wordBreak: `break-word`,
													lineHeight: `2rem`,
													fontSize: `2rem`,
													"&:after": {
														content: `${(index >= 2) ? `""` : `" | "`}`
													}
												}}
											>
												{word}
											</Typography>
										</Link>											
									</Box>
								);
							})}
						</Box>						
					</Zoom>
					<Typography
						sx={{
							width: centerContentWidth,
							maxWidth: centerContentMaxWidth,
							textAlign: `center`,							
							marginBottom: theme.spacing(4),
							color: theme.palette.grey[200]
						}}
					>
						{`As a front end developer with over ${experience} years of experience in UI design & web development, these principals inform not only my work, but my life as well.`}
					</Typography>
				</HeroContainer>	
				<Box 
					sx={{ 
						flexGrow: 1,
						backgroundColor: theme.palette.grey[300],
						minHeight: `30vh`,
						padding: `${theme.spacing(gridSpacing)}`,						
						display: `flex`,
						flexDirection: `column`,
						alignItems: `center`,
					}}
				>
					<Grid 
						container 
						spacing={gridSpacing}
						sx={{
							maxWidth: theme.breakpoints.values.xl
						}}
					>
						<Grid item xs={12} md={4}>
							<Grow 
								in={true}
							>
								<Card>
									<CardActionArea>
										<a 
											href={navRoute(NavRouteLabel.Connect).path} target={`_blank`} 
											rel={`noopener noreferrer`}
										>
											<LinkedInIcon />
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
													{`Connect`}
												</Typography>
												<Typography 									
													sx={{
														textAlign: `center`,							
														color: theme.palette.grey[900]
													}}
												>
													{`Whether you're looking to start a new project or simply looking for some advice, I'd love the opportunity to connect`}
												</Typography>
											</CardContent>
										</a>									
									</CardActionArea>
								</Card>
							</Grow>
						</Grid>	
						<Grid item xs={12} md={4}>
							<Grow 
								in={true}
								style={{ transformOrigin: `0 0 0`}}
								{...{ timeout: 1000 }}
							>
								<Card>
									<CardActionArea>
										<Link 
											to={navRoute(NavRouteLabel.DevelopmentCaseStudies).path}									
										>
											<CodeIcon />
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
													{getShortNavRouteLabel(NavRouteLabel.DevelopmentCaseStudies)}
												</Typography>
												<Typography 									
													sx={{
														textAlign: `center`,							
														color: theme.palette.grey[900]
													}}
												>
													{`Interested in checking out some of the work I've done? Look no further!`}
												</Typography>
											</CardContent>
										</Link>									
									</CardActionArea>
								</Card>
							</Grow>
						</Grid>
						<Grid item xs={12} md={4}>
							<Grow 
								in={true}
								style={{ transformOrigin: `0 0 0`}}
								{...{ timeout: 2000 }}
							>
								<Card>
									<CardActionArea>	
										<a 
											href={navRoute(NavRouteLabel.GitHub).path} target={`_blank`} 
											rel={`noopener noreferrer`}
										>
											<GitHubIcon />
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
													{NavRouteLabel.GitHub}
												</Typography>
												<Typography 									
													sx={{
														textAlign: `center`,							
														color: theme.palette.grey[900]
													}}
												>
													{`Interested in seeing the code that runs this site? Head on over to my GitHub account & take a peek!`}
												</Typography>
											</CardContent>
										</a>
									</CardActionArea>
								</Card>
							</Grow>							
						</Grid>
											
					</Grid>
				</Box>
			</section>
		</BasicPage>
	);
};

export default Home;