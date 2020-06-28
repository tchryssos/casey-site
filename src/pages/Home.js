import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import BlobLink from 'components/BlobLink'
import BlobFilterBar from 'components/BlobFilterBar'
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
		backgroundColor: '#e8e8e8',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		margin: '16px',
		// maxHeight: '100vh',
		width: '100%',
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

	const blobLinks = Object.keys(blobLinkData).map((key) => {
		const props = blobLinkData[key]
		return (
			<BlobLink {...props} key={key} filter={filter} />
		)
	})
	return (
		<div className={classes.homeContainer}>
			<BlobFilterBar
				setFilter={setFilter}
				filter={filter}
			/>
			<div className={classes.homeWrapper}>
				{blobLinks}
			</div>
		</div>
	)
}
