import React from 'react';

export interface ILogoProps {
	style?: React.CSSProperties;
}
const Logo = ({style}: ILogoProps) => {
	return (
		<img 					
			src={`../media/images/vector/DonSchaeferLogo.svg`}
			alt={`DonSchaefer.com Logo`}
			style={style}	
		/>
	);
};

export default Logo;