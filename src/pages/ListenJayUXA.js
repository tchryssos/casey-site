import React from 'react'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import clsx from 'clsx'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import Spacer from 'components/Spacer'
import ItemGrid from 'components/ItemGrid'
import VideoPlayer from 'components/VideoPlayer'


import Interviews from 'static/images/ListenJayUXA/userInterviews-01.png'
import Persona from 'static/images/ListenJayUXA/podcastpete_circle.png'
import UserFlow from 'static/images/ListenJayUXA/userflow-01.png'
import Wireframe00 from 'static/images/ListenJayUXA/wireframe-00.png'
import Wireframe01 from 'static/images/ListenJayUXA/wireframe-01.png'
import WireSketch from 'static/images/ListenJayUXA/wiresketch-01.png'

const useStyles = createUseStyles({
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
	third: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: '30%',
			marginBottom: 0,
		},
	},
	twoThird: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: '60%',
			marginBottom: 0,
		},
	},
	blueBall: {
		borderRadius: 100,
		backgroundColor: '#4e7fff',
		width: 20,
		height: 20,
		marginRight: 8,
	},
	yellowBall: {
		borderRadius: 100,
		backgroundColor: '#e5892e',
		width: 20,
		height: 20,
		marginRight: 8,
	},
	greenBall: {
		borderRadius: 100,
		backgroundColor: '#0f2b41',
		width: 20,
		height: 20,
		marginRight: 8,
	},
	ballName: {
		display: 'flex',
		alignItems: 'center',
	},
	centered: {
		textAlign: 'center',
	},
	wiresBlock: {
		backgroundColor: '#b4e0ff',
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
				<ItemGrid>
					<div className={classes.third}>
						<Image src={Interviews} size="full" />
					</div>
					<div className={classes.twoThirds}>
						<div>
							<div className={classes.ballName}>
								<div className={classes.blueBall} />
								<SubHeading>Pete</SubHeading>
							</div>
							<Body>
								<b>Biggest Obstacle:</b>
								&nbsp;Writing copy that sounds genuine
							</Body>
							<Body>
								<b>Promotion Plan:</b>
								&nbsp;Through his own platform as an artist
							</Body>
							<Body>
								<b>Biggest Win:</b>
								&nbsp;Distribution platforms and Apple podcast rankings
							</Body>
						</div>
						<Spacer />
						<div>
							<div className={classes.ballName}>
								<div className={classes.yellowBall} />
								<SubHeading>Sean</SubHeading>
							</div>
							<Body>
								<b>Biggest Obstacle:</b>
								&nbsp;Learning curve on new tools
							</Body>
							<Body>
								<b>Promotion Plan:</b>
								&nbsp;Shares quotes on personal social channels
							</Body>
							<Body>
								<b>Biggest Win:</b>
								&nbsp;Using Anchor as an all-in-one platform
							</Body>
						</div>
						<Spacer />
						<div>
							<div className={classes.ballName}>
								<div className={classes.greenBall} />
								<SubHeading>Brandon</SubHeading>
							</div>
							<Body>
								<b>Biggest Obstacle:</b>
								&nbsp;Standing out against the crowd
							</Body>
							<Body>
								<b>Promotion Plan:</b>
								&nbsp;Posting organically in relative interest groups
							</Body>
							<Body>
								<b>Biggest Win:</b>
								&nbsp;Boosting social posts did not increase listen
							</Body>
						</div>
					</div>
				</ItemGrid>
				<Spacer height={4} />
				<SubHeading>
					Defining the persona for this feature
				</SubHeading>
				<Spacer />
				<ItemGrid stackedOnMobile>
					<div
						className={clsx(
							classes.half,
							classes.centered,
						)}
					>
						<Image src={Persona} size="full" />
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
			<ContentBlock className={classes.wiresBlock}>
				<Heading>
					Building the feature
				</Heading>
				<Spacer />
				<SubHeading>
					Creating a user flow
				</SubHeading>
				<Body>
					The focus of this project was on a user flow that started from the transcript editor page on ListenJay and ended with users downloading their graphics.
				</Body>
				<Image src={UserFlow} size="full" />
				<SubHeading>
					Wireframes
				</SubHeading>
				<Body>
					I used Figma to bring pen and paper sketched to life. I built out the wire frames using components that would be easy to adjust when adding visual design.
				</Body>
				<Image src={WireSketch} size="full" />
				<Image src={Wireframe00} size="full" />
				<Image src={Wireframe01} size="full" />
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Branding/Visual Designs
				</Heading>
				<VideoPlayer
					src="https://player.vimeo.com/video/444084058?loop=1"
					title="Prototype Animation"
					aspectRatio="1:1"
				/>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Testing
				</Heading>
			</ContentBlock>
		</PageWrapper>
	)
}
