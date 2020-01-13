import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useTyles = createUseStyles(({ height }) => ({
	spacer: {
		height: height * 16,
	},
}))

const Spacer = ({ height }) => {
	const classes = useStyles({ height })
	return <div className={classes.spacer} />
}
