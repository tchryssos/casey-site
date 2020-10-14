import React from 'react'
import { NavLink } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import Spacer from 'components/Spacer'

const useStyles = createUseStyles({
	projectLink: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		paddingBottom: 48,
		[MD_MIN_STRING]: {
			flexDirection: 'row',
		},
	},
	projectLinkTypography: {
		paddingTop: 24,
		width: '100%',
		textAlign: 'center',
		[MD_MIN_STRING]: {
			textAlign: 'left',
			paddingLeft: 32,
			width: '70%',
		},
	},
	projectLinkImage: {
		width: '70%',
		[MD_MIN_STRING]: {
			width: '30%',
		},
	},
	uppercase: {
		textTransform: 'uppercase',
	},
	viewButton: {
		backgroundColor: '#346c63',
		padding: 8,
		color: 'white',
		display: 'inline-flex',
		'&:hover': {
			backgroundColor: '#4e7fff',
		},
	},
	link: {
		textDecoration: 'none',
	},
})

export default ({
	heading, body, imageSrc, link,
}) => {
	const classes = useStyles()
	return (
		<div>
			<div className={classes.projectLink}>
				<Image size="full" src={imageSrc} className={classes.projectLinkImage} />
				<div className={classes.projectLinkTypography}>
					<Heading>
						{heading}
					</Heading>
					<Body>
						{body}
					</Body>
					<Spacer />
					<NavLink to={link} exact className={classes.link}>
						<div className={classes.viewButton}>
							<Body><b>VIEW THE WORK</b></Body>
						</div>
					</NavLink>
				</div>
			</div>
		</div>
	)
}
