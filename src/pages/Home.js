import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import BlobLink from 'components/BlobLink'
import blobLinkData from 'constants/blobLinks'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
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
		fontSize: 18,
		appearance: 'none',
		border: 'none',
		paddingTop: 0,
		marginTop: 0,
		'&:hover': {
			textDecoration: 'underline',
		},
		'&:focus': {
			outline: 'none',
			textDecoration: 'underline',
		},
	},
	lineyboy: {
		fontSize: 18,
	},
	[MD_MIN_STRING]: {
		homeWrapper: {
			width: '50%',
		},
	},
})

export default () => {
	const classes = useStyles()
	const [filter, setFilter] = useState(null)
	const hideGraphic = () => setFilter('graphic')
	const hideProduct = () => setFilter('product')
	const hideNone = () => setFilter(null)

	const blobLinks = Object.keys(blobLinkData).map((key) => {
		const props = blobLinkData[key]
		return (
			<BlobLink {...props} key={key} filter={filter} />
		)
	})
	return (
		<div className={classes.homeContainer}>
			<div className={classes.blobNav}>
				<button onClick={hideNone} className={classes.filter}>All</button>
				<p className={classes.lineyboy}> | </p>
				<button onClick={hideProduct} className={classes.filter}>Graphic Design</button>
				<p className={classes.lineyboy}> | </p>
				<button onClick={hideGraphic} className={classes.filter}>Product Design</button>
			</div>
			<div className={classes.homeWrapper}>
				{blobLinks}
			</div>
		</div>
	)
}
