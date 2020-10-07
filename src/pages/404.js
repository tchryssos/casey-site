import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import SubHeading from 'components/Typography/SubHeading'
import Image from 'components/Image'

import BlobBody from 'static/svg/404/404-body.svg'
import BlobEye from 'static/svg/404/404-eye.svg'

const useStyles = createUseStyles({
	'@keyframes spinRight': {
		'0%': { transform: 'translate(-20px, 0px) rotate(0deg)' },
		'100%': { transform: 'translate(-20px, 0px) rotate(360deg)' },
	},
	'@keyframes spinLeft': {
		'0%': { transform: 'translate(20px, 0px) rotate(0deg)' },
		'100%': { transform: 'translate(20px, 0px) rotate(-360deg)' },
	},
	button: {
		backgroundColor: '#346c63',
		padding: 8,
		color: 'white',
		display: 'inline-flex',
		marginTop: 24,
		textDecoration: 'none',
		fontWeight: 600,
		'&:hover': {
			backgroundColor: '#4e7fff',
		},
	},
	cAligned: {
		textAlign: 'center',
	},
	blobBoy: {
		position: 'relative',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	blobBody: {
		width: 200,
	},
	blobEyeLeft: {
		position: 'absolute',
		width: 40,
		animation: '$spinRight 3s infinite linear',
	},
	blobEyeRight: {
		position: 'absolute',
		width: 40,
		animation: '$spinLeft 3s infinite linear',
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.cAligned}>
				<div className={classes.blobBoy}>
					<Image src={BlobBody} className={classes.blobBody} />
					<Image src={BlobEye} className={classes.blobEyeLeft} />
					<Image src={BlobEye} className={classes.blobEyeRight} />
				</div>
				<SubHeading>
					Sorry, we can&apos;t find that page.
				</SubHeading>
				<NavLink className={classes.button} to="/" exact>
					Back to Home
				</NavLink>
			</ContentBlock>
		</PageWrapper>
	)
}
