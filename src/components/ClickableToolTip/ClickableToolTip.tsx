import { ClickAwayListener, IconButton, Tooltip, useTheme } from '@mui/material';
import React from 'react';

export interface IClickableToolTipProps {
	buttonIcon: JSX.Element;
	toolTipText: string;
}
const ClickableToolTip = ({ buttonIcon, toolTipText }: IClickableToolTipProps ) => {
	const theme = useTheme();
	const [toolTipOpen, setToolTipOpen] = React.useState(false);

	const handleTooltipClose = () => {
		setToolTipOpen(false);
	};

	const handleTooltipOpen = () => {
		setToolTipOpen(true);
	};

	return (
		<ClickAwayListener onClickAway={handleTooltipClose}>
			<div className='clickable-tool-tip'>
				<Tooltip
					PopperProps={{
						disablePortal: true,
					}}
					onClose={handleTooltipClose}
					open={toolTipOpen}
					disableFocusListener
					disableHoverListener
					disableTouchListener
					title={toolTipText}
				>
					<IconButton 
						onClick={handleTooltipOpen}
						sx={{ 
							padding: `0 .1rem`, 
							color: theme.palette.primary.main, 
							[theme.breakpoints.up(`md`)]: {
								padding: `0 .25rem`
							},
							[theme.breakpoints.up(`lg`)]: {
								padding: `0 .5rem`
							},
							"&:hover": { 
								color: theme.palette.primary.light 
							}
						}}>
						{buttonIcon}
					</IconButton>
				</Tooltip>
			</div>
		</ClickAwayListener>
	);
};
export default ClickableToolTip;