import React, { useState, useEffect } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'

import blobLinkData from 'constants/blobLinks'
import MenuContext from 'contexts/menu'
import NavBar from 'components/NavBar'
import Home from 'pages/Home'
import FISMarketing from 'pages/FISMarketing'
import UXUICourse from 'pages/UXUICourse'
import HowToTampons from 'pages/HowToTampons'
import MusicalRug from 'pages/MusicalRug'
import TheUprisingCreative from 'pages/TheUprisingCreative'
import SeatGeekScholarship from 'pages/SeatGeekScholarship'
import ChaseSapphire from 'pages/ChaseSapphire'
import ChangeThingsVideo from 'pages/ChangeThingsVideo'
import About from 'pages/About'

const App = ({ location }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	useEffect(() => {
		setIsMenuOpen(false)
	}, [location])
	return (
		<MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
			<div style={{ position: 'relative' }}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route
						path={blobLinkData.FISMarketing.link}
						component={FISMarketing}
					/>
					<Route
						path={blobLinkData.UXUICourse.link}
						component={UXUICourse}
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

const RouterApp = withRouter(props => <App {...props} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)

