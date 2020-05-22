import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	headlineFont: {
		// fontFamily: '"buena-park-jf", serif',
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<h2 className={classes.headlineFont}>{children}</h2>
	)
}
