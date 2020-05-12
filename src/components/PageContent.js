import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING, pageContentWidthPerc, pageDescriptionWidthPerc,
} from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	pageContentWrapper: {
		position: 'relative',
	},
	[MD_MIN_STRING]: {
		pageContentWrapper: {
			width: `${pageContentWidthPerc}%`,
			padding: [[0, 16]],
		},
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<div className={classes.pageContentWrapper}>
			{children}
		</div>
	)
}
