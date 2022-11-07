/* eslint-disable no-shadow */
import React from 'react';
import { Typography } from "@mui/material";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ErrorIcon from '@mui/icons-material/Error';
import CollectionsIcon from '@mui/icons-material/Collections';
import Home from '../pages/Home';
import CaseStudies from '../pages/DevelopmentCaseStudies';
import Philosophy from '../pages/Philosophy';
import NotFound from '../pages/NotFound';
import { INavRoute } from '../models/INavRoute';
import { NavRouteLabel } from '../models/NavRouteLabel';
import { getShortNavRouteLabel } from '../utilities/stringHelpers';
import Gallery from '../pages/Gallery';

export const errorRoute: INavRoute = {
	key: `notfound`,
	label: `Not Found`,
	shortLabel: `Error`,
	icon: <ErrorIcon />,
	path: `/404`,
	pageComponent: <NotFound />
};

export const navRoutes: INavRoute[] = [
	{
		key: `home`,
		label: NavRouteLabel.Home,
		shortLabel: getShortNavRouteLabel(NavRouteLabel.Home),
		icon: <Typography variant={`logo`} sx={{ paddingTop: `.3em` }}>DS</Typography>,
		path: `/`,
		pageComponent: <Home />
	},
	{
		key: `developmentcasestudies`,
		label: NavRouteLabel.DevelopmentCaseStudies,
		shortLabel: getShortNavRouteLabel(NavRouteLabel.DevelopmentCaseStudies),
		icon: <CodeIcon />,
		path: `/development-case-studies`,
		pageComponent: <CaseStudies />
	},
	{
		key: `gallery`,
		label: NavRouteLabel.Gallery,
		shortLabel: getShortNavRouteLabel(NavRouteLabel.Gallery),
		icon: <CollectionsIcon />,
		path: `/gallery`,
		pageComponent: <Gallery />
	},
	{
		key: `connect`,
		label: NavRouteLabel.Connect,
		shortLabel: getShortNavRouteLabel(NavRouteLabel.Connect),
		icon: <LinkedInIcon />,
		path: `https://www.linkedin.com/in/donaldschaefer/`,
	},
	{
		key: `github`,
		label: NavRouteLabel.GitHub,
		shortLabel: getShortNavRouteLabel(NavRouteLabel.GitHub),
		icon: <GitHubIcon />,
		path: `https://github.com/donschaefer/portfolio`,
	},
	{
		key: `philosophy`,
		label: NavRouteLabel.Philosophy,
		shortLabel: getShortNavRouteLabel(NavRouteLabel.Philosophy),
		icon: <LocalLibraryIcon />,
		path: `/philosophy`,
		pageComponent: <Philosophy />
	}	
	// TODO: Add Contact page
];