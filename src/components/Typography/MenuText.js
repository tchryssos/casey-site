import React from 'react'
import { createUseStyles } from 'react-jss'

import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	headlineFont: {
		fontFamily: '"buena-park-jf", serif',
		fontWeight: 400,
		fontSize: 28,
		[MD_MIN_STRING]: {
			fontSize: 36,
		},
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<p className={classes.headlineFont}>{children}</p>
	)
}
