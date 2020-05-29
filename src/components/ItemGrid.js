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
		flexWrap: 'wrap',
	},
	stackedOnMobile: {
		flexDirection: 'column',
		[MD_MIN_STRING]: {
			flexDirection: 'row',
		},
	},
})

export default ({ children, className, stackedOnMobile }) => {
	const classes = useStyles()
	return (
		<div
			className={clsx(
				{ [classes.stackedOnMobile]: stackedOnMobile },
				classes.itemGridWrapper,
				className,
			)}
		>
			{children}
		</div>
	)
}
