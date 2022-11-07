import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material';
import { handleResizeListeners, responsiveImageUrl } from '../../utilities/responsiveHelpers';

export interface IHeroContainerProps {
	children: React.ReactNode;
	minHeight?: number | string;
	bgImage?: string;
	dynamicBg?: boolean;
	bgColor?: string;
	brightness?: number;
	grayscale?: boolean;
}

const HeroContainer = ({ children, minHeight, bgImage, dynamicBg, bgColor, brightness, grayscale }: IHeroContainerProps) => {	
	const theme = useTheme();
	const two = 2;
	const [bkgImage, setBkgImage] = useState(bgImage ? dynamicBg ? bgImage.split(`.`).map((v, i) => i === (bgImage.split(`.`).length - two) ? v += `-sm` : v).join(`.`) : bgImage : ``);
    
	useEffect(() => {
		const updateBkgImage = () => {
			if (bgImage && dynamicBg) {
				setBkgImage(responsiveImageUrl(window.innerWidth, theme.breakpoints, bgImage));                
			}
		};
		
		if (bgImage && dynamicBg) {		
			handleResizeListeners(window, true, updateBkgImage);
			updateBkgImage();
			return () => {
				handleResizeListeners(window, false, updateBkgImage);
			};			
		}
	}, [bgImage, dynamicBg, theme.breakpoints]);

	const bgImageFilter = () => {
		let filterStyle = ``;
		if (brightness) {
			filterStyle += `brightness(${brightness}) `;
		}
		if (grayscale) {
			filterStyle += `grayscale(100%) `;
		}
		return filterStyle ? filterStyle : undefined;
	};
	
	return (
		<Container
			sx={{
				position: `relative`,
				minHeight: minHeight ? ((typeof minHeight === `number`) ? `${minHeight}px` : `${minHeight}`) : `auto`,
				width: `100%`,		
				maxWidth: `100% !important`,
				padding: `0 !important`,
				alignItems: `center`,
				display: `flex`,
				flexDirection: `column`,
				justifyContent: `center`,
				overflow: `hidden`,
			}}
		>			
			<div
				className='hero-container-bkg'
				style={{				
					height: `100%`,			
					width: `100%`,
					backgroundSize: `cover`,
					backgroundRepeat: `no-repeat`,
					backgroundBlendMode: `overlay`,
					backgroundPosition: `center center`,
					backgroundImage: `url(${bkgImage})`,
					filter: bgImageFilter(),
					backgroundColor: bgColor ? bgColor : theme.palette.getContrastText(theme.palette.text.primary),
					position: `absolute`,
					zIndex: -1,
				}} 
			/>
			<Container			
				sx={{
					alignItems: `center`,
					display: `flex`,
					flexDirection: `column`,
					justifyContent: `center`,
					flexWrap: `nowrap`,
					height: `100%`,			
					maxWidth: `100% !important`,
					width: `100%`,
					padding: theme.spacing(4),
					"& > *:not(.MuiContainer-root)": {
						maxWidth: `calc(100% - ${theme.spacing(4)}) !important`
					}
				}}
			>
				{children}
			</Container>
		</Container>
	);
};
export default HeroContainer;