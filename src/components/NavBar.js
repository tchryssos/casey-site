import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import MenuContext from 'contexts/menu'
import { HomePath } from 'constants/navigation'
import MenuText from 'components/Typography/MenuText'
// import MenuRoutes from 'components/MenuRoutes'
import useStyles from './navBarStyles'

const NavBar = () => {
	const classes = useStyles()
	return (
		<MenuContext.Consumer>
			{({ isMenuOpen, setIsMenuOpen }) => (
				<>
					<div className={classes.navWrapper}>
						<div className={classes.navContainer}>
							<button
								// onClick={() => setIsMenuOpen(!isMenuOpen)}
								className={classes.menuButton}
								type="button"
							>
								<div
									className={clsx(classes.openMenuText, {
										[classes.menuVisibleText]: isMenuOpen,
									})}
								>
									<MenuText>{isMenuOpen ? 'Close' : 'Menu'}</MenuText>
								</div>
							</button>
							<NavLink
								className={clsx(
									{ [classes.menuSlide]: isMenuOpen },
									classes.logo,
								)}
								to={HomePath}
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

export default NavBar
