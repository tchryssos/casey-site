import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'


import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'

const useStyles = createUseStyles({
	projectPreviewContainer: {
		paddingTop: 20,
		width: '45%',
		textDecoration: 'none',
		color: '#2b2b2b',
		'&:hover $absolute': {
			display: 'flex',
		},
		'&:hover $projectTitle': {
			textDecoration: 'underline',
		},
	},
	projectTitle: {

	},
	relative: {
		position: 'relative',
	},
	absolute: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		display: 'none',
		justifyContent: 'center',
		alignItems: 'center',
	},
	hoverImage: {
		width: '100%',
	},
	uppercase: {
		textTransform: 'uppercase',
	},
})

export default ({
	tags, title, bgImage, hoverImage, link,
}) => {
	const classes = useStyles()
	return (
		<NavLink className={classes.projectPreviewContainer} to={link}>
			<div className={classes.relative}>
				<div className={classes.absolute}>
					<Image src={hoverImage} className={classes.hoverImage} />
				</div>
				<Image src={bgImage} size="full" />
			</div>
			<Spacer />
			<SubHeading className={classes.projectTitle}>
				{title}
			</SubHeading>
			<Spacer height={0.5} />
			<Body className={classes.uppercase}>
				{tags}
			</Body>
		</NavLink>
	)
}
