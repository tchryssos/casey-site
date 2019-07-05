import React from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { navContentHeight, navPaddingHeight } from 'components/NavBar/styles'
import { black } from 'constants/styles/colors'

const styles = {
	menuRouteChunk: {
		display: 'flex',
		flexDirection: 'column',
		margin: '3rem',
		'&:first-of-type': {
			marginTop: '5rem',
		},
	},
	menuLink: {
		color: black,
		marginTop: '2rem',
	},
	[MD_MIN_STRING]: {
		menuRouteChunk: {
			margin: '2rem 0 0 1rem',
		},
		menuLink: {
			marginTop: '1rem',
		},
	},
}

const MenuRoutes = ({ classes }) => (
	<>
		<div className={classes.menuRouteChunk}>
			<NavLink
				className={classes.menuLink}
				exact
				to="/"
			>
				Flatiron School Marketing
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to="/"
			>
				UX/UI Course Branding
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to="/"
			>
				Flatiron x SeatGeek Scholarship
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to="/"
			>
				Chase Sapphire Reserve
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to="/"
			>
				The Uprising Creative
			</NavLink>
		</div>
		<div className={classes.menuRouteChunk}>
			<NavLink
				className={classes.menuLink}
				exact
				to="/"
			>
				Musical Rug
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to="/"
			>
				How to put in a tampon
			</NavLink>
		</div>
		<div className={classes.menuRouteChunk}>
			<NavLink
				className={classes.menuLink}
				exact
				to="/"
			>
				About
			</NavLink>
		</div>
	</>
)

export default injectSheet(styles)(MenuRoutes)
