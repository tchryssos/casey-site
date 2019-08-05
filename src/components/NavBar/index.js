import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import MenuContext from 'contexts/menu'
import Logo from 'static/svg/menu/logo.svg'
import HandsUp from 'static/svg/menu/handsup.svg'
import HandsDown from 'static/svg/menu/handsdown.svg'
import Heading from 'components/Typography/Heading'
import MenuRoutes from './components/MenuRoutes'
import styles from './styles'

const NavBar = ({ classes }) => (
	<MenuContext.Consumer>
		{({ isMenuOpen, setIsMenuOpen }) => (
			<>
				<div
					className={
						classNames(
							classes.menu,
							isMenuOpen ? classes.menuVisible : '',
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

export default injectSheet(styles)(NavBar)
