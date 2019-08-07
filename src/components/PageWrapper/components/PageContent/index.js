import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	descriptionSpacer: {
		display: 'none',
		width: '40%',
	},
	pageContentWrapper: {
		position: 'relative',
	},
	[MD_MIN_STRING]: {
		descriptionSpacer: {
			display: 'block',
		},
		pageContentWrapper: {
			width: '60%',
			padding: '0 1rem',
			'&:first-child': {
				marginLeft: '50%',
			},
		},
	},
}

const PageContent = ({ children, classes }) => (
	<>
		<div className={classes.descriptionSpacer} />
		<div className={classes.pageContentWrapper}>
			{children}
		</div>
	</>
)

PageContent.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(PageContent)
