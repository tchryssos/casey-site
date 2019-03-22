import React, { PureComponent } from 'react'
import { ReactComponent as Logo } from 'static/svg/logo.svg'

class NavBar extends PureComponent {
	render = () => (
		<div>
			<Logo />
		</div>
	)
}

export default NavBar
