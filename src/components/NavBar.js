import React, { useContext } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import MenuContext from 'contexts/menu'
import { HomePath } from 'constants/navigation'

import Heading from 'components/Typography/Heading'
import MenuText from 'components/Typography/MenuText'

import CloseX from 'static/svg/misc/close_x.svg'

import useStyles from './navBarStyles'

const MenuLinks = () => {
	const classes = useStyles()
	return (
		<>
			<NavLink className={classes.navLeftLink} to="/about">
				<MenuText className={classes.whiteText}>About</MenuText>
			</NavLink>
			<NavLink className={classes.navLeftLink} to="/all-projects">
				<MenuText className={classes.whiteText}>All Projects</MenuText>
			</NavLink>
			<NavLink className={classes.navLeftLink} to={HomePath}>
				<MenuText className={classes.whiteText}>Home</MenuText>
			</NavLink>
		</>
	)
}

const NavBar = () => {
	const classes = useStyles()
	const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
	return (
		<>
			<div
				className={clsx(classes.menuDarken, {
					[classes.isVisible]: isMenuOpen,
				})}
			/>
			<div className={classes.navWrapper}>
				<div
					className={clsx(classes.mobileMenuOpen, {
						[classes.isVisible]: isMenuOpen,
					})}
				>
					<MenuLinks />
					<button type="button" onClick={() => setIsMenuOpen(false)}>
						<img className={classes.closeX} src={CloseX} alt="close" />
					</button>
				</div>
				<div className={classes.navContainer}>
					<NavLink className={classes.logo} to={HomePath} exact>
						<Heading>Casey</Heading>
					</NavLink>
					<button
						className={classes.mobileMenuButton}
						type="button"
						onClick={() => setIsMenuOpen(true)}
					>
						<Heading>Menu</Heading>
					</button>
					<div className={classes.navLeft}>
						<MenuLinks />
					</div>
				</div>
			</div>
		</>
	)
}

export default NavBar
