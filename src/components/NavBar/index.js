import React, { useState } from 'react'
import Logo from 'static/svg/logo.svg'
import HandsUp from 'static/svg/handsup.svg'
import HandsDown from 'static/svg/handsdown.svg'
import MenuRoutes from './components/MenuRoutes'
import './styles.scss'

const NavBar = () => {
	const [isMenuDisplayed, toggleMenu] = useState(false)

	return (
		<>
			<div className={`menu displayMenu-${isMenuDisplayed}`}>
				<MenuRoutes />
			</div>
			<div className="navWrapper">
				<div className="navContainer">
					<button
						onClick={() => toggleMenu(!isMenuDisplayed)}
						className={`menuButton menuButtonOn-${isMenuDisplayed}`}
					>
						<img
							className="openMenuIcon"
							src={isMenuDisplayed ? HandsDown : HandsUp}
							alt="Menu toggle icon"
						/>
					</button>
					<img className="logo" src={Logo} alt="Casey B Logo" />
				</div>
			</div>
		</>
	)
}

export default NavBar
