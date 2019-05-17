import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from 'static/svg/menu/logo.svg'
import HandsUp from 'static/svg/menu/handsup.svg'
import HandsDown from 'static/svg/menu/handsdown.svg'
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
					<NavLink to="/" exact>
						<img className="logo" src={Logo} alt="Casey B Logo" />
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default NavBar
