import React from 'react'
import { createUseStyles } from 'react-jss'
import BlobLink from 'components/BlobLink'
import blobLinkData from 'constants/blobLinks'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { NavLink } from 'react-router-dom'

import Heading from 'components/Typography/Heading'
import ContentBlock from 'components/ContentBlock'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import LogoCollection from 'components/LogoCollection'
import Image from 'components/Image'

import Wave from 'static/svg/misc/wave_2.svg'

const useStyles = createUseStyles({
	'@keyframes wave': {
		'0%': { transform: 'translateX(0px)' },
		'50%': { transform: 'translateX(-50%)' },
		'100%': { transform: 'translateX(0px)' },
	},
	homeContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#e5E5E5',
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
	aboutMeHeader: {
		textAlign: 'center',
		backgroundColor: '#f7f7f7',
	},
	aboutLink: {
		textDecoration: 'none',
		borderBottom: '2px solid blue',
		color: 'blue',
	},
	aboutBody: {
		lineHeight: 1.75,
	},
	waveWrapper: {
		width: '100%',
		backgroundColor: '#f7f7f7',
		padding: 0,
		margin: 0,
		overflow: 'hidden',
		display: 'block',
		marginBottom: 48,
	},
	waveImage: {
		width: '200%',
		animation: '$wave 30s infinite',
		margin: 0,
		padding: 0,
		display: 'block',
		transform: 'translateY(1px)',
		// @TODO figure out why theres a 1 pixel line below image
	},
	[MD_MIN_STRING]: {
		homeWrapper: {
			width: '50%',
			overflowX: 'initial',
		},
	},
})

export default () => {
	const classes = useStyles()

	const blobLinks = Object.keys(blobLinkData).map((key) => {
		const props = blobLinkData[key]
		return (
			<BlobLink {...props} key={key} />
		)
	})
	return (
		<div className={classes.homeContainer}>
			<ContentBlock className={classes.aboutMeHeader}>
				<Heading>
					Designer balancing personality and&nbsp;utility
				</Heading>
				<Spacer />
				<Body className={classes.aboutBody}>
					I am a designer focused on UX/UI, Brand and Design Leadership. Read more about me&nbsp;
					<NavLink className={classes.aboutLink} to="/about" exact>
						here
					</NavLink>
					&nbsp;and view my most recent work below.
				</Body>
				<LogoCollection />
			</ContentBlock>
			<div className={classes.waveWrapper}>
				<Image src={Wave} className={classes.waveImage} />
			</div>
			<div className={classes.homeWrapper}>
				{blobLinks}
			</div>
		</div>
	)
}
