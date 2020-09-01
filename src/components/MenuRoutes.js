import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import PageGatingContext from 'contexts/pageGating'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import blobLinkData from 'constants/blobLinks'
import orNull from 'util/orNull'

const useStyles = createUseStyles({
	menuLinkWrapper: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '16px',
	},
	menuLink: {
		color: 'white',
		marginTop: '16px',
		textDecoration: 'none',
		fontSize: '18px',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	[MD_MIN_STRING]: {
		menuLinkWrapper: {
			marginTop: '64px',
		},
		menuLink: {
			fontSize: '14px',
		},
	},
})

const MenuLink = ({ className, link, text }) => (
	<NavLink
		className={className}
		exact
		to={link}
	>
		{text}
	</NavLink>
)

const MenuLinks = ({ classes, isAltHome }) => (
	Object.keys(blobLinkData).map((key) => {
		const { link, altText, hideOnAltHome } = blobLinkData[key]
		return orNull(
			!(hideOnAltHome && isAltHome),
			<MenuLink
				className={classes.menuLink}
				link={link}
				text={altText}
				key={key}
			/>,
		)
	})
)

export default () => {
	const classes = useStyles()
	const { isAltHome } = useContext(PageGatingContext)
	return (
		<div className={classes.menuLinkWrapper}>
			<MenuLinks classes={classes} isAltHome={isAltHome} />
		</div>
	)
}

