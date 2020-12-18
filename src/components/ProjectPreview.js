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
			display: 'block',
		},
		'&:hover $projectTitle': {
			textDecoration: 'underline',
		},
	},
	relative: {
		position: 'relative',
	},
	absolute: {
		position: 'absolute',
		width: '80%',
		display: 'none',
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
				<Image src={hoverImage} className={classes.absolute} />
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
