import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import Body from 'components/Typography/Body'

const useStyles = createUseStyles({
	link: {
		color: 'white',
		display: 'block',
		padding: 8,
		'&:hover': {
			color: 'white',
		},
		'&:visited': {
			color: 'white',
		},
	},
	PageNav: {
		display: 'none',
		[MD_MIN_STRING]: {
			position: 'fixed',
			display: 'flex',
			justifyContent: 'space-between',
			bottom: 0,
			width: '100%',
			padding: 8,
			boxSizing: 'border-box',
			color: 'white',
			backgroundColor: '#0f2b41',
			zIndex: 100,
		},
	},
})

// START - PAGE NAV LINK - START
const PageNavLink = ({
	classes, currentIntersecting, link, altLink, text,
}) => (
	<a
		className={clsx(
			classes.link,
			{ [classes.sectionIntersected]: currentIntersecting === link || currentIntersecting === altLink },
		)}
		href={`#${link}`}
	>
		<Body>{text || `${link[0].toUpperCase()}${link.slice(1)}`}</Body>
	</a>
)
// END - PAGE NAV LINK - END

// START - PAGE NAV - START
const PageNav = ({ currentIntersecting, navLinkObjects }) => {
	const classes = useStyles()
	return (
		<div className={classes.PageNav}>
			{navLinkObjects.map(({ link, text, altLink }) => (
				<PageNavLink
					classes={classes}
					currentIntersecting={currentIntersecting}
					link={link}
					text={text}
					altLink={altLink}
				/>
			))}
		</div>
	)
}

export default PageNav
