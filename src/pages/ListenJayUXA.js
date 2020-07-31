import React from 'react'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import Spacer from 'components/Spacer'
import ItemGrid from 'components/ItemGrid'

import Interviews from 'static/images/ListenJayUXA/userInterviews-01.png'
import Persona from 'static/images/ListenJayUXA/podcastpete.png'
import UserFlow from 'static/images/ListenJayUXA/userflow.png'
import Wireframes from 'static/images/ListenJayUXA/wireframes.png'

const useStyles = createUseStyles({
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<Heading>
					ListenJay PodQuote Feature
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Understanding the podcaster&apos;s needs
				</Heading>
				<Spacer />
				<SubHeading>
					Conducting User Interviews
				</SubHeading>
				<Spacer />
				<Body> I interviewed a few podcasters with relatively new or small podcasts about how they were getting their shows off the ground.</Body>
				<Image src={Interviews} size="full" />
				<Spacer height={2} />
				<SubHeading>
					Defining the persona for this feature
				</SubHeading>
				<Spacer />
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Image src={Persona} />
						<Heading>Podcast Pete</Heading>
						<Body>THE INDEPENDENT PODCASTER</Body>
						<Body>Male | 30 yrs old | New York</Body>
					</div>
					<div className={classes.half}>
						<SubHeading>Goals</SubHeading>
						<ul>
							<li>Stand out among the crowd of podcasts</li>
							<li>Get his show off the ground</li>
						</ul>
						<Spacer />
						<SubHeading>Frustrations</SubHeading>
						<ul>
							<li>Experiencing a harsh learning curve on new tools</li>
							<li>Reaching audiences outside of his existing network</li>
						</ul>
						<Spacer />
						<SubHeading>Motivations</SubHeading>
						<ul>
							<li># of listens</li>
							<li>Low cost</li>
						</ul>
					</div>
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Building the feature
				</Heading>
				<Spacer />
				<SubHeading>
					Creating a user flow
				</SubHeading>
				<Image src={UserFlow} size="full" />
				<SubHeading>
					Wireframes
				</SubHeading>
				<Image src={Wireframes} size="full" />
				<Body> ^ replace </Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Branding/Visual Designs
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Testing
				</Heading>
			</ContentBlock>
		</PageWrapper>
	)
}
