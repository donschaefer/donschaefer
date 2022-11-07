import React from 'react';
import { INavItem } from "../models/INavItem";
import { TechStackLabel } from "../models/TechStackLabel";

export const techStack: INavItem[] = [
	{
		key: `react`,
		label: TechStackLabel.React,
		icon: <img src={`../media/images/vector/react.svg`} alt={TechStackLabel.React} />,
		path: ``,	
	},
	{
		key: `typescript`,
		label: TechStackLabel.TypeScript,
		icon: <img src={`../media/images/vector/typescript.svg`} alt={TechStackLabel.TypeScript} />,
		path: ``,	
	},
	// TODO: Add additional stack items here
];