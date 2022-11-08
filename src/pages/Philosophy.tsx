import { Typography, useTheme } from '@mui/material';
import React from 'react';
import InnerPage from '../components/InnerPageTemplate/InnerPageTemplate';

const Philosophy = () => {
	const theme = useTheme();

	return (
		<InnerPage
			title={`Philosophy`}
			headerBgImage={`../media/images/raster/photography/photography_038.jpg`}
			headerBgBrightness={.4}
			headerBgColor={theme.palette.primary.main}
		>		
			<section>
				<Typography variant='h2'>Question</Typography>
				{/* TODO: Expand on this... highlight value of not accepting anything at face value, specifically in relation to one's ability to empathize, gain new perspectives and depth of undersetanding, etc. */}
				<Typography>{`Achieving a goal starts with asking yourself a question... What is it that you want to accomplish?`}</Typography>			
				<Typography>{`Keep in mind, the answer that comes to mind first might not always be what you really want... For example, if you've got a cold, the first answer that comes to mind might be that you want a particular symptom to go away (which can often be addressed in the short term with a pill), when in reality what you'd really like is to stop being sick (something which may pass with time or may require some lifestyle changes). Sometimes you'll be able to identify the goal right away, other times it may take some additional thought. Either way, it'll be important to take some time to correctly identify your goal before you'll be able to come up with a plan for acheiving it.`}</Typography>
			</section>
			<section>
				<Typography variant='h2'>Explore</Typography>
				{/* TODO: Expand on this... 
					- highlight value of exploring for the sake of exploring, broadening one's imagination, etc.
					- highlight value of not being afraid to fail & the benefits of going outside your comfort zone				
				*/}
				<Typography>{`No matter how much knowledge & experience you may have, it's always important to remember that you don't know what you don't know. This applies not only to problem solving methods, but perspectives as well.`}</Typography>
				<Typography>{`Generally speaking, two things are going to be true with most goals you set out to acheive:`}</Typography>
				<ul>
					<li><Typography>{`There's more than one way the goal can be achielved, each with it's own set of pros & cons`}</Typography></li>
					<li><Typography>{`No matter how big or small the goal is, if you're having trouble figuring out you might be able to tackle it, there are ways of breaking it down into a series of smaller goals that are easier to accomplish`}</Typography></li>
				</ul>
				<Typography>{`If you can spare the time, think about these for a moment & do some research if necessary. This will often help to ensure you find the best overall way to approach the goal and acheive it in a trackable way that reduces stress.`}</Typography>
			</section>
			<section>
				{/* TODO: Expand on this to highlight value of teaching, delegating, mentoring & teamwork */}
				<Typography variant='h2'>Simplify</Typography>
				<Typography>{`My grandfather would often say "Everything you own owns a piece of you", and it's definitely true. Whether it's the things that you own or the responsibilities that you're taking on, they all weigh on you in some way, so if you want to be at your best personally & have the means to respond to changes when they inevitably arise, you need to be intentional about what you take on.`}</Typography>
				<Typography>
					{`In the world of software development, the principals outlined at the `}
					<a href={`https://agilemanifesto.org`} style={{ color: theme.palette.primary.main }} target={`_blank`} rel={`noopener noreferrer`}>Manifesto for Agile Software Development</a>
					{` often act as a guide to help teams successfully simplify their processes & deliverables to consistently deliver great results.`}</Typography>
			</section>
		</InnerPage>
	);
};

export default Philosophy;