import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import blobLinkData from 'constants/blobLinks'
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

render(
	<BrowserRouter>
		<>
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
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
