import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import SubHeading from 'components/Typography/SubHeading'
import Image from 'components/Image'

import AnimalCrossing from 'static/images/About/animalcrossing.png'

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
	ACImage: {
		width: 200,
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.cAligned}>
				<Image src={AnimalCrossing} className={classes.ACImage} />
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
