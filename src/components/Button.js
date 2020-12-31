import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import ternary from 'util/ternary'

import Body from 'components/Typography/Body'

const useStyles = createUseStyles({
	button: {
		height: 40,
	},
})

const Button = ({ label, onClick, type = 'button', children, className }) => {
	const classes = useStyles()
	return (
		<button
			// eslint-disable-next-line react/button-has-type
			type={type}
			className={clsx(classes.button, className)}
			onClick={onClick}
		>
			{ternary(!!label, <Body>{label}</Body>, children)}
		</button>
	)
}

export default Button
