import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Button from 'components/Button'

import { darkGray, red } from 'constants/styles/colors'

const useStyles = createUseStyles({
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
	input: {
		appearance: 'none',
		'-webkit-appearance': 'none',
		'-mos-appearance': 'none',
		'-ms-appearance': 'none',
		borderRadius: 4,
		border: [[2, 'solid', darkGray]],
		height: 40,
		width: '100%',
		marginTop: 8,
		padding: 8,
		fontSize: '1rem',
	},
	error: {
		borderColor: red,
	},
	submit: {
		marginTop: 8,
	},
})

const PasswordPage = ({ setIsAuthorized, password }) => {
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
		<ContentBlock>
			<Heading>You need a password to see this page</Heading>
			<form className={classes.form}>
				<label htmlFor="pagePassword">
					<Body>If you have the password, enter it below to proceed</Body>
					<input
						placeholder="Enter password"
						name="pagePassword"
						id="pagePassword"
						type="text"
						value={value}
						onChange={onChange}
						className={clsx(classes.input, {
							[classes.error]: Boolean(password),
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
