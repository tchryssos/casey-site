import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	spacer: {
		height: props => `${props.height * 16}px`,
	},
}

const Spacer = ({ classes }) => (
	<div className={classes.spacer} />
)

Spacer.propTypes = {
	// eslint-disable-next-line react/no-unused-prop-types
	height: PropTypes.oneOf([1, 2, 3, 4]),
}

Spacer.defaultProps = {
	height: 1,
}

export default injectSheet(styles)(Spacer)
