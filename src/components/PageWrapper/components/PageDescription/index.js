import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING, fixedColumnWidthPerc,
} from 'constants/styles/breakpoints'
import Spacer from 'components/Spacer'

const useStyles = createUseStyles({
	descriptionSpacer: {
		display: 'none',
		[MD_MIN_STRING]: {
			display: 'block',
		},
	},
	padding: {
		[MD_MIN_STRING]: {
			padding: '0 16px',
		},
	},
	pageDescriptionWrapper: {
		[MD_MIN_STRING]: {
			width: `${fixedColumnWidthPerc}%`,
			position: 'fixed',
		},
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<div className={classes.pageDescriptionWrapper}>
			<div className={classes.descriptionSpacer}>
				<Spacer height={4} />
			</div>
			<div className={classes.padding}>
				{children}
			</div>
		</div>
	)
}
