import React from 'react'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { lightGray } from 'constants/styles/colors'

const useStyles = createUseStyles({
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: lightGray,
	},
	[MD_MIN_STRING]: {
		pageWrapper: {
			zIndex: 2,
			flexDirection: 'column',
			justifyContent: 'flex-start',
			paddingBottom: 0,
		},
	},
})

const PageWrapper = ({ children }) => {
	const classes = useStyles()
	return <div className={classes.pageWrapper}>{children}</div>
}

export default PageWrapper
