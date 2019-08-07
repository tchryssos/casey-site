import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import {
	MD_MIN_STRING, pageContentTotalWidthPerc,
} from 'constants/styles/breakpoints'

const styles = {
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingBottom: '84px',
	},
	[MD_MIN_STRING]: {
		pageWrapper: {
			maxWidth: `${pageContentTotalWidthPerc}%`,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			paddingBottom: 0,
		},
	},
}

const PageWrapper = ({ children, classes }) => (
	<div className={classes.pageWrapper}>
		{children}
	</div>
)

PageWrapper.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(PageWrapper)
