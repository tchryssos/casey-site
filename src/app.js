import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NavBar from 'components/NavBar'
import Home from 'pages/Home'

import './styles/theme.scss'

render(
	<BrowserRouter>
		<>
			<div className="nonNavWrapper">
				<Home />
			</div>
			<NavBar />
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
