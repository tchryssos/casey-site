import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	itemGridWrapper: {
		marginTop: '16px',
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return (
		<div className={clsx(classes.itemGridWrapper, className)}>
			{children}
		</div>
	)
}
