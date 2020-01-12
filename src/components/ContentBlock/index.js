import React from 'react'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	contentBlock: {
		margin: '16px',
		[MD_MIN_STRING]: {
			contentBlock: {
				margin: '16px 0',
			},
		},
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<div className={classes.contentBlock}>
			{children}
		</div>
	)
}
