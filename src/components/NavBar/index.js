import React from 'react'
import clsx from 'clsx'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import MenuContext from 'contexts/menu'
import Logo from 'static/svg/menu/logo.svg'
import HandsUp from 'static/svg/menu/handsup.svg'
import HandsDown from 'static/svg/menu/handsdown.svg'
import Heading from 'components/Typography/Heading'
import MenuRoutes from './components/MenuRoutes'
import useStyles from './styles'

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
								{ [classes.menuVisible]: isMenuOpen },
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
							>
								<img
									className={classes.openMenuIcon}
									src={isMenuOpen ? HandsDown : HandsUp}
									alt="Menu toggle icon"
								/>
								<div className={classes.openMenuText}>
									<Heading>{isMenuOpen ? 'menu open' : 'menu'}</Heading>
								</div>
							</button>
							<NavLink to="/" exact>
								<img className={classes.logo} src={Logo} alt="Casey B Logo" />
							</NavLink>
						</div>
					</div>
				</>
			)}
		</MenuContext.Consumer>
	)
}
