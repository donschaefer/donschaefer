import { NavRouteLabel } from "../models/NavRouteLabel";

export const getShortNavRouteLabel = (navRouteLabel: NavRouteLabel) => {
	switch (navRouteLabel) {
	case NavRouteLabel.DevelopmentCaseStudies:
		return `Development`;
	default:
		return navRouteLabel;
	}
};