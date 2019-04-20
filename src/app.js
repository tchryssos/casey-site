import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from 'components/NavBar'
import Home from 'pages/Home'

import './styles/theme.scss'

render(
	<BrowserRouter>
		<>
			<div className="nonNavWrapper">
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</div>
			<NavBar />
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
