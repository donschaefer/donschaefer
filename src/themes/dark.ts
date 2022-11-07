import { Breakpoints, PaletteMode } from '@mui/material';
import variables from '../styles/variables.module.scss';
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { muiBreakPoints } from './muiBreakpoints';

// eslint-disable-next-line quotes
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		logo: true;
	}
}

interface ExtendedTypographyOptions extends TypographyOptions {
	logo: React.CSSProperties;
}

export const darkTheme = {
	breakpoints: muiBreakPoints as Breakpoints,
	palette: {
		mode: `dark` as PaletteMode,		
		action: {
			// activatedOpacity: 0.24
			// active: "#fff"
			// disabled: "rgba(255, 255, 255, 0.3)"
			// disabledBackground: "rgba(255, 255, 255, 0.12)"
			// disabledOpacity: 0.38
			// focus: "rgba(255, 255, 255, 0.12)"
			// focusOpacity: 0.12
			// hover: "rgba(255, 255, 255, 0.08)"
			// hoverOpacity: 0.08
			// selected: "rgba(255, 255, 255, 0.16)"
			// selectedOpacity: 0.16
		},
		background: {
			default: variables.darker, // `#121212`,
			paper: variables.darker, 
		},
		primary: {
			main: variables.primary, 
			light: variables.primaryLight, 
			dark: variables.primaryDark,
		},
		secondary: {
			main: variables.secondary,
			light: variables.secondaryLight,
			dark: variables.secondaryDark,
			// contrastText: ``,
		},
		text: {		
			primary: variables.white,
			secondary: variables.secondary,
			disabled: variables.light,
			// icon: "rgba(255, 255, 255, 0.5)"
		},		
		// info: {
		// 	contrastText: "rgba(0, 0, 0, 0.87)"
		// 	dark: "#0288d1"
		// 	light: "#4fc3f7"
		// 	main: "#29b6f6"
		// },
		// success: {
		// contrastText: "rgba(0, 0, 0, 0.87)"
		// dark: "#388e3c"
		// light: "#81c784"
		// main: "#66bb6a"
		// },
		// warning: {
		// contrastText: "rgba(0, 0, 0, 0.87)"
		// dark: "#f57c00"
		// light: "#ffb74d"
		// main: "#ffa726"
		// },
		// error: {
		// 	contrastText: "#fff"
		//  dark: "#d32f2f"
		//  light: "#e57373"
		//  main: "#f44336"
		// },
	}, // as ExtendedPaletteOptions,
	typography: {
		fontFamily: [
			//`goodtime`,
			`"Segoe UI"`,
			`Roboto`,
			`"Helvetica Neue"`,
			`sans-serif`,
			`"Apple Color Emoji"`,
			`"Segoe UI Emoji"`,
			`"Segoe UI Symbol"`,
		].join(`,`),
		logo: {
			fontFamily: `goodtime`
		},
		h1: {
			fontFamily: `goodtime`,
			fontSize: `1.6rem`,	
			[`@media screen and (min-width: ${muiBreakPoints.values.md}px)`]: {
				fontSize: `2.2rem`
			},
			[`@media screen and (min-width: ${muiBreakPoints.values.lg}px)`]: {
				fontSize: `3rem`
			}
		},
		h2: {
			fontFamily: `goodtime`,
			fontSize: `1.4rem`,
			[`@media screen and (min-width: ${muiBreakPoints.values.md}px)`]: {
				fontSize: `1.7rem`
			},
			[`@media screen and (min-width: ${muiBreakPoints.values.lg}px)`]: {
				fontSize: `2rem`
			}
		},
		h3: {
			fontFamily: `goodtime`,
			fontSize: `1.2rem`,
			[`@media screen and (min-width: ${muiBreakPoints.values.md}px)`]: {
				fontSize: `1.4rem`
			},
			[`@media screen and (min-width: ${muiBreakPoints.values.lg}px)`]: {
				fontSize: `1.6rem`
			}
		},
		h4: {
			fontFamily: `goodtime`,
			fontSize: `1.1rem`,
			[`@media screen and (min-width: ${muiBreakPoints.values.md}px)`]: {
				fontSize: `1.2rem`
			},
			[`@media screen and (min-width: ${muiBreakPoints.values.lg}px)`]: {
				fontSize: `1.4rem`
			}
		},
		p: {
			marginBottom: `2rem`,
		},
	} as ExtendedTypographyOptions
};