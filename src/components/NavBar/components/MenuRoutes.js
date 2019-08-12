import React from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { black } from 'constants/styles/colors'
import blobLinkData from 'constants/blobLinks'

const styles = {
	menuLinkWrapper: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '16px',
	},
	menuLink: {
		color: black,
		marginTop: '16px',
		'&:first-of-type': {
			marginTop: 0,
		},
	},
	[MD_MIN_STRING]: {
		menuLinkWrapper: {
			marginTop: '64px',
		},
	},
}

const MenuLink = ({ className, link, text }) => (
	<NavLink
		className={className}
		exact
		to={link}
	>
		{text}
	</NavLink>
)

const renderMenuLinks = classes => (
	Object.keys(blobLinkData).map((key) => {
		const { link, altText } = blobLinkData[key]
		return (
			<MenuLink
				className={classes.menuLink}
				link={link}
				text={altText}
			/>
		)
	})
)

const MenuRoutes = ({ classes }) => (
	<div className={classes.menuLinkWrapper}>
		{renderMenuLinks(classes)}
		<MenuLink
			className={classes.menuLink}
			link="/about"
			text="About"
		/>
	</div>
)

export default injectSheet(styles)(MenuRoutes)
