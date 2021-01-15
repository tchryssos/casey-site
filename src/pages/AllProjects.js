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
import SubHeading from 'components/Typography/SubHeading'
import Heading from 'components/Typography/Heading'
import BlobLink from 'components/BlobLink'

import blobLinkData from 'constants/blobLinks'
import { darken, darkGray } from 'constants/styles/colors'

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
	bottomBorderTitle: {
		width: '100%',
		borderBottom: '2px solid #2b2b2b',
		display: 'flex',
		paddingBottom: 8,
	},
	caseStudyLink: {
		display: 'inline-block',
		marginTop: 16,
		color: darkGray,
		textDecoration: 'none',
		fontSize: 18,
		borderBottom: '2px solid transparent',
		'&:hover': {
			borderBottom: '2px solid blue',
			color: 'blue',
		},
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
			<ContentBlock>
				<div className={classes.bottomBorderTitle}>
					<SubHeading>Design Lab Case Studies</SubHeading>
				</div>
				<NavLink className={classes.caseStudyLink} to="/elo-tracker">
					<b>Ladders:</b>
					&nbsp;End to end app design for a gaming leaderboard
				</NavLink>
				<NavLink className={classes.caseStudyLink} to="/listen-jay">
					<b>ListenJay:</b>
					&nbsp;Building a new feature to a podcast discovery platform
				</NavLink>
				<NavLink className={classes.caseStudyLink} to="/mirror">
					<b>Mirror:</b>
					&nbsp;Ecommerce Case Study
				</NavLink>
				<NavLink className={classes.caseStudyLink} to="/philz">
					<b>Philz Coffee App Analysis:</b>
					&nbsp;How would I do it differently?
				</NavLink>
			</ContentBlock>
		</div>
	)
}

export default AllProjects
