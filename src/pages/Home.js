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
import ProjectPreview from 'components/ProjectPreview'

import Preview1 from 'static/svg/home/ProjectPreview_1.svg'
import Preview2 from 'static/svg/home/ProjectPreview_2.svg'
import Preview3 from 'static/svg/home/ProjectPreview_3.svg'
import Preview4 from 'static/svg/home/ProjectPreview_4.svg'

import BlobGrey from 'static/svg/home/PreviewBlob_Grey.svg'
import BlobGreen from 'static/svg/home/PreviewBlob_Green.svg'
import BlobYellow from 'static/svg/home/PreviewBlob_Yellow.svg'
import BlobNavy from 'static/svg/home/PreviewBlob_Navy.svg'

import AnimalCrossing from 'static/images/About/animalcrossing.png'
import MensHealthDesciption from 'static/images/Descriptions/mhh_di-01.png'
import FISMDesciption from 'static/images/Descriptions/FIS_di.png'
import ELODesciption from 'static/images/Descriptions/ELO_di.png'

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
	quoteWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	quoteBlock: {
		backgroundColor: '#f7f7f7',
		padding: '100px 10%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	animalcrossing: {
		display: 'none',
		[MD_MIN_STRING]: {
			display: 'block',
		},
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
					<SubHeading>Featured Projects</SubHeading>
					<NavLink className={classes.Button} to="/all-projects">
						<Body>All Projects</Body>
					</NavLink>
				</div>
				<div className={classes.flexContainer}>
					<ProjectPreview
						tags="UXUI, Brand, leadership"
						title="Men's Health Memorial Responsive Website Redesign"
						bgImage={Preview1}
						hoverImage={MensHealthDesciption}
						blobImage={BlobGrey}
						link="/mens-health"
					/>
					<ProjectPreview
						tags="Brand, UXUI"
						title="Voice powered mental health assessment"
						bgImage={Preview3}
						hoverImage={MensHealthDesciption}
						link="/ellipsis-app"
					/>
					<ProjectPreview
						tags="Brand, UXUI"
						title="End to End Gaming App Design"
						bgImage={Preview2}
						hoverImage={ELODesciption}
						link="/elo-tracker"
					/>
					<ProjectPreview
						tags="Brand, leadership"
						title="Managing Design at Flatiron School"
						bgImage={Preview4}
						hoverImage={FISMDesciption}
						link="/flatiron-school-marketing"
					/>
				</div>
			</ContentBlock>
			<ContentBlock className={classes.quoteBlock}>
				<div className={classes.quoteWrapper}>
					<Image className={classes.animalcrossing} src={AnimalCrossing} />
					<div>
						<Heading>
							“Her creative talent is equally matched by her well-organized way
							of operating.”
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
