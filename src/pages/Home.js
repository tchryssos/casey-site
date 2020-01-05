import React, { useState } from 'react'
import injectSheet from 'react-jss'
import BlobLink from 'components/BlobLink'
import blobLinkData from 'constants/blobLinks'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	homeContainer: {
		display: 'flex',
		flexDirection: 'column',
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
		margin: '16px',
		maxHeight: '100vh',
		width: '100%',
	},
	blobNav: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		margin: 20,
	},
	filter: {
		marginRight: 10,
		marginLeft: 10,
		zIndex: 2000,
		cursor: 'pointer',
		'&:hover': {
			color: 'red',
		},
	},
	[MD_MIN_STRING]: {
		homeWrapper: {
			width: '50%',
		},
	},
}

const Home = ({ classes }) => {
	// const [category, setCategory] = useState(false)
	// const setCategoryGraphic = () => setCategory('graphic')
	// const setCategoryProduct = () => setCategory('product')

	const blobLinks = Object.keys(blobLinkData).map((key) => {
		const props = blobLinkData[key]
		return (
			<BlobLink {...props} key={key} />
		)
	})
	return (
		<div className={classes.homeContainer}>
			<div className={classes.blobNav}>
				{/* <button className={classes.filter}>Graphic Design</button>
				<p> | </p>
				<button className={classes.filter}>Product Design</button> */}
			</div>
			<div className={classes.homeWrapper}>
				{blobLinks}
			</div>
		</div>
	)
}

export default injectSheet(styles)(Home)
