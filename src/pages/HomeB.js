import React from 'react'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import ProjectSummary from 'components/ProjectSummary'

import TestBlob from 'static/images/HomeB/testblob.png'

const useStyles = createUseStyles({

})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<ProjectSummary
					heading="Men&apos;s Health Houston Website Redesign"
					body="Updating the branding and website design for a men&apos;s health clinic"
					tag="DESIGNLAB CASE STUDY"
					imageSrc={TestBlob}
					link=""
				/>
				<ProjectSummary
					heading="Flatiron School Marketing"
					body="Managing a creative team working on everything including out-of-home, video, organic and paid social"
					tag="Marketing Design Leadership"
					imageSrc={TestBlob}
					link=""
				/>
				<ProjectSummary
					heading="End to End App Design for a Gaming Tool"
					body="Building a tool for people playing games to track their ranking amongst friends"
					tag="DESIGNLAB CASE STUDY"
					imageSrc={TestBlob}
					link=""
				/>
				<ProjectSummary
					heading="ListenJay Quote Creation Feature"
					body="Adding a feature to a podcast discovery platform"
					tag="DESIGNLAB CASE STUDY"
					imageSrc={TestBlob}
					link=""
				/>
				<ProjectSummary
					heading="Ecommerce Website Design"
					body="DesignLab case study project focused on a clothing ecommerce site"
					tag="DesignLab Case Study"
					imageSrc={TestBlob}
					link=""
				/>
				<div>
					About Me
				</div>
			</ContentBlock>
		</PageWrapper>
	)
}
