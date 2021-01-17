import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch, useLocation, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import debounce from 'lodash.debounce'

import blobLinkData from 'constants/blobLinks'
import { MD_MIN_STRING, MD_MIN_VALUE } from 'constants/styles/breakpoints'
import { lightGray } from 'constants/styles/colors'
import {
	homePath,
	allProjectsPath,
	aboutPath,
	ELOPath,
	listenJayPath,
	ellipsisPath,
	irthPath,
	mirrorPath,
	philzPath,
	EllipsisAppPath,
} from 'constants/navigation'
import MenuContext from 'contexts/menu'
import ScrollContext from 'contexts/scroll'

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
import Chase from 'pages/Chase'
import Ellipsis from 'pages/Ellipsis'
import Irth from 'pages/Irth'
import Philz from 'pages/Philz'
import EllipsisApp from 'pages/EllipsisApp'
import AllProjects from 'pages/AllProjects'

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
			fontFamily: '"work-sans", sans-serif',
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
	const [scrollY, setScrollY] = useState(0)

	const onMenuToggle = (menuStateBool) => {
		if (menuStateBool) {
			// Used to properly position pages while menu is open and scrolling
			// is prevented
			setScrollY(window.scrollY)
		}
		setIsMenuOpen(menuStateBool)
	}

	useEffect(() => {
		setIsMenuOpen(false)
		// On location change, scroll to page top
		scrollRef.current.scrollTop = 0
	}, [location.pathname])

	const onResize = debounce(() => {
		if (window.innerWidth >= MD_MIN_VALUE) {
			onMenuToggle(false)
		}
	}, 50)

	useEffect(() => {
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])

	return (
		<MenuContext.Provider
			value={{ isMenuOpen, setIsMenuOpen: onMenuToggle, scrollY }}
		>
			<ScrollContext.Provider value={{ getScroll }}>
				{/* eslint-disable */}
				<div
					// iOS onClick hack
					// https://stackoverflow.com/questions/24077725/mobile-safari-sometimes-does-not-trigger-the-click-event
					onClick={void 0}
					className={clsx(classes.app)}
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
						<Route path={listenJayPath} component={ListenJayUXA} />
						<Route path={aboutPath} component={About} />
						<Route path={ELOPath} component={ELO} />
						<Route path={mirrorPath} component={Mirror} />
						<Route path="/listenjay-og" component={ListenJay} />
						<Route path={blobLinkData.MensHealth.link} component={MensHealth} />
						<Route path={blobLinkData.Chase.link} component={Chase} />
						<Route path={ellipsisPath} component={Ellipsis} />
						<Route path={allProjectsPath} component={AllProjects} />
						<Route path={irthPath} component={Irth} />
						<Route path={philzPath} component={Philz} />
						<Route path={EllipsisAppPath} component={EllipsisApp} />
						<Route component={FourOhFour} />
					</Switch>
					{/*
						Footer is being handled by the PageWrapper component. Any page not wrapped in
						PageWrapper handles its own Footer
					*/}
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
