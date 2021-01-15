import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	headlineFont: {
		// fontFamily: '"buena-park-jf", serif',
		fontWeight: 700,
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return (
		<h1
			className={clsx(
				classes.headlineFont,
				className,
			)}
		>
			{children}
		</h1>
	)
}
