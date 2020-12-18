import React from 'react'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { NavLink } from 'react-router-dom'

import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import ContentBlock from 'components/ContentBlock'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import LogoCollection from 'components/LogoCollection'
import PageWrapper from 'components/PageWrapper'
import Image from 'components/Image'

import Preview from 'static/svg/home/PortfolioPreview.svg'
import AnimalCrossing from 'static/images/About/animalcrossing.png'
import MensHealthDesciption from 'static/images/Descriptions/mhh_di-01.png'


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
	aboutMeHeader: {
		textAlign: 'center',
	},
	aboutLink: {
		textDecoration: 'none',
		borderBottom: '2px solid blue',
		color: 'blue',
	},
	aboutBody: {
		lineHeight: 1.75,
	},
	bottomBorderTitle: {
		width: '100%',
		borderBottom: '2px solid #2b2b2b',
		display: 'flex',
		justifyContent: 'space-between',
		paddingBottom: 8,
		alignItems: 'center',
	},
	Button: {
		backgroundColor: '#2b2b2b',
		padding: 8,
		color: 'white',
		display: 'inline-flex',
		textTransform: 'uppercase',
		textDecoration: 'none',
		'&:hover': {
			backgroundColor: '#4e7fff',
		},
	},
	flexContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	projectPreviewContainer: {
		paddingTop: 20,
		width: '45%',
		'&:hover $absolute': {
			display: 'block',
		},
		'&:hover $projectTitle': {
			textDecoration: 'underline',
		},
	},
	quoteWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	quoteBlock: {
		backgroundColor: '#f7f7f7',
		padding: '100px 10%',
	},
	relative: {
		position: 'relative',
	},
	absolute: {
		position: 'absolute',
		width: '80%',
		display: 'none',
	},
	[MD_MIN_STRING]: {
		homeWrapper: {
			width: '50%',
			overflowX: 'initial',
		},
	},
})

const Home = () => {
	const classes = useStyles()

	return (
		<PageWrapper>
			<ContentBlock className={classes.aboutMeHeader}>
				<Heading>Designer balancing personality and&nbsp;utility</Heading>
				<Spacer />
				<Body className={classes.aboutBody}>
					I am a designer focused on UX/UI, Brand and Design Leadership. Read
					more about me&nbsp;
					<NavLink className={classes.aboutLink} to="/about" exact>
						here
					</NavLink>
					&nbsp;and view my most recent work below.
				</Body>
				<LogoCollection />
			</ContentBlock>
			<ContentBlock>
				<div className={classes.bottomBorderTitle}>
					<SubHeading>
						Featured Projects
					</SubHeading>
					<NavLink className={classes.Button} to="/all-projects">
						<Body>All Projects</Body>
					</NavLink>
				</div>
				<div className={classes.flexContainer}>
					<div className={classes.projectPreviewContainer}>
						<div className={classes.relative}>
							<Image src={MensHealthDesciption} className={classes.absolute} />
							<Image src={Preview} size="full" />
						</div>
						<Spacer />
						<SubHeading>
							Men&apos;s Health Memorial Website Redesign
						</SubHeading>
						<Spacer height={0.5} />
						<Body>
							BRAND, UX/UI, LEADERSHIP
						</Body>
					</div>
					<div className={classes.projectPreviewContainer}>
						<div className={classes.relative}>
							<Image src={MensHealthDesciption} className={classes.absolute} />
							<Image src={Preview} size="full" />
						</div>
						<Spacer />
						<SubHeading className={classes.projectTitle}>
							Men&apos;s Health Memorial Website Redesign
						</SubHeading>
						<Spacer height={0.5} />
						<Body>
							BRAND, UX/UI, LEADERSHIP
						</Body>
					</div>
				</div>
			</ContentBlock>
			<ContentBlock className={classes.quoteBlock}>
				<div className={classes.quoteWrapper}>
					<Image src={AnimalCrossing} />
					<div>
						<Heading>
							“Her creative talent is equally matched by her well-organized way of operating.”
						</Heading>
						<Spacer />
						<Body>KIM MILLER, CMO</Body>
						<Spacer />
					</div>
				</div>
				<NavLink className={classes.Button} to="/about">
					<Body>About Me</Body>
				</NavLink>
			</ContentBlock>
		</PageWrapper>
	)
}

export default Home
