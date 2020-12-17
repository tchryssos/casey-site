import React from 'react'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { createUseStyles } from 'react-jss'


import ContentBlock from 'components/ContentBlock'
import Spacer from 'components/Spacer'
import Body from 'components/Typography/Body'
import Heading from 'components/Typography/Heading'

import BlobLink from 'components/BlobLink'
import blobLinkData from 'constants/blobLinks'


const useStyles = createUseStyles({
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
	homeContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#e5E5E5',
	},
	ProjectHeader: {
		textAlign: 'center',
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
			<ContentBlock className={classes.ProjectHeader}>
				<Heading>
					All Projects
				</Heading>
				<Spacer />
				<Body>
					placeholder body
				</Body>
			</ContentBlock>
			<div className={classes.homeWrapper}>
				{blobLinks}
			</div>
			{/* <ContentBlock>
				<SubHeading>
					DesignLab Case Studies
				</SubHeading>
			</ContentBlock> */}
		</div>
	)
}
