import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import ternary from 'util/ternary'

import Body from 'components/Typography/Body'

import { offWhite, lightGray, darkGray } from 'constants/styles/colors'

const useStyles = createUseStyles({
	button: {
		appearance: 'none',
		'-webkit-appearance': 'none',
		'-mos-appearance': 'none',
		'-ms-appearance': 'none',
		backgroundColor: offWhite,
		border: [[2, 'solid', darkGray]],
		borderRadius: 4,
		height: 40,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: lightGray,
		},
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
			{ternary(Boolean(label), <Body>{label}</Body>, children)}
		</button>
	)
}

export default Button
