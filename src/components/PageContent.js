import React from 'react'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	pageContentWrapper: {
		position: 'relative',
		padding: [[0, 16]],
	},
	[MD_MIN_STRING]: {
		pageContentWrapper: {
		},
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.pageContentWrapper}>
				{children}
			</div>
		</>
	)
}
