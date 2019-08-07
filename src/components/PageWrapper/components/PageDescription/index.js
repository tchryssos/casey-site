import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import {
	MD_MIN_STRING, fixedColumnWidthPerc,
} from 'constants/styles/breakpoints'
import Spacer from 'components/Spacer'

const styles = {
	descriptionSpacer: {
		display: 'none',
	},
	[MD_MIN_STRING]: {
		pageDescriptionWrapper: {
			width: `${fixedColumnWidthPerc}%`,
			position: 'fixed',
		},
		descriptionSpacer: {
			display: 'block',
		},
		padding: {
			padding: '0 1rem',
		},
	},
}

const PageDescription = ({ children, classes }) => (
	<div className={classes.pageDescriptionWrapper}>
		<div className={classes.descriptionSpacer}>
			<Spacer height={4} />
		</div>
		<div className={classes.padding}>
			{children}
		</div>
	</div>
)

PageDescription.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(PageDescription)
