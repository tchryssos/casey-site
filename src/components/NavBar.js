import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import MenuContext from 'contexts/menu'
import Heading from 'components/Typography/Heading'
import MenuText from 'components/Typography/MenuText'
import MenuRoutes from 'components/MenuRoutes'
import useStyles from './navBarStyles'


export default () => {
	const classes = useStyles()
	return (
		<MenuContext.Consumer>
			{({ isMenuOpen, setIsMenuOpen }) => (
				<>
					<div className={classes.menuSlideContainer}>
						<div className={classes.menu}>
							<MenuRoutes />
						</div>
						<div
							className={clsx(
								classes.menuCover,
								{ [classes.menuSlide]: isMenuOpen },
							)}
						/>
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
									<MenuText>
										{isMenuOpen ? 'Close' : 'Menu'}
									</MenuText>
								</div>
							</button>
							<NavLink
								className={
									clsx(
										{ [classes.menuSlide]: isMenuOpen },
										classes.logo,
									)
								}
								to="/"
								exact
							>
								<MenuText>Casey</MenuText>
							</NavLink>
						</div>
					</div>
				</>
			)}
		</MenuContext.Consumer>
	)
}
