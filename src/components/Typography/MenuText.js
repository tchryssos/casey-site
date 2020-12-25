import React from 'react'
import { createUseStyles } from 'react-jss'
import { darkGray } from 'constants/styles/colors'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	headlineFont: {
		fontWeight: 400,
		fontSize: 18,
		color: darkGray,
		[MD_MIN_STRING]: {
			fontSize: 18,
		},
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return <p className={classes.headlineFont}>{children}</p>
}
