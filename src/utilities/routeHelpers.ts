import { INavRoute } from "../models/INavRoute";
import { NavRouteLabel } from "../models/NavRouteLabel";
import { errorRoute, navRoutes } from "../data/navRoutes";

export const navRoute = (label: NavRouteLabel): INavRoute => {
	const matchingRoute = navRoutes.find(r => r.label === label);
	return matchingRoute ? matchingRoute : errorRoute;
};