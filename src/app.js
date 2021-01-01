import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch, useLocation, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import blobLinkData from 'constants/blobLinks'
import { MD_MIN_VALUE, MD_MIN_STRING } from 'constants/styles/breakpoints'
import { lightGray } from 'constants/styles/colors'
import {
	homePath,
	passwordPath,
	allProjectsPath,
	ellipsisPath,
	irthPath,
	mirrorPath,
} from 'constants/navigation'
import MenuContext from 'contexts/menu'
import ScrollContext from 'contexts/scroll'
import orNull from 'util/orNull'

import NavBar from 'components/NavBar'
import Home from 'pages/Home'
import Footer from 'components/Footer'
import FISMarketing from 'pages/FISMarketing'
import Portfolio from 'pages/Portfolio'
import ListenJay from 'pages/ListenJay'
import ELO from 'pages/elo'
import Mirror from 'pages/Mirror'
import MensHealth from 'pages/MensHealth'
import About from 'pages/About'
import FourOhFour from 'pages/404'
import ListenJayUXA from 'pages/ListenJayUXA'
import Chase from 'pages/Chase'
import Ellipsis from 'pages/Ellipsis'
import Irth from 'pages/Irth'
import AllProjects from 'pages/AllProjects'
import Password from 'pages/Password'

import cursor from 'static/images/Misc/cursor.png'

const marPadZero = {
	margin: 0,
	padding: 0,
}
const baseStyle = {
	height: '100%',
	width: '100%',
	backgroundColor: lightGray,
	...marPadZero,
	// because main app doesn't scroll due to menu animation restrictions
	// overscroll leads to undesirable "bounce" on any scroll
	overscrollBehavior: 'none',
}

const useStyles = createUseStyles({
	// Start - Base Styles - Start
	'@import': ["url('https://use.typekit.net/fso6uhu.css')"],
	'@global': {
		'*': {
			fontFamily: '"Work Sans", sans-serif',
		},
		html: baseStyle,
		body: {
			...baseStyle,
			position: 'relative',
		},
		'#app': {
			...baseStyle,
			fontSize: 14,
		},
		p: marPadZero,
		h1: {
			...marPadZero,
			fontSize: 36,
		},
		h2: marPadZero,
		h3: marPadZero,
		button: {
			...marPadZero,
			boxSizing: 'border-box',
		},
		input: {
			...marPadZero,
			boxSizing: 'border-box',
		},
		iframe: {
			width: '100%',
		},
	},
	// End - Base Styles - End

	app: {
		position: 'relative',
		backgroundColor: lightGray,
		width: '100%',
		height: '100%',
		cursor: 'auto',
	},
	menuOpenApp: {
		overflowX: 'hidden',
	},
	[MD_MIN_STRING]: {
		app: {
			cursor: `url(${cursor}),auto`,
		},
	},
})

const App = () => {
	const classes = useStyles()
	const location = useLocation()

	// Scroll ref is used to reset scroll position on route change
	// and controll some scrolling effects on various pages
	const scrollRef = useRef(document.documentElement)
	const getScroll = () => scrollRef.current

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		setIsMenuOpen(false)
		// On location change, scroll to page top
		scrollRef.current.scrollTop = 0
	}, [location.pathname])

	// Stop body scroll behind small window menus
	useEffect(() => {
		if (isMenuOpen && window.outerWidth < MD_MIN_VALUE) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'initial'
		}
	}, [isMenuOpen])

	return (
		<MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
			<ScrollContext.Provider value={{ getScroll }}>
				{/* eslint-disable */}
				<div
					// iOS onClick hack
					// https://stackoverflow.com/questions/24077725/mobile-safari-sometimes-does-not-trigger-the-click-event
					onClick={void 0}
					className={clsx(classes.app, { [classes.menuOpenApp]: isMenuOpen })}
					id="scrollApp"
				>
					{/* eslint-enable */}
					<NavBar />
					<Switch>
						<Route path={homePath} exact component={Home} />
						<Route
							path={blobLinkData.FISMarketing.link}
							component={FISMarketing}
						/>
						<Route path={blobLinkData.Portfolio.link} component={Portfolio} />
						<Route
							path={blobLinkData.ListenJay.link}
							component={ListenJayUXA}
						/>
						<Route path={blobLinkData.About.link} component={About} />
						<Route path={blobLinkData.ELO.link} component={ELO} />
						<Route path={mirrorPath} component={Mirror} />
						<Route path="/listenjay-og" component={ListenJay} />
						<Route path={blobLinkData.MensHealth.link} component={MensHealth} />
						<Route path={blobLinkData.Chase.link} component={Chase} />
						<Route path={ellipsisPath} component={Ellipsis} />
						<Route path={allProjectsPath} component={AllProjects} />
						<Route path={irthPath} component={Irth} />
						<Route path={passwordPath} component={Password} />
						<Route component={FourOhFour} />
					</Switch>
					{/* About page sticker board prevents normal footer display so it is imported directly there */}
					{orNull(location.pathname !== blobLinkData.About.link, <Footer />)}
				</div>
			</ScrollContext.Provider>
		</MenuContext.Provider>
	)
}

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app'),
)
