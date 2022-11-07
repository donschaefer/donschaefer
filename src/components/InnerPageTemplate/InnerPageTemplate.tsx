import { Box, Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import HeroContainer from '../HeroContainer/HeroContainer';
import { useElementDimensions } from '../../hooks/useElementHeight';
import { ICustomContainerProps } from '../../models/CustomContainer';
import BasicPage from '../BasicPageTemplate/BasicPageTemplate';

export interface IInnerPageProps extends ICustomContainerProps {
	title: string;
	headerBgImage: string;
	headerBgBrightness: number;
	headerBgColor: string;
}

const InnerPageTemplate = ({ title, headerBgImage, headerBgBrightness, headerBgColor, children }: IInnerPageProps) => {
	const theme = useTheme();
	const [headerHeight] = useElementDimensions(`header`);
	const gridSpacing = 4; // TODO: Find a good centralized location for this

	return (
		<BasicPage>       
			<section style={{ 
				marginTop: `-${headerHeight}px` 
			}}>
				<HeroContainer
					minHeight={`15vh`}
					bgImage={headerBgImage}
					dynamicBg={true}
					brightness={headerBgBrightness}
					bgColor={headerBgColor}
				>
					<Typography 
						variant="h1"
						sx={{		
							padding: `0 1em`,
							textAlign: `center`,
							wordBreak: `break-word`,
						}}
					>
						{title}
					</Typography>					
				</HeroContainer>				
				<Box 
					sx={{ 
						flexGrow: 1,
						backgroundColor: theme.palette.grey[300],
						minHeight: `75vh`,
						padding: `${theme.spacing(gridSpacing)}`,						
						display: `flex`,
						flexDirection: `column`,
						alignItems: `center`,
					}}
				>
					<Grid 
						container 
						spacing={gridSpacing}
						sx={{
							maxWidth: theme.breakpoints.values.xl
						}}
					>
						<Grid item xs={12}>
							<Card
								sx={{
									backgroundColor: theme.palette.common.white,
									padding: theme.spacing(4),
									"& section": {
										marginBottom: theme.spacing(4)
									},
									"& h2, & h3, & h4, & h5, & h6": {										
										wordBreak: `break-word`,
										width: `100%`,
										padding: `0 0 ${theme.spacing()}`,
										borderBottom: `2px solid ${theme.palette.primary.main}`,
										marginBottom: theme.spacing(2)
									},	
									"& p": {
										marginBottom: theme.spacing(2)
									},
									"& *": {
										color: theme.palette.getContrastText(theme.palette.common.white)
									}
								}}
							>
								<CardContent>
									{children}
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</section>
		</BasicPage>
	);
};

export default InnerPageTemplate;