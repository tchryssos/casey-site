import React, {
	useState,
	useEffect,
	useContext,
	useRef,
	useLayoutEffect,
} from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

import ternary from 'util/ternary'
import MenuConext from 'contexts/menu'
import ScrollContext from 'contexts/scroll'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { lightGray } from 'constants/styles/colors'
import { lockedRoutes } from 'constants/navigation'

import PasswordPage from 'pages/Password'

const useStyles = createUseStyles({
	pageWrapper: {
		position: 'relative',
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

const PageWrapper = ({ children, menuOpenOverride }) => {
	const pageRef = useRef()
	const classes = useStyles()
	const { pathname } = useLocation()
	const { isMenuOpen, scrollY } = useContext(MenuConext)
	const { getScroll } = useContext(ScrollContext)
	const [isAuthorized, setIsAuthorized] = useState(false)

	useEffect(() => {
		if (window.sessionStorage.getItem('p') === process.env.PAGE_PASSWORD) {
			setIsAuthorized(true)
		}
	}, [])

	// Prevent scrolling while menu is open
	useLayoutEffect(() => {
		if (menuOpenOverride) {
			menuOpenOverride(isMenuOpen, pageRef)
		} else if (isMenuOpen) {
			pageRef.current.style.top = `-${scrollY}px`
		} else {
			pageRef.current.style.top = ''
			const scrollEl = getScroll()
			scrollEl.scroll(0, scrollY)
		}
	}, [isMenuOpen])

	return (
		<div
			className={clsx(classes.pageWrapper, { [classes.menuOpen]: isMenuOpen })}
			ref={pageRef}
		>
			{ternary(
				!lockedRoutes[pathname] || isAuthorized,
				children,
				<PasswordPage setIsAuthorized={setIsAuthorized} />,
			)}
		</div>
	)
}

export default PageWrapper
