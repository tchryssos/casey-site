import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from 'components/NavBar'
import Home from 'pages/Home'
import FlatironMarketing from 'pages/FlatironMarketing'

import './styles/theme.scss'

render(
	<BrowserRouter>
		<>
			<div className="nonNavWrapper">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/flatiron-marketing" component={FlatironMarketing} />
				</Switch>
			</div>
			<NavBar />
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
