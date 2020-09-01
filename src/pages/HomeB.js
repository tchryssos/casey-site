import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

import blobLinkData from 'constants/blobLinks'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import ProjectSummary from 'components/ProjectSummary'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'

import MHHBlob from 'static/images/HomeB/sq-01.png'
import FISBlob from 'static/images/HomeB/sq-02.png'
import ELOBlob from 'static/images/HomeB/sq-03.png'
import ListenJayBlob from 'static/images/HomeB/sq-04.png'
import MirrorBlob from 'static/images/HomeB/sq-05.png'

const useStyles = createUseStyles({
	aboutMeHeader: {
		textAlign: 'center',
		backgroundColor: 'white',
	},
	aboutLink: {
		textDecoration: 'none',
		borderBottom: '2px solid blue',
		color: 'blue',
	},
	aboutBody: {
		lineHeight: 1.75,
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
			</ContentBlock>
			<ContentBlock>
				<ProjectSummary
					heading="Men&apos;s Health Houston Website Redesign"
					body="Updating the branding and website design for a men&apos;s health clinic"
					tag="DESIGNLAB CASE STUDY"
					imageSrc={MHHBlob}
					link={blobLinkData.MensHealth.link}
				/>
				<ProjectSummary
					heading="Flatiron School Marketing"
					body="Managing a creative team working on everything including out-of-home, video, organic and paid social"
					tag="Marketing Design Leadership"
					imageSrc={FISBlob}
					link={blobLinkData.FISMarketing.link}
				/>
				<ProjectSummary
					heading="End to End App Design for a Gaming Tool"
					body="Building a tool for people playing games to track their ranking amongst friends"
					tag="DESIGNLAB CASE STUDY"
					imageSrc={ELOBlob}
					link={blobLinkData.ELO.link}
				/>
				<ProjectSummary
					heading="ListenJay Quote Creation Feature"
					body="Adding a feature to a podcast discovery platform"
					tag="DESIGNLAB CASE STUDY"
					imageSrc={ListenJayBlob}
					link={blobLinkData.ListenJay.link}
				/>
				<ProjectSummary
					heading="Ecommerce Website Design"
					body="DesignLab case study project focused on a clothing ecommerce site"
					tag="DesignLab Case Study"
					imageSrc={MirrorBlob}
					link="/mirror"
				/>
			</ContentBlock>
		</PageWrapper>
	)
}

export default HomeB
