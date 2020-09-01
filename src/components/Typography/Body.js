import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	bodyFont: {
		fontFamily: '"Work Sans", sans-serif',
		lineHeight: 1.25,
		fontSize: 14,
		[MD_MIN_STRING]: {
			fontSize: 16,
		},
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return (
		<div>
			<p className={clsx(
				classes.bodyFont,
				className,
			)}
			>
				{children}
			</p>
		</div>
	)
}
