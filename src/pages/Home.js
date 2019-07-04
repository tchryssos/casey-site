import React from 'react'
import injectSheet from 'react-jss'
import BlobLink from 'components/BlobLink'
import blobLinkData from 'constants/blobLinks'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	homeContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	homeWrapper: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		margin: '1rem',
		maxHeight: '100vh',
		width: '100%',
	},
	[MD_MIN_STRING]: {
		homeWrapper: {
			width: '50%',
		},
	},
}

const Home = ({ classes }) => {
	const blobLinks = Object.keys(blobLinkData).map(key => (
		<BlobLink svgFileName={key} key={key} />
	))

	return (
		<div className={classes.homeContainer}>
			<div className={classes.homeWrapper}>
				{blobLinks}
			</div>
		</div>
	)
}

export default injectSheet(styles)(Home)
