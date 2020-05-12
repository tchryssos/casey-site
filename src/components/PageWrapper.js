import React from 'react'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingBottom: '84px',
		backgroundColor: '#e8e8e8',
	},
	[MD_MIN_STRING]: {
		pageWrapper: {
			zIndex: 2,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			paddingBottom: 0,
		},
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<div className={classes.pageWrapper}>
			{children}
		</div>
	)
}
