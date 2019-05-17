import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import blobLinkData from 'constants/blobLinks'
import NavBar from 'components/NavBar'
import Home from 'pages/Home'
import FISMarketing from 'pages/FISMarketing'
import UXUICourse from 'pages/UXUICourse'
import HowToTampons from 'pages/HowToTampons'

import './styles/theme.scss'

render(
	<BrowserRouter>
		<>
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
				</Switch>
			</div>
			<NavBar />
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
