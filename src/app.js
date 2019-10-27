import React, { useState, useEffect } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import blobLinkData from 'constants/blobLinks'
import { MD_MIN_VALUE, MD_MIN_STRING } from 'constants/styles/breakpoints'
import MenuContext from 'contexts/menu'

import NavBar from 'components/NavBar'
import Home from 'pages/Home'
import FISMarketing from 'pages/FISMarketing'
import UIDesign from 'pages/UIDesign'
import HowToTampons from 'pages/HowToTampons'
import MusicalRug from 'pages/MusicalRug'
import TheUprisingCreative from 'pages/TheUprisingCreative'
import SeatGeekScholarship from 'pages/SeatGeekScholarship'
import ChaseSapphire from 'pages/ChaseSapphire'
import ChangeThingsVideo from 'pages/ChangeThingsVideo'
import About from 'pages/About'

import cursor from 'static/images/Misc/cursor.png'


const styles = {
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
}

const App = ({ location, classes }) => {
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
					classNames(
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
						path={blobLinkData.HowToTampons.link}
						component={HowToTampons}
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
						path={blobLinkData.ChangeThingsVideo.link}
						component={ChangeThingsVideo}
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

const RouterApp = injectSheet(styles)(withRouter(props => <App {...props} />))

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)

