import React from 'react'
import { createUseStyles } from 'react-jss'

import { NavLink } from 'react-router-dom'

import resumePdf from 'static/files/resume.pdf'

const useStyles = createUseStyles({
	footerWrapper: {
		backgroundColor: '#2b2b2b',
		padding: 60,
		margin: 0,
	},
	bigCasey: {
		color: '#595959',
		fontWeight: 700,
		fontSize: 400,
		textAlign: 'center',
	},
	footerLinkContainer: {
		width: '33%',
	},
	footerLink: {
		color: 'white',
		fontSize: 16,
		marginBottom: 8,
		display: 'block',
	},
	footerFlexWrapper: {
		display: 'flex',
	},
})

export default () => {
	const classes = useStyles()
	return (
		<div className={classes.footerWrapper}>
			<p className={classes.bigCasey}>CASEY</p>
			<div className={classes.footerFlexWrapper}>
				<div className={classes.footerLinkContainer}>
					<NavLink className={classes.footerLink} to="/about" exact>About Me</NavLink>
					<NavLink className={classes.footerLink} to="" exact>All Projects</NavLink>
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