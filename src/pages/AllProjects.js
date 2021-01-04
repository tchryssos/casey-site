import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import ScrollContext from 'contexts/scroll'
import MenuContext from 'contexts/menu'

import ContentBlock from 'components/ContentBlock'
import Spacer from 'components/Spacer'
import Body from 'components/Typography/Body'
import Heading from 'components/Typography/Heading'
import BlobLink from 'components/BlobLink'

import blobLinkData from 'constants/blobLinks'
import { darken } from 'constants/styles/colors'

const useStyles = createUseStyles({
	homeContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#e5E5E5',
		position: 'relative',
	},
	menuDarken: {
		position: 'fixed',
		display: 'none',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		backgroundColor: darken,
		zIndex: 9,
	},
	visibleDarken: {
		display: 'block',
	},
	homeWrapper: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		margin: '16px',
		width: '100%',
		overflowX: 'hidden',
	},
	projectHeader: {
		textAlign: 'center',
	},
	inlineLink: {
		textDecoration: 'none',
		borderBottom: '2px solid blue',
		color: 'blue',
	},
	[MD_MIN_STRING]: {
		homeWrapper: {
			width: '50%',
			overflowX: 'initial',
		},
	},
})

const AllProjects = () => {
	const classes = useStyles()
	const { getScroll } = useContext(ScrollContext)
	const { isMenuOpen } = useContext(MenuContext)
	const [apScroll, setApScroll] = useState(0)

	// Similar logic to the scroll prevention in
	// PageWrapper, but with some additional steps
	// due to the quirks of the blob list
	useEffect(() => {
		const scrollEl = getScroll()
		if (isMenuOpen) {
			const windowScroll = window.scrollY
			setApScroll(windowScroll)
			scrollEl.style.position = 'fixed'
			scrollEl.style.top = `-${windowScroll}px`
		} else {
			scrollEl.style.position = 'relative'
			scrollEl.style.top = ''
			scrollEl.scroll(0, apScroll)
		}
	}, [isMenuOpen])

	const blobLinks = Object.keys(blobLinkData).map((key) => {
		const props = blobLinkData[key]
		return <BlobLink {...props} key={key} />
	})
	return (
		<div className={classes.homeContainer}>
			<div
				className={clsx(classes.menuDarken, {
					[classes.visibleDarken]: isMenuOpen,
				})}
			/>
			<ContentBlock className={classes.projectHeader}>
				<Heading>All Projects</Heading>
				<Spacer />
				<Body>
					Look through all of my work below or&nbsp;
					<NavLink className={classes.inlineLink} to="/">
						return home
					</NavLink>
					&nbsp;to see a curated list of projects
				</Body>
			</ContentBlock>
			<div className={classes.homeWrapper}>{blobLinks}</div>
		</div>
	)
}

export default AllProjects
