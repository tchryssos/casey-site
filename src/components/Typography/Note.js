import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	noteFont: {
		fontFamily: '"Work Sans", sans-serif',
		lineHeight: 1.25,
		fontSize: 14,
		[MD_MIN_STRING]: {
		},
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return (
		<div>
			<p
				className={clsx(
					classes.noteFont,
					className,
				)}
			>
				{children}
			</p>
		</div>
	)
}
