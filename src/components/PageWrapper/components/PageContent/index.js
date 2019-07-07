import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	pageContentWrapper: {
		position: 'relative',
	},
	[MD_MIN_STRING]: {
		pageContentWrapper: {
			width: '50%',
			overflowY: 'scroll',
			maxHeight: '100vh',
			padding: '0 1rem',
			'&:first-child': {
				marginLeft: '50%',
			},
		},
	},
}

const PageContent = ({ children, classes }) => (
	<div className={classes.pageContentWrapper}>
		{children}
	</div>
)

PageContent.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(PageContent)
