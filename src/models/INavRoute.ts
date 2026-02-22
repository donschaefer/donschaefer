import type { JSX } from 'react';
import { INavItem } from "./INavItem";

export interface INavRoute extends INavItem {
	pageComponent?: JSX.Element
}