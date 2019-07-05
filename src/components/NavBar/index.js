import React, { useState } from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import Logo from 'static/svg/menu/logo.svg'
import HandsUp from 'static/svg/menu/handsup.svg'
import HandsDown from 'static/svg/menu/handsdown.svg'
import Heading from 'components/Typography/Heading'
import MenuRoutes from './components/MenuRoutes'
import styles from './styles'

const NavBar = ({ classes }) => {
	const [isMenuDisplayed, toggleMenu] = useState(false)
	const openMenuText = () => (isMenuDisplayed ? 'menu open' : 'menu')

	return (
		<>
			<div
				className={
					classNames(
						classes.menu,
						isMenuDisplayed ? classes.menuVisible : '',
					)
				}
			>
				<MenuRoutes />
			</div>
			<div className={classes.navWrapper}>
				<div className={classes.navContainer}>
					<button
						onClick={() => toggleMenu(!isMenuDisplayed)}
						className={classes.menuButton}
					>
						<img
							className={classes.openMenuIcon}
							src={isMenuDisplayed ? HandsDown : HandsUp}
							alt="Menu toggle icon"
						/>
						<div className={classes.openMenuText}>
							<Heading>{openMenuText()}</Heading>
						</div>
					</button>
					<NavLink to="/" exact>
						<img className={classes.logo} src={Logo} alt="Casey B Logo" />
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default injectSheet(styles)(NavBar)
