import React from 'react'
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

export default ({ children }) => {
	const classes = useStyles()
	return (
		<div>
			<p className={classes.noteFont}>
				{children}
			</p>
		</div>
	)
}
