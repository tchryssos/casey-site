import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	spacer: {
		height: props => `${props.height * 16}px`,
		display: ({ isHiddenSmall }) => (isHiddenSmall ? 'none' : 'block'),
	},
	[MD_MIN_STRING]: {
		spacer: {
			display: [['block'], '!important'],
		},
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
