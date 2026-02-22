import type { JSX } from 'react';

export interface INavItem {
	key: string,
	label: string,
	shortLabel?: string,
	icon: JSX.Element,
	path: string,
}