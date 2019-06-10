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

import './styles/theme.scss'

render(
	<BrowserRouter>
		<div className="appContent">
			<div className="nonNavWrapper">
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
				</Switch>
			</div>
			<NavBar />
		</div>
	</BrowserRouter>,
	document.getElementById('app'),
)
