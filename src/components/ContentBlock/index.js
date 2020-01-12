import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	contentBlock: {
		margin: '16px',
		[MD_MIN_STRING]: {
			contentBlock: {
				margin: '16px 0',
			},
		},
	},
	[MD_MIN_STRING]: {
		contentBlock: {
			margin: '16px 0',
		},
	},
}

const ContentBlock = ({ children, classes }) => (
	<div className={classes.contentBlock}>
		{children}
	</div>
)

ContentBlock.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(ContentBlock)
