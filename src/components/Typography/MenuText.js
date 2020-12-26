import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { darkGray } from 'constants/styles/colors'

const useStyles = createUseStyles({
	headlineFont: {
		fontWeight: 400,
		fontSize: 18,
		color: darkGray,
		padding: 0,
		margin: 0,
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return <p className={clsx(classes.headlineFont, className)}>{children}</p>
}
