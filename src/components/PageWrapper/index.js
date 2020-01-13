import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING, pageContentTotalWidthPerc,
} from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
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
})

const PageWrapper = ({ children }) => {
	const classes = useStyles()
	return (
		<div className={classes.pageWrapper}>
			{children}
		</div>
	)
}
