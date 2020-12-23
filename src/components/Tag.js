import React from 'react'
import { createUseStyles } from 'react-jss'

import { UX_TAG, BRAND_TAG, LEAD_TAG } from 'constants/tags'

const useStyles = createUseStyles({
	tagWrapper: {
		padding: 6,
		fontSize: 10,
		color: 'white',
		fontWeight: 500,
		textTransform: 'uppercase',
		margin: '4px 4px 4px 0',
		display: 'inline-flex',
	},
})

const Tag = ({ tag }) => {
	const classes = useStyles()
	let backgroundColor = ''
	switch (tag) {
		case BRAND_TAG:
			backgroundColor = '#bf271b'
			break
		case LEAD_TAG:
			backgroundColor = '#346c63'
			break
		case UX_TAG:
		default:
			backgroundColor = '#4e7fff'
	}
	return (
		<div style={{ backgroundColor }} className={classes.tagWrapper}>
			<p>{tag}</p>
		</div>
	)
}

export default Tag
