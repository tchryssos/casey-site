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

const useStyles = createUseStyles({
	homeContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#efefef',
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
		marginBottom: 64,
	},
	aboutLink: {
		textDecoration: 'none',
		borderBottom: '2px solid blue',
		color: 'blue',
	},
	aboutBody: {
		lineHeight: 1.75,
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
			<div className={classes.homeWrapper}>
				{blobLinks}
			</div>
		</div>
	)
}
