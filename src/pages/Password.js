import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import ContentBlock from 'components/ContentBlock'
import SubHeading from 'components/Typography/SubHeading'
import Spacer from 'components/Spacer'
import Button from 'components/Button'

import { darkGray, red, orange } from 'constants/styles/colors'

const useStyles = createUseStyles({
	form: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		alignItems: 'center',
	},
	input: {
		appearance: 'none',
		'-webkit-appearance': 'none',
		'-mos-appearance': 'none',
		'-ms-appearance': 'none',
		borderRadius: 100,
		border: [[2, 'solid', darkGray]],
		height: 200,
		width: '100%',
		marginTop: 8,
		padding: [[25, 50]],
		fontSize: 100,
		textAlign: 'center',
		outline: 'none',
	},
	error: {
		borderColor: red,
	},
	submit: {
		backgroundColor: '#2b2b2b',
		padding: 8,
		color: 'white',
		textTransform: 'uppercase',
		textDecoration: 'none',
		border: 'none',
		marginTop: 10,
		width: 150,
		'&:hover': {
			backgroundColor: '#4e7fff',
		},
	},
})

const PasswordPage = ({ setIsAuthorized }) => {
	const classes = useStyles()

	const [value, setValue] = useState('')

	const onChange = (e) => setValue(e.target.value)
	const onSubmit = (e) => {
		e.preventDefault()
		window.sessionStorage.setItem('p', value)
		if (value === process.env.PAGE_PASSWORD) {
			setIsAuthorized(true)
		}
		setValue('')
	}

	return (
		<ContentBlock className={classes.passwordBlock}>
			<form className={classes.form}>
				<label htmlFor="pagePassword">
					<SubHeading>Please enter a password to view this page</SubHeading>
					<Spacer height={2} />
					<input
						placeholder="Password"
						name="pagePassword"
						id="pagePassword"
						type="password"
						value={value}
						onChange={onChange}
						className={clsx(classes.input, {
							[classes.error]: Boolean(window.sessionStorage.getItem('p')),
						})}
					/>
				</label>
				<Button
					className={classes.submit}
					label="Submit"
					onClick={onSubmit}
					type="submit"
				/>
			</form>
		</ContentBlock>
	)
}

export default PasswordPage
