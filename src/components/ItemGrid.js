import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	itemGridWrapper: {
		marginTop: '16px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	startAligned: {
		alignItems: 'flex-start',
	},
	stackedOnMobile: {
		flexDirection: 'column',
		[MD_MIN_STRING]: {
			flexDirection: 'row',
		},
	},
})

export default ({ 
	children, className, stackedOnMobile, startAligned,
}) => {
	const classes = useStyles()
	return (
		<div
			className={clsx(
				{ [classes.stackedOnMobile]: stackedOnMobile },
				{ [classes.startAligned]: startAligned },
				classes.itemGridWrapper,
				className,
			)}
		>
			{children}
		</div>
	)
}
