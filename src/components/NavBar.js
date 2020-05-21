import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import MenuContext from 'contexts/menu'
import Heading from 'components/Typography/Heading'
import MenuRoutes from 'components/MenuRoutes'
import useStyles from './navBarStyles'


export default () => {
	const classes = useStyles()
	return (
		<MenuContext.Consumer>
			{({ isMenuOpen, setIsMenuOpen }) => (
				<>
					<div
						className={
							clsx(
								classes.menu,
								classes.menuVisible,
								// { [classes.menuVisible]: isMenuOpen },
							)
						}
					>
						<MenuRoutes />
					</div>
					<div className={classes.navWrapper}>
						<div className={classes.navContainer}>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className={classes.menuButton}
								type="button"
							>
								<div
									className={
										clsx(
											classes.openMenuText,
											{ [classes.menuVisibleText]: isMenuOpen },
										)
									}
								>
									<Heading>
										{isMenuOpen ? 'Close' : 'Menu'}
									</Heading>
								</div>
							</button>
							<NavLink
								className={
									clsx(
										classes.logo,
										{ [classes.menuSlide]: isMenuOpen },
									)
								}
								to="/"
								exact
							>
								<Heading>Casey</Heading>
							</NavLink>
						</div>
					</div>
				</>
			)}
		</MenuContext.Consumer>
	)
}
