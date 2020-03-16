import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	bodyFont: {
		fontFamily: '"Work Sans", sans-serif',
	},
})

export default ({ children }) => {
	const classes = useStyles()
	return (
		<div>
			<p className={classes.bodyFont}>
				{children}
			</p>
		</div>
	)
}
