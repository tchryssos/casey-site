import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(({ height }) => ({
	spacer: {
		height: height * 16,
	},
}))

export default ({ height }) => {
	const classes = useStyles({ height })
	return <div className={classes.spacer} />
}
