import React from 'react'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING, fixedColumnWidthPerc,
} from 'constants/styles/breakpoints'
import Spacer from 'components/Spacer'

const useStyles = createUseStyles({
	pageDescriptionWrapper: {},
	padding: {},
	descriptionSpacer: {
		display: 'none',
	},
	[MD_MIN_STRING]: {
		pageDescriptionWrapper: {
			width: `${fixedColumnWidthPerc}%`,
			position: 'fixed',
		},
		padding: {
			padding: '0 16px',
		},
		descriptionSpacer: {
			display: 'block',
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
