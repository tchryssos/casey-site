import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import MenuContext from 'contexts/menu'
import { HomePath } from 'constants/navigation'
import Heading from 'components/Typography/Heading'
import MenuText from 'components/Typography/MenuText'

import useStyles from './navBarStyles'

const MenuLinks = () => {
	const classes = useStyles()
	return (
		<>
			<NavLink className={classes.navLeftLink} to="/about">
				<MenuText>About</MenuText>
			</NavLink>
			<NavLink className={classes.navLeftLink} to="/all-projects">
				<MenuText>All Projects</MenuText>
			</NavLink>
			<NavLink className={classes.navLeftLink} to={HomePath}>
				<MenuText>Home</MenuText>
			</NavLink>
		</>
	)
}

const NavBar = () => {
	const classes = useStyles()
	const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
	return (
		<>
			<div className={classes.navWrapper}>
				<div className={classes.mobileMenuOpen}>
					<MenuLinks />
				</div>
				<div className={classes.navContainer}>
					<NavLink className={classes.logo} to={HomePath} exact>
						<Heading>Casey</Heading>
					</NavLink>
					<Heading className={classes.mobileMenuButton}>Menu</Heading>
					<div className={classes.navLeft}>
						<MenuLinks />
					</div>
				</div>
			</div>
		</>
	)
}

export default NavBar
