import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { allProjectsPath, aboutPath } from 'constants/navigation'

import resumePdf from 'static/files/resume.pdf'
import BigCasey from 'static/svg/misc/FOOTERNAME.svg'

const useStyles = createUseStyles({
	footerWrapper: {
		backgroundColor: '#2b2b2b',
		padding: 60,
		paddingBottom: 120,
		margin: 0,
		[MD_MIN_STRING]: {
			paddingBottom: 60,
		},
	},
	bigCasey: {
		color: '#595959',
		fontWeight: 700,
		fontSize: 400,
		textAlign: 'center',
	},
	footerLinkContainer: {
		width: '80%',
		margin: '0 10%',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		[MD_MIN_STRING]: {
			width: '33%',
			margin: '0',
			alignItems: 'flex-start',
		},
	},
	footerLink: {
		color: 'white',
		width: 'fit-content',
		fontSize: 16,
		marginBottom: 8,
		display: 'inline-block',
		'&:hover': {
			color: '#4e7fff',
		},
	},
	footerFlexWrapper: {
		display: 'flex',
		marginTop: 40,
		flexDirection: 'column',
		[MD_MIN_STRING]: {
			flexDirection: 'row',
		},
	},
})

const Footer = ({ className }) => {
	const classes = useStyles()
	return (
		<div className={clsx(classes.footerWrapper, className)}>
			<img src={BigCasey} alt="Casey" />
			<div className={classes.footerFlexWrapper}>
				<div className={classes.footerLinkContainer}>
					<NavLink className={classes.footerLink} to={aboutPath} exact>
						About Me
					</NavLink>
					<NavLink className={classes.footerLink} to={allProjectsPath} exact>
						All Projects
					</NavLink>
				</div>
				<div className={classes.footerLinkContainer}>
					<a
						href={resumePdf}
						target="_blank"
						rel="noopener noreferrer"
						className={classes.footerLink}
					>
						Download my resume
					</a>
					<a
						href="https://www.linkedin.com/in/caseyebradford/"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.footerLink}
					>
						Find me on LinkedIn
					</a>
				</div>
				<div className={classes.footerLinkContainer}>
					<a
						href="mailto: caseyebradford@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.footerLink}
					>
						Email me
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
