import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING, pageContentWidthPerc, pageDescriptionWidthPerc,
} from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	descriptionSpacer: {
		display: 'none',
		width: `${pageDescriptionWidthPerc}%`,
	},
	pageContentWrapper: {
		position: 'relative',
	},
	[MD_MIN_STRING]: {
			descriptionSpacer: {
				display: 'block',
			},
		pageContentWrapper: {
			width: `${pageContentWidthPerc}%`,
			padding: [[0, 16]],
			'&:first-child': {
				marginLeft: '50%',
			},
		},
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.descriptionSpacer} />
			<div className={classes.pageContentWrapper}>
				{children}
			</div>
		</>
	)
}
