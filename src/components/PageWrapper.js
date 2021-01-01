import React, { useState, useEffect, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

import ternary from 'util/ternary'
import MenuConext from 'contexts/menu'

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
	menuOpen: {
		position: 'fixed',
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
	const { isMenuOpen } = useContext(MenuConext)
	const password = window.sessionStorage.getItem('p')
	const [isAuthorized, setIsAuthorized] = useState(false)

	useEffect(() => {
		if (password === process.env.PAGE_PASSWORD) {
			setIsAuthorized(true)
		}
	}, [])

	useEffect(() => {
		if (isMenuOpen) {
		}
	}, [isMenuOpen])

	return (
		<div
			className={clsx(classes.pageWrapper, { [classes.menuOpen]: isMenuOpen })}
		>
			{ternary(
				!lockedRoutes[pathname] || isAuthorized,
				children,
				<PasswordPage setIsAuthorized={setIsAuthorized} password={password} />,
			)}
		</div>
	)
}

export default PageWrapper
