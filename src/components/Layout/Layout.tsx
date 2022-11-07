import React, { useCallback, useState } from 'react';
import { Box, Card, CardActionArea, CardContent, Container, Grow, Typography, useMediaQuery, useTheme, Zoom } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { ICustomContainerProps } from '../../models/CustomContainer';
import { useElementDimensions } from '../../hooks/useElementHeight';
import { NavRouteLabel } from '../../models/NavRouteLabel';
import { navRoute } from '../../utilities/routeHelpers';
import { techStack } from '../../data/techStack';

export default function Layout({ children }: ICustomContainerProps) {
	const theme = useTheme();
	const [navigationHeight] = useElementDimensions(`nav`);

	//#region HeaderElements
	const minHeaderElements = 1;
	const maxHeaderElements = 2;
	const headerElementHeight = `60px`;
	const [topNav] = useState(
		<Navigation key={`nav`} theme={theme} topNav={true} topNavButtonHeight={headerElementHeight} />
	);
	const [headerElements, setHeaderElements] = useState<JSX.Element[]>([topNav]);
	const [mainLogo] = useState(
		<Link to={navRoute(NavRouteLabel.Home).path} key={`logo`} style={{ display: `flex`, padding: theme.spacing() }}>
			<Zoom in={true}>
				<Box sx={{ height: headerElementHeight }}>
					<Logo style={{ height: headerElementHeight }} />
				</Box>				
			</Zoom>			
		</Link>
	);

	const toggleHeaderLogo = useCallback((include: boolean) => {
		if (include) {
			setHeaderElements([topNav, mainLogo]);
		} else {
			setHeaderElements([topNav]);
		}
	}, [mainLogo, topNav]);

	const handleScroll = (event: React.UIEvent<HTMLElement>) => {
		const hasScrolled = (event.currentTarget.scrollTop > (window.innerHeight / 10));
		if (hasScrolled && (headerElements.length === minHeaderElements)) {
			toggleHeaderLogo(true);
		} else if (!hasScrolled && (headerElements.length === maxHeaderElements)) {
			toggleHeaderLogo(false);
		}
	};
	//#endregion

	//#region FooterElements
	const [footerHeight] = useElementDimensions(`footer`);

	//#endregion
	
	return (
		<div 
			id="layout" 
			style={{ 
				maxHeight: `100vh`, 
				overflowY: `auto`
			}} 
			onScroll={handleScroll}
		>
							
			{useMediaQuery(theme.breakpoints.up(`sm`)) && (
				<header
					style={{
						position: `fixed`,
						width: `100vw`,
						height: `5.5rem`,
						zIndex: 1199,						
						borderBottom: (headerElements.length === maxHeaderElements) ? `2px solid ${theme.palette.primary.main}` : undefined
					}}
				>
					{(headerElements.length === maxHeaderElements) ? (
						<div style={{
							height: `100%`,			
							width: `100%`,
							backgroundColor: theme.palette.background.default,
							opacity: .8,
							position: `absolute`,
							zIndex: -1,
						}}/>) : <></>
					}
					<Box 
						sx={{								
							display: `flex`,
							justifyContent: `flex-start`,
							alignContent: `center`
						}}>
						{headerElements}
					</Box>
				</header>					
			)}	
			<main 
				style={{ 
					minHeight: `calc(100vh - ${footerHeight}px)`
				}}
			>
				{children}
			</main>
			<footer
				style={{ 
					width: `100%`,
					minHeight: `10vh`,
					borderRadius: 0,
					backgroundColor: theme.palette.grey[900], 
					paddingBottom: useMediaQuery(theme.breakpoints.down(`sm`)) ? `${navigationHeight}px` : 0
				}}
			>	
				<Container 
					sx={{ 
						height: `100%`,
						display: `flex`,
						flexDirection: `column`,
						justifyContent: `center`,
						alignItems: `center`,
						padding: theme.spacing(2)
					}}
				>
					<Typography
						sx={{
							marginBottom: theme.spacing(),
							color: theme.palette.grey[600]
						}}
					>
						Powered By
					</Typography>
					<Box
						sx={{
							display: `flex`,
							flexDirection: `row`,
							justifyContent: `center`,
							alignContent: `center`,
						}}
					>
						{techStack.map((tech, i) => 
							<Grow
								key={tech.key}
								in={true}
								style={{ 
									margin: `.5rem`,
									transformOrigin: `0 0 0`
								}}
								{...{ timeout: (i * 1000) }}
							>
								<Card>
									<CardActionArea
										sx={{ backgroundColor: theme.palette.background.default }}
									>
										<a href={tech.path} target={`_blank`} rel={`noopener noreferrer`}>
											<CardContent
												sx={{
													display: `flex`,													
													width: `50px`,
													height: `50px`,													
													padding: `0 !important`,
													"& svg": {
														maxHeight: `100%`,
														maxWidth: `100%`
													}
												}}
											>
												{tech.icon}
											</CardContent>
										</a>
									</CardActionArea>
								</Card>
							</Grow>	
						)}
					</Box>
				</Container>								
				{useMediaQuery(theme.breakpoints.down(`sm`)) ? 
					<Navigation theme={theme} topNav={false} />
					: <></>
				}
			</footer>			
		</div>
	);
}