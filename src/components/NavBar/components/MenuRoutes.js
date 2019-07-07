import React from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { black } from 'constants/styles/colors'
import BlobLinks from 'constants/blobLinks'

const styles = {
	menuRouteChunk: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '1rem',
	},
	menuLink: {
		color: black,
		marginTop: '2rem',
		'&:first-of-type': {
			marginTop: 0,
		},
	},
	[MD_MIN_STRING]: {
		menuRouteChunk: {
			margin: '2rem 0 0 1rem',
			'&:first-of-type': {
				marginTop: '5rem',
			},
		},
		menuLink: {
			marginTop: '1rem',
			'&:first-of-type': {
				marginTop: '2rem',
			},
		},
	},
}

const MenuRoutes = ({ classes }) => (
	<>
		<div className={classes.menuRouteChunk}>
			<NavLink
				className={classes.menuLink}
				exact
				to={BlobLinks.FISMarketing.link}
			>
				Flatiron School Marketing
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to={BlobLinks.UXUICourse.link}
			>
				UX/UI Course Branding
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to={BlobLinks.SeatGeekScholarship.link}
			>
				Flatiron x SeatGeek Scholarship
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to={BlobLinks.ChaseSapphire.link}
			>
				Chase Sapphire Reserve
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to={BlobLinks.TheUprisingCreative.link}
			>
				The Uprising Creative
			</NavLink>
		</div>
		<div className={classes.menuRouteChunk}>
			<NavLink
				className={classes.menuLink}
				exact
				to={BlobLinks.MusicalRug.link}
			>
				Musical Rug
			</NavLink>
			<NavLink
				className={classes.menuLink}
				exact
				to={BlobLinks.HowToTampons.link}
			>
				How to put in a tampon
			</NavLink>
		</div>
		<div className={classes.menuRouteChunk}>
			<NavLink
				className={classes.menuLink}
				exact
				to="/about"
			>
				About
			</NavLink>
		</div>
	</>
)

export default injectSheet(styles)(MenuRoutes)
