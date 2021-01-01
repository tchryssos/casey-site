import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Button from 'components/Button'

const useStyles = createUseStyles({
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
	input: {
		height: 40,
		width: '100%',
		marginTop: 8,
		padding: 8,
		fontSize: '1rem',
	},
	submit: {
		marginTop: 8,
	},
})

const PasswordPage = () => {
	const classes = useStyles()

	const [value, setValue] = useState('')
	const p = window.sessionStorage.getItem('p')

	if (p === process.env.PAGE_PASSWORD) {
		return <div>you got the password right</div>
	}

	const onChange = (e) => setValue(e.target.value)
	const onSubmit = (e) => {
		e.preventDefault()
		window.sessionStorage.setItem('p', value)
		setValue('')
	}

	return (
		<PageWrapper>
			<ContentBlock>
				<Heading>You need a password to see this page</Heading>
				<form className={classes.form}>
					<label htmlFor="pagePassword">
						<Body>If you have the password, enter it below to proceed</Body>
						<input
							name="pagePassword"
							id="pagePassword"
							type="text"
							value={value}
							onChange={onChange}
							className={classes.input}
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
		</PageWrapper>
	)
}

export default PasswordPage
