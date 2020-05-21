import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import MenuContext from 'contexts/menu'
import HandsUp from 'static/svg/menu/handsup.svg'
import HandsDown from 'static/svg/menu/handsdown.svg'
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
								type="button"
							>
								{/* <img
									className={classes.openMenuIcon}
									src={isMenuOpen ? HandsDown : HandsUp}
									alt="Menu toggle icon"
								/> */}
								<div className={classes.openMenuText}>
									<Heading>
										{isMenuOpen ? 'close' : 'menu'}
									</Heading>
								</div>
							</button>
							<NavLink className={classes.logo} to="/" exact>
								<Heading>casey</Heading>
							</NavLink>
						</div>
					</div>
				</>
			)}
		</MenuContext.Consumer>
	)
}
