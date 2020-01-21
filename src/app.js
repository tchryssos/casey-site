import React, { useState, useEffect } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import blobLinkData from 'constants/blobLinks'
import { MD_MIN_VALUE, MD_MIN_STRING } from 'constants/styles/breakpoints'
import MenuContext from 'contexts/menu'

import NavBar from 'components/NavBar'
import Home from 'pages/Home'
import FISMarketing from 'pages/FISMarketing'
import UIDesign from 'pages/UIDesign'
import Portfolio from 'pages/Portfolio'
import MusicalRug from 'pages/MusicalRug'
import TheUprisingCreative from 'pages/TheUprisingCreative'
import SeatGeekScholarship from 'pages/SeatGeekScholarship'
import ChaseSapphire from 'pages/ChaseSapphire'
import FISWeb from 'pages/FISWeb'
import ListenJay from 'pages/listenjay'
import About from 'pages/About'

import cursor from 'static/images/Misc/cursor.png'

const marPadZero = {
	margin: 0,
	padding: 0,
}
const baseStyle = {
	height: '100%',
	width: '100%',
	...marPadZero,
}

const useStyles = createUseStyles({
	// Start - Base Styles - Start
	'@import': [
		"url('https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap')",
	],
	'@global': {
		'*': {
			fontFamily: '"Anonymous Pro", monospace',
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

const App = ({ location }) => {
	const classes = useStyles()
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	// On location change, scroll to page top
	useEffect(() => {
		setIsMenuOpen(false)
		window.scrollTo(0, 0)
	}, [location])
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
			<div
				// iOS onClick hack
				// https://stackoverflow.com/questions/24077725/mobile-safari-sometimes-does-not-trigger-the-click-event
				onClick={void 0}
				className={
					clsx(
						classes.app,
						isMenuOpen ? classes.fixedBody : '',
					)
				}
			>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route
						path={blobLinkData.FISMarketing.link}
						component={FISMarketing}
					/>
					<Route
						path={blobLinkData.UIDesign.link}
						component={UIDesign}
					/>
					<Route
						path={blobLinkData.Portfolio.link}
						component={Portfolio}
					/>
					<Route
						path={blobLinkData.MusicalRug.link}
						component={MusicalRug}
					/>
					<Route
						path={blobLinkData.TheUprisingCreative.link}
						component={TheUprisingCreative}
					/>
					<Route
						path={blobLinkData.SeatGeekScholarship.link}
						component={SeatGeekScholarship}
					/>
					<Route
						path={blobLinkData.ChaseSapphire.link}
						component={ChaseSapphire}
					/>
					<Route
						path={blobLinkData.FISWeb.link}
						component={FISWeb}
					/>
					<Route
						path="/listenjay"
						component={ListenJay}
					/>
					<Route
						path="/about"
						component={About}
					/>
				</Switch>
				<NavBar />
			</div>
		</MenuContext.Provider>
	)
}

const RouterApp = withRouter(props => <App {...props} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)

