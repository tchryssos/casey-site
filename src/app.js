import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NavBar from 'components/NavBar'
import Home from 'pages/Home'

render(
	<BrowserRouter>
		<>
			<Home />
			<NavBar />
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
