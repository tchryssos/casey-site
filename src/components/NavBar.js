import React, { useContext } from 'react'
import clsx from 'clsx'
import { NavLink, useLocation } from 'react-router-dom'

import MenuContext from 'contexts/menu'
import { homePath, allProjectsPath } from 'constants/navigation'

import Heading from 'components/Typography/Heading'
import MenuText from 'components/Typography/MenuText'

import CloseX from 'static/svg/misc/close_x.svg'

import useStyles from './navBarStyles'

const MenuLinks = () => {
	const classes = useStyles()
	return (
		<>
			<NavLink className={classes.navLeftLink} to={homePath}>
				<MenuText className={classes.whiteText}>Home</MenuText>
			</NavLink>
			<NavLink className={classes.navLeftLink} to="/all-projects">
				<MenuText className={classes.whiteText}>All Projects</MenuText>
			</NavLink>
			<NavLink className={classes.navLeftLink} to="/about">
				<MenuText className={classes.whiteText}>About</MenuText>
			</NavLink>
		</>
	)
}

const NavBar = () => {
	const classes = useStyles()
	const { pathname } = useLocation()
	const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
	return (
		<>
			<div
				className={clsx(classes.menuDarken, {
					// AllProjects handles its own menu darkening
					[classes.isVisible]: isMenuOpen && pathname !== allProjectsPath,
				})}
			/>
			<div className={classes.navWrapper}>
				<div
					className={clsx(classes.mobileMenuOpen, {
						[classes.isVisible]: isMenuOpen,
					})}
				>
					<MenuLinks />
					<button
						className={classes.buttonStyleReset}
						type="button"
						onClick={() => setIsMenuOpen(false)}
					>
						<img className={classes.closeX} src={CloseX} alt="close" />
					</button>
				</div>
				<div className={classes.navContainer}>
					<NavLink className={classes.logo} to={homePath} exact>
						<Heading>Casey</Heading>
					</NavLink>
					<button
						className={clsx(classes.buttonStyleReset, classes.mobileMenuButton)}
						type="button"
						onClick={() => setIsMenuOpen(true)}
					>
						<Heading>Menu</Heading>
					</button>
					<div className={classes.navLeft}>
						<MenuLinks />
					</div>
				</div>
				<NavLink className={classes.logoDesktop} to={homePath} exact>
					<Heading>Casey</Heading>
				</NavLink>
				<div className={classes.navLeftDesktop}>
					<MenuLinks />
				</div>
			</div>
		</>
	)
}

export default NavBar
