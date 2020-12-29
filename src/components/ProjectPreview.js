import React from 'react'
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
		'&:hover $absolute': {
			transform: 'rotate(30deg)',
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
		transition: 'transform 1s',
	},
	hoverImage: {
		width: 200,
	},
	uppercase: {
		textTransform: 'uppercase',
	},
})

const ProjectPreview = ({ tags, title, bgImage, hoverImage, link }) => {
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
			<SubHeading className={classes.projectTitle}>{title}</SubHeading>
			<Spacer height={0.5} />
			<Body className={classes.uppercase}>{tags}</Body>
		</NavLink>
	)
}

export default ProjectPreview
