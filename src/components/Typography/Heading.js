import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	headlineFont: {
		fontFamily: '"buena-park-jf", serif',
		fontWeight: 400,
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<h1 className={classes.headlineFont}>{children}</h1>
	)
}
