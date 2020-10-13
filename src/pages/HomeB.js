import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

import blobLinkData from 'constants/blobLinks'

import { UX_TAG, BRAND_TAG, LEAD_TAG } from 'constants/tags'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import ProjectSummary from 'components/ProjectSummary'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import LogoCollection from 'components/LogoCollection'

import MensHealthDesciption from 'static/images/Descriptions/mhh_di-01.png'
import FISMDesciption from 'static/images/Descriptions/FIS_di.png'
import ELODesciption from 'static/images/Descriptions/ELO_di.png'
import LJUXADesciption from 'static/images/Descriptions/LJ_di.png'
import MirrorDescription from 'static/images/Descriptions/Mirror-di.png'
import PortfolioDescription from 'static/images/Descriptions/portfolio_di.png'
import ChaseDescription from 'static/images/ChaseSapphire/Chase_Card.png'

const useStyles = createUseStyles({
	'@keyframes wave': {
		'0%': { transform: 'translateX(0px)' },
		'50%': { transform: 'translateX(-50%)' },
		'100%': { transform: 'translateX(0px)' },
	},
	aboutMeHeader: {
		textAlign: 'center',
		backgroundColor: '#f7f7f7',
	},
	aboutLink: {
		textDecoration: 'none',
		borderBottom: '2px solid blue',
		color: 'blue',
	},
	aboutBody: {
		lineHeight: 1.75,
	},
	projectBlock: {
		backgroundColor: '#0f2b41',
		color: 'white',
	},
})

const HomeB = () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.aboutMeHeader}>
				<Heading>
					I am a product designer with an extensive background in brand and marketing&nbsp;design.
				</Heading>
				<Spacer />
				<Body className={classes.aboutBody}>
					Read more about me&nbsp;
					<NavLink className={classes.aboutLink} to="/about" exact>
						here
					</NavLink>
					&nbsp;and view my most recent work below
				</Body>
				<LogoCollection />
			</ContentBlock>
			<ContentBlock className={classes.projectBlock}>
				<ProjectSummary
					heading="Men&apos;s Health Houston Website Redesign"
					body="Updating the branding and website design for a men&apos;s health clinic"
					tag="DESIGNLAB CASE STUDY"
					imageSrc={MensHealthDesciption}
					link={blobLinkData.MensHealth.link}
				/>
				<ProjectSummary
					heading="Flatiron School Marketing"
					body="Managing a creative team working on everything including out-of-home, video, organic and paid social"
					tag="Marketing Design Leadership"
					imageSrc={FISMDesciption}
					link={blobLinkData.FISMarketing.link}
				/>
				<ProjectSummary
					heading="End to End App Design for a Gaming Tool"
					body="Building a tool for people playing games to track their ranking amongst friends"
					tag="DESIGNLAB CASE STUDY"
					imageSrc={ELODesciption}
					link={blobLinkData.ELO.link}
				/>
				<ProjectSummary
					heading="ListenJay Quote Creation Feature"
					body="Adding a feature to a podcast discovery platform"
					tag="DESIGNLAB CASE STUDY"
					imageSrc={LJUXADesciption}
					link={blobLinkData.ListenJay.link}
				/>
				<ProjectSummary
					heading="Ecommerce Website Design"
					body="DesignLab case study project focused on a clothing ecommerce site"
					tag="DesignLab Case Study"
					imageSrc={MirrorDescription}
					link="/mirror"
				/>
				<ProjectSummary
					heading="Chase Sapphire Reserve Social"
					body="Chase"
					tag=""
					imageSrc={ChaseDescription}
					link="/chase"
				/>
				<ProjectSummary
					heading="Portfolio Design"
					body="Portfolio"
					tag=""
					imageSrc={PortfolioDescription}
					link="/portfolio"
				/>
			</ContentBlock>
		</PageWrapper>
	)
}

export default HomeB
