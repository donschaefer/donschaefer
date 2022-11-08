import { Accordion, AccordionDetails, AccordionSummary, Container, Link, styled, Typography, useTheme } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tag from '../Tag/Tag';
import ClickableToolTip from '../ClickableToolTip/ClickableToolTip';

export interface IHighlight {
	summary: string;
	description: string;
}
export interface ICaseStudyProps {
	id?: string;
	client: string;
	clientUrl?: string;
	agency: string; 
	agencyUrl: string;
	goal: string;
	tags: string[];
	contributions: IHighlight[];
}

// eslint-disable-next-line quotes
const CaseStudyContainer = styled('div')(({ theme }) => ({
	display: `grid`,
	gridTemplateColumns: `1fr`,
	gridAutoRows: `minmax(${theme.spacing(3)}, auto)`,
	gridGap: theme.spacing(3),
	[theme.breakpoints.up(`md`)]: {
		gridTemplateColumns: `2fr 1fr`,
	},
	[theme.breakpoints.up(`lg`)]: {
		gridTemplateColumns: `1fr 3fr`,
	},
	"& *": {
		transition: `1s all ease`
	}
}));

// eslint-disable-next-line quotes
const CaseStudyHeader = styled('div')(({ theme }) => ({
	gridColumn: 1,
	gridRow: 1,
	[theme.breakpoints.up(`md`)]: {
		gridColumnStart: 1,
		gridColumnEnd: 3,
	},
	[theme.breakpoints.up(`lg`)]: {
		gridColumnEnd: 4,
	}
}));

// eslint-disable-next-line quotes
const CaseStudyGoal = styled('div')(({ theme }) => ({
	gridColumn: 1,
	gridRow: 2,
	[theme.breakpoints.up(`md`)]: {
		gridColumnStart: 1,
		gridColumnEnd: 2,
		gridRowStart: 2,
		gridRowEnd: 3,
	},
	[theme.breakpoints.up(`lg`)]: {
		gridRowEnd: 4,
	}
}));

// eslint-disable-next-line quotes
const CaseStudySkills = styled('div')(({ theme }) => ({
	gridColumn: 1,
	gridRow: 3,
	[theme.breakpoints.up(`md`)]: {
		gridRowStart: 2,
		gridRowEnd: 4,
		gridColumnStart: 2,
		gridColumnEnd: 3,
	},
	[theme.breakpoints.up(`lg`)]: {
		gridColumnStart: 2,
		gridColumnEnd: 3,
		gridRow: 2
	}
}));

// eslint-disable-next-line quotes
const CaseStudyContributions = styled('div')(({ theme }) => ({
	gridColumn: 1,
	gridRow: 4,
	[theme.breakpoints.up(`md`)]: {
		gridColumnStart: 1,
		gridColumnEnd: 2,
		gridRow: 3,
	},
	[theme.breakpoints.up(`lg`)]: {
		gridColumnStart: 2,
		gridColumnEnd: 4,
		gridRowStart: 3,
		gridRowEnd: 4
	}
}));

// eslint-disable-next-line quotes
const CaseStudySkillsList = styled('ul')(() => ({
	margin: 0,
	padding: 0,
	display: `flex`,
	flexDirection: `row`,
	flexWrap: `wrap`,
	"& li": {
		listStyleType: `none`,
		margin: 0,
		padding: 0,
	}
}));

const CaseStudy = ({ client, agency, agencyUrl, goal, contributions, tags, clientUrl }: ICaseStudyProps) => {
	const theme = useTheme();
	const [expandedPanel, setExpandedPanel] = React.useState<string | false>(false);
	

	const companyName = (name: string, url?: string, isClient?: boolean): JSX.Element => {
		const companyStyles: React.CSSProperties = isClient ? {
			paddingRight: `.25em`,
			color: theme.palette.getContrastText(theme.palette.background.default)
		} : {
			paddingRight: `.25em`
		};

		const linkContent = isClient ? <LinkIcon /> : (
			<span>{name}</span>
		);

		return (
			<Typography 
				variant={ isClient ? `h2` : undefined }
			>
				<span style={{ display: `flex`, flexDirection: `row`, justifyContent: `flex-start`, alignContent: `center` }}>
					{isClient ? <span style={companyStyles}>{name}</span> : <></>}
					{url ? (url === `NDA`) ? (
						<ClickableToolTip
							toolTipText={`Due to an NDA, I'm unable to offer specifics about this project`}
							buttonIcon={<HelpOutlineIcon />}
						/>			
					) : (
						<span>
							{!isClient && <span style={{ color: theme.palette.grey[500] }}>On behalf of </span>}
							<Link 
								href={url} 
								target={`_blank`} 
								rel={`noreferrer noopener`} 
								aria-label={name}
							>
								{linkContent}
							</Link>
						</span>
					) : linkContent }
				</span>
			</Typography>
		);
	};

	const toggleAccordionPanel = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpandedPanel(isExpanded ? panel : false);
	};

	const charactersToRemove = [` `,`&`,`.`,`,`,`/`];
	const parsedClient = Array.from(client).filter(char => charactersToRemove.indexOf(char) < 0).join(``);

	return (
		<Container
			sx={{
				padding: 0,
				margin: 0,
				[theme.breakpoints.up(`sm`)]: {
					padding: 0,
					margin: 0
				}
			}}
		>
			<CaseStudyContainer>
				<CaseStudyHeader>
					{companyName(client, clientUrl, true)}
					{agency && companyName(agency, agencyUrl)}
				</CaseStudyHeader>
				<CaseStudyGoal>
					<Typography variant={`h3`} sx={{ marginBottom: theme.spacing() }}>Goal</Typography>
					<Typography>{goal}</Typography>
				</CaseStudyGoal>
				<CaseStudyContributions>
					<Typography 
						variant={`h3`}
						sx={{ marginBottom: theme.spacing()}}
					>
						Contributions
					</Typography>
					{contributions.map((highlight, index) => {							
						const parsedHighlight = Array.from(highlight.summary).filter(char => charactersToRemove.indexOf(char) < 0).join(``);
						const contributionKey = `${parsedClient}${parsedHighlight}${index}`;
						return (
							<Accordion 
								key={contributionKey}
								expanded={expandedPanel === `${contributionKey}`} 
								onChange={toggleAccordionPanel(`${contributionKey}`)}
							>
								<AccordionSummary
									expandIcon={<AddCircleOutlineIcon />}
									aria-controls={`${contributionKey}-content`}
									id={`${contributionKey}-header`}
									sx={{
										padding: theme.spacing(),
										flexDirection: `row-reverse`,
										"& .MuiAccordionSummary-expandIconWrapper": {
											color: theme.palette.primary.main
										},
										"&:hover .MuiAccordionSummary-expandIconWrapper": {
											color: theme.palette.primary.light
										},
										"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
											transform: `rotate(45deg)`
										}
									}}
								>
									<span 
										style={{
											padding: `0 ${theme.spacing()}`
										}}
									>
										{highlight.summary}
									</span>
								</AccordionSummary>
								<AccordionDetails
									sx={{
										backgroundColor: theme.palette.grey[800],
										paddingLeft: theme.spacing(5)
									}}
								>
									<span>{highlight.description}</span>
								</AccordionDetails>
							</Accordion>
						);
					})}					
				</CaseStudyContributions>
				<CaseStudySkills>
					<CaseStudySkillsList>
						{tags.map((tag, i) => 
							<li key={i}><Tag text={tag} /></li>
						)}
					</CaseStudySkillsList>
				</CaseStudySkills>				
			</CaseStudyContainer>
		</Container>
	);
};
export default CaseStudy;