import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { useLocation } from 'react-router-dom'

import ternary from 'util/ternary'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { lightGray } from 'constants/styles/colors'
import { lockedRoutes } from 'constants/navigation'

import PasswordPage from 'pages/Password'

const useStyles = createUseStyles({
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: lightGray,
	},
	[MD_MIN_STRING]: {
		pageWrapper: {
			zIndex: 2,
			flexDirection: 'column',
			justifyContent: 'flex-start',
			paddingBottom: 0,
		},
	},
})

const PageWrapper = ({ children }) => {
	const classes = useStyles()
	const { pathname } = useLocation()
	const password = window.sessionStorage.getItem('p')
	const [isAuthorized, setIsAuthorized] = useState(false)

	useEffect(() => {
		if (password === process.env.PAGE_PASSWORD) {
			setIsAuthorized(true)
		}
	}, [])

	return (
		<div className={classes.pageWrapper}>
			{ternary(
				!lockedRoutes[pathname] || isAuthorized,
				children,
				<PasswordPage setIsAuthorized={setIsAuthorized} password={password} />,
			)}
		</div>
	)
}

export default PageWrapper
