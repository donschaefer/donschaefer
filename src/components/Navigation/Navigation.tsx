import React, { useEffect, useState } from 'react';
import {
	Link    
} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { BottomNavigationAction, Box, Drawer, List, ListItem, ListItemButton, ListItemText, styled, Theme, useMediaQuery } from '@mui/material';
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import { Direction } from '../../models/Direction';
import { useNavigate } from "react-router-dom";
import { AnchorDirection } from '../../models/AnchorDirection';
import { navRoutes } from '../../data/navRoutes';
import { INavRoute } from '../../models/INavRoute';
import { handleResizeListeners } from '../../utilities/responsiveHelpers';

export interface INavigationProps {
	theme: Theme;
	topNav: boolean;
	topNavButtonHeight?: string;
}

const BottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({		
	"& .MuiBottomNavigationAction-root": {
		color: theme.palette.common.white
	},
	"& .MuiBottomNavigationAction-root.Mui-selected": {
		color: theme.palette.primary.main
	}
}));

export default function Navigation({ theme, topNav, topNavButtonHeight }: INavigationProps) { 
	const verticalDrawerWidth = 250;
	const [currentPage, setCurrentPage] = useState(`Home`);	
	const [anchorDirection, setAnchorDirection] = useState<AnchorDirection>(Direction.Bottom);
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);
	const [navigationLinks] = useState<INavRoute[]>(navRoutes);
	const [mainLinks, setMainLinks] = useState<INavRoute[]>([]);
	const [hiddenLinks, setHiddenLinks] = useState(navigationLinks);
	const navigate = useNavigate();    

	useEffect(() => {
		const updateLinkDistribution = () => {
			const mainLinkMinWidth = 80;
			const buttonsToDisplay = Math.floor(window.innerWidth / mainLinkMinWidth); 			      
			const maxButtonsToDisplay = 5;
			setDrawerIsOpen(false);
			if ((window.innerWidth < (theme.breakpoints.values[`sm`] + 1))) {
				setAnchorDirection(Direction.Bottom);
				const cutoffIndex = (buttonsToDisplay > maxButtonsToDisplay ? maxButtonsToDisplay : buttonsToDisplay) - 1;
				setMainLinks(navigationLinks.slice(0, cutoffIndex));
				setHiddenLinks(navigationLinks.slice(cutoffIndex));
			} else {
				setAnchorDirection(Direction.Left);
				setMainLinks([]);
				setHiddenLinks(navigationLinks);
			}
		};

		handleResizeListeners(window, true, updateLinkDistribution);
		updateLinkDistribution();
		return () => {
			handleResizeListeners(window, false, updateLinkDistribution);
		};
	}, [navigationLinks, theme.breakpoints.values]);

	const handleChange = (event: React.SyntheticEvent, newPage: string) => {
		setCurrentPage(newPage);
	};

	const handleLinkClick = (pageName: string, path: string) => {
		setDrawerIsOpen(false);
		if (!path.startsWith(`http`)) {
			setCurrentPage(pageName);
		} else {
			const currentLink = navigationLinks.find((link: INavRoute) => link.path === window.location.pathname);
			if (currentLink !== undefined) {
				setCurrentPage(currentLink.label);
			}
		}
		return path.startsWith(`http`) ? 
			window.open(path, `_blank`, `noreferrer`) : 
			navigate(path);
	};

	const menuButton = (
		<BottomNavigationAction 
			key={`Menu`}
			label={`Menu`}
			value={`Menu`}
			icon={<MenuIcon sx={ topNav ? {
				height: topNavButtonHeight,
				color: theme.palette.common.white,
				width: `100%`
			} : undefined } />} 
			onClick={() => setDrawerIsOpen(!drawerIsOpen)}
			sx={ topNav ? {
				padding: theme.spacing(),
			} : {
				"& span.MuiBottomNavigationAction-label": {
					fontSize: `.7rem` 
				}
			}}			
		/>		
	);
		
	return (
		<nav
			style={(useMediaQuery(theme.breakpoints.down(`sm`)) && !topNav) ? {
				position: `absolute`,
				zIndex: 9999,
				bottom: 0,
				width: `100%`
			}: undefined}	
		>
			{(useMediaQuery(theme.breakpoints.down(`sm`)) && !topNav) ? 
				<BottomNavigation 
					sx={{ 
						width: `100%`,
						display: `flex`,
						justifyContent: `space-between`,
						backgroundColor: theme.palette.background.default
					}} 
					value={currentPage} 
					onChange={handleChange}
				>
					{mainLinks.map(link => {
						return (
							<BottomNavigationAction
								key={link.key}
								label={link.shortLabel}
								value={link.label}						
								icon={link.icon}
								color={theme.palette.primary.main}
								component={Link}
								to={link.path}
								onClick={() => handleLinkClick(link.label, link.path)}
								sx={{
									"& span.MuiBottomNavigationAction-label": {
										fontSize: `.7rem`
									}
								}}
							/>
						);
					})}
					{(hiddenLinks.length > 0) && menuButton}
				</BottomNavigation>	
				: menuButton
			}
			<Drawer
				key={`hiddenLinks`}
				anchor={anchorDirection}
				open={drawerIsOpen}
				onClose={() => setDrawerIsOpen(false)}
				sx={{ 
					"& > .MuiPaper-root": {
						backgroundColor: theme.palette.background.default
					}
				}}
			>
				<Box
					sx={{ 
						width: anchorDirection === Direction.Bottom ? `auto` : verticalDrawerWidth,
						paddingBottom: `48px`
					}}
					role="presentation"
				>
					<List>
						{hiddenLinks.map((link) => (
							<ListItem key={link.label} disablePadding>
								<ListItemButton
									onClick={() => handleLinkClick(link.label, link.path)}
								>
									{link.icon}
									<ListItemText primary={link.label} style={{ paddingLeft: `${theme.spacing(2)}`}} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</nav>
	);
}