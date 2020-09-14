import React, { useState, useEffect, useRef } from 'react'
import {
	Route, Switch, withRouter, BrowserRouter,
} from 'react-router-dom'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import blobLinkData from 'constants/blobLinks'
import { MD_MIN_VALUE, MD_MIN_STRING } from 'constants/styles/breakpoints'
import { AltHomePath, HomePath } from 'constants/navigation'
import MenuContext from 'contexts/menu'
import ScrollContext from 'contexts/scroll'
import PageGatingContext from 'contexts/pageGating'

import NavBar from 'components/NavBar'
import Home from 'pages/Home'
import FISMarketing from 'pages/FISMarketing'
import Portfolio from 'pages/Portfolio'
import ListenJay from 'pages/ListenJay'
import ELO from 'pages/elo'
import Mirror from 'pages/Mirror'
import MensHealth from 'pages/MensHealth'
import About from 'pages/About'
import FourOhFour from 'pages/404'
import ListenJayUXA from 'pages/ListenJayUXA'
import HomeB from 'pages/HomeB'

import cursor from 'static/images/Misc/cursor.png'

const marPadZero = {
	margin: 0,
	padding: 0,
}
const baseStyle = {
	height: '100%',
	width: '100%',
	backgroundColor: '#e8e8e8',
	...marPadZero,
	// because main app doesn't scroll due to menu animation restrictions
	// overscroll leads to undesirable "bounce" on any scroll
	overscrollBehavior: 'none',
}

const useStyles = createUseStyles({
	// Start - Base Styles - Start
	'@import': [
		"url('https://use.typekit.net/fso6uhu.css')",
	],
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
		iframe: {
			width: '100%',
		},
	},
	// End - Base Styles - End

	app: {
		position: 'relative',
		backgroundColor: '#e8e8e8',
		width: '100%',
		height: '100%',
		cursor: 'auto',
		overflowX: 'hidden',
	},
	menuSlide: {
		transform: 'translateX(768px)',
	},
	switchWrapper: {
		backgroundColor: '#e8e8e8',
		transition: 'transform 0.5s',
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
	},
	[MD_MIN_STRING]: {
		app: {
			cursor: `url(${cursor}),auto`,
		},
		menuSlide: {
			transform: 'translateX(240px)',
		},
	},
})

const App = ({ location }) => {
	const classes = useStyles()
	const scrollRef = useRef() // used for page scroll reset on navigation
	const isAltHomeRef = useRef(location.pathname.toLowerCase() === AltHomePath)
	// const isAltHomeRef = useRef(true)
	const getScroll = () => scrollRef.current
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	// On location change, scroll to page top
	useEffect(() => {
		setIsMenuOpen(false)
		scrollRef.current.scrollTop = 0
		if (location.pathname.toLowerCase() === AltHomePath) {
			isAltHomeRef.current = true
		}
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
		<PageGatingContext.Provider value={{ isAltHome: isAltHomeRef.current }}>
			<MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
				<ScrollContext.Provider value={{ getScroll }}>
					{/* eslint-disable */}
					<div
						// iOS onClick hack
						// https://stackoverflow.com/questions/24077725/mobile-safari-sometimes-does-not-trigger-the-click-event
						onClick={void 0}
						className={
							clsx(
								classes.app,
								// isMenuOpen ? classes.fixedBody : '',
							)
						}
						id="scrollApp"
						ref={scrollRef}
					>
					{/* eslint-enable */}
						<NavBar />
						<div
							className={
								clsx(
									classes.switchWrapper,
									{ [classes.menuSlide]: isMenuOpen },
								)
							}
						>
							<Switch>
								<Route path={HomePath} exact component={Home} />
								<Route path={AltHomePath} component={HomeB} />
								<Route
									path={blobLinkData.FISMarketing.link}
									component={FISMarketing}
								/>
								<Route
									path={blobLinkData.Portfolio.link}
									component={Portfolio}
								/>
								<Route
									path={blobLinkData.ListenJay.link}
									component={ListenJayUXA}
								/>
								<Route
									path={blobLinkData.About.link}
									component={About}
								/>
								<Route
									path={blobLinkData.ELO.link}
									component={ELO}
								/>
								<Route
									path="/mirror"
									component={Mirror}
								/>
								<Route
									path="/listenjay-og"
									component={ListenJay}
								/>
								<Route
									path={blobLinkData.MensHealth.link}
									component={MensHealth}
								/>
								<Route component={FourOhFour} />
							</Switch>
						</div>
					</div>
				</ScrollContext.Provider>
				{/* <NavBar /> */}
			</MenuContext.Provider>
		</PageGatingContext.Provider>
	)
}

const RouterApp = withRouter((props) => <App {...props} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)

