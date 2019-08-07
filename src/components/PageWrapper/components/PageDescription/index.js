import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import Spacer from 'components/Spacer'

const styles = {
	descriptionSpacer: {
		display: 'none',
	},
	[MD_MIN_STRING]: {
		pageDescriptionWrapper: {
			width: '35%',
			marginLeft: '1rem',
			position: 'fixed',
		},
		descriptionSpacer: {
			display: 'block',
		},
	},
}

const PageDescription = ({ children, classes }) => (
	<div className={classes.pageDescriptionWrapper}>
		<div className={classes.descriptionSpacer}>
			<Spacer height={4} />
		</div>
		{children}
	</div>
)

PageDescription.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(PageDescription)
