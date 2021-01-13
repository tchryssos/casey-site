import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'

const useStyles = createUseStyles({
	projectPreviewContainer: {
		paddingTop: 20,
		width: '100%',
		textDecoration: 'none',
		color: '#2b2b2b',
		'&:hover $hoverImage': {
			transform: 'translate(8px, -8px)',
		},
		'&:hover $blobImage': {
			transform: 'translate(-8px, 8px)',
		},
		'&:hover $projectTitle': {
			textDecoration: 'underline',
		},
		[MD_MIN_STRING]: {
			width: '45%',
		},
	},
	projectTitle: {},
	relative: {
		position: 'relative',
	},
	absolute: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	hoverImage: {
		width: 200,
		zIndex: 3,
		top: 0,
		left: 0,
		transition: 'transform 1s',
	},
	blobImage: {
		position: 'absolute',
		width: '100%',
		zIndex: 2,
		transition: 'transform 1s',
	},
	uppercase: {
		textTransform: 'uppercase',
	},
	background: {
		backgroundColor: '#ea9b41',
		width: '100%',
		// This vw height is estimated based on screen size / the resulting value of the projectPreviewContainer's 45% width.
		// In other words, I opened the inspector, saw how big this container ended up being, and divided that by the screen size to get the ratio I am using below
		height: '80vw',
		[MD_MIN_STRING]: {
			height: '27vw',
		},
	},
})

const ProjectPreview = ({
	tags,
	title,
	blobImage,
	hoverImage,
	link,
	backgroundColorClass,
}) => {
	const classes = useStyles()
	return (
		<NavLink className={classes.projectPreviewContainer} to={link}>
			<div className={classes.relative}>
				<div className={classes.absolute}>
					<Image src={hoverImage} className={classes.hoverImage} />
					<Image src={blobImage} className={classes.blobImage} />
				</div>
				<div className={clsx(classes.background, backgroundColorClass)} />
			</div>
			<Spacer />
			<SubHeading className={classes.projectTitle}>{title}</SubHeading>
			<Spacer height={0.5} />
			<Body className={classes.uppercase}>{tags}</Body>
		</NavLink>
	)
}

export default ProjectPreview
