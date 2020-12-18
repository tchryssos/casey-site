import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	headlineFont: {
		// fontFamily: '"buena-park-jf", serif',
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return (
		<h2 className={clsx(
			classes.headlineFont,
			className,
		)}
		>
			{children}
		</h2>
	)
}
