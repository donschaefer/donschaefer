import Masonry from '@mui/lab/Masonry';
import type {} from '@mui/lab/themeAugmentation';
import { Box, Button, Container, Modal, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HeroContainer from '../components/HeroContainer/HeroContainer';
import data from '../data/media.json';
import CancelIcon from '@mui/icons-material/Cancel';
import { useElementDimensions } from '../hooks/useElementHeight';
import { Media } from '../models/Media';
import { MediaType } from '../models/MediaType';
import { responsiveImageUrl } from '../utilities/responsiveHelpers';
import BasicPage from '../components/BasicPageTemplate/BasicPageTemplate';

const Gallery = () => {
	const theme = useTheme();
	const [headerHeight] = useElementDimensions(`header`);
	const [imageData, setImageData] = useState<Media[]>([]);
	const [modalContent, setModalContent] = useState<Media | null>(null);
	const gridSpacing = 4; // TODO: Find a good centralized location for this

	useEffect(() => {
		// TODO: Replace with a fetch from an external source
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const media: Media[] = data.media.map((m: any) => {
			const typeIndex = Object.values(MediaType).findIndex(v => v === m.type);
			if (typeIndex > -1) {
				m.type = Object.values(MediaType)[typeIndex];
				return m;
			} else {
				return {
					title: m.title,
					url: m.url
				};
			}
		});
		setImageData(media);
	}, []);

	let columns = 1;
	if (useMediaQuery(theme.breakpoints.up(`sm`))) {
		columns = 2;
	}
	if (useMediaQuery(theme.breakpoints.up(`lg`))) {
		columns = 3;
	}
	
	return (
		<BasicPage>       
			<section style={{ 
				marginTop: `-${headerHeight}px` 
			}}>
				<HeroContainer
					minHeight={`15vh`}
					bgImage={`../media/images/raster/photography/photography_025.jpg`}
					dynamicBg={true}
					brightness={1}
					bgColor={theme.palette.grey[900]}
				>
					<Typography 
						variant="h1"
						sx={{		
							padding: `0 1em`,
							textAlign: `center`,
							wordBreak: `break-word`,
						}}
					>
						{`Gallery`}
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
					<Container>
						<Masonry 
							columns={columns}
							spacing={2}
						>
							{imageData.map((media, index) => (
								<React.Fragment
									key={index} 
								>
									<Button
										onClick={() => setModalContent(media)}
									>
										<Paper
											sx={{
												backgroundColor: theme.palette.common.white
											}}
										>
											<figure
												style={{
													margin: `.3rem`
												}}
											>
												<img
													src={responsiveImageUrl((window ? window.innerWidth : 0), theme.breakpoints, media.url)} 
													alt={media.title}
													loading="lazy"
													style={{
														borderRadius: 4,
														display: `block`,
														width: `100%`,
													}}
												/>
												<figcaption
													style={{
														display: `flex`,
														flexDirection: `column`,
														justifyContent: `center`,
														alignItems: `center`,
														minHeight: `2.7rem`
													}}
												>
													<Typography
														sx={{ 
															color: theme.palette.grey[900],
															textTransform: `none`
														}}
													>
														{`"${media.title}"`}
													</Typography>
												</figcaption>
											</figure>
										</Paper>
									</Button>
								</React.Fragment>
							))}
						</Masonry>
						{modalContent && 
							<Modal
								open={modalContent ? true : false}
								onClose={() => setModalContent(null)}
								aria-labelledby={modalContent.title}
								aria-describedby={modalContent.title}
								sx={{
									backgroundColor: `rgba(0,0,0,.65)`,
									display: `flex`,
									flexDirection: `column`,
									justifyContent: `center`,
									alignItems: `center`
								}}
							>
								<>
									<Button 
										onClick={() => setModalContent(null)}
										sx={{
											position: `absolute`,
											top: `0`,
											right: `0`,
											minWidth: `auto`,
											padding: `1rem`,
										}}
									>
										<CancelIcon sx={{
											fontSize: `2rem`,
											color: theme.palette.common.white
										}} /> 
									</Button>
									<img
										src={responsiveImageUrl((window ? window.innerWidth : 0), theme.breakpoints, modalContent.url)}
										alt={modalContent.title}
										loading="lazy"
										style={{
											borderRadius: 4,
											display: `block`,
											maxHeight: `90%`,
											maxWidth: `90%`,
											margin: `auto`
										}}
									/>
								</>							
							</Modal>
						}
					</Container>					
				</Box>
			</section>
		</BasicPage>		
	);
};

export default Gallery;