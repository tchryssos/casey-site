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
import PageNav from 'components/PageNav'


import Interviews from 'static/images/ListenJayUXA/userInterviews-01.png'
import Persona from 'static/images/ListenJayUXA/podcastpete_circle.png'
import UserFlow from 'static/images/ListenJayUXA/userflow-01.png'
import Wireframe00 from 'static/images/ListenJayUXA/wireframe-00.png'
import Wireframe01 from 'static/images/ListenJayUXA/wireframe-01.png'
import WireSketch from 'static/images/ListenJayUXA/wiresketch-01.png'
import HifiDesign from 'static/images/ListenJayUXA/Hifi_Design.png'
import HifiTranscript from 'static/images/ListenJayUXA/Hifi_Transcript.png'

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
	twoThirds: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: '60%',
			marginBottom: 0,
		},
	},
	blueBall: {
		flexShrink: 0,
		borderRadius: 100,
		backgroundColor: '#4e7fff',
		width: 20,
		height: 20,
		marginRight: 8,
	},
	yellowBall: {
		flexShrink: 0,
		borderRadius: 100,
		backgroundColor: '#e5892e',
		width: 20,
		height: 20,
		marginRight: 8,
	},
	darkBlueBall: {
		flexShrink: 0,
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
	sectionLabel: {
		backgroundColor: '#4e7fff',
		padding: 8,
		color: 'white',
		whiteSpace: 'nowrap',
		textAlign: 'center',
	},
	brandColorBlock: {
		backgroundColor: '#FFEAC8',
	},
})

export default () => {
	const classes = useStyles()
	const navLinks = [
		{ link: 'brief' },
		{ link: 'discover' },
		{ link: 'define' },
		{ link: 'design' },
		{ link: 'test' },
		{ link: 'learnings' },
	]
	return (
		<PageWrapper>
			<PageNav
				navLinkObjects={navLinks}
			/>
			{/* eslint-disable jsx-a11y/anchor-is-valid */}
			{/* eslint-disable jsx-a11y/anchor-has-content */}
			<a name="brief" />
			<ContentBlock className={classes.brandColorBlock}>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Heading>
							ListenJay helps people discover new podcasts
						</Heading>
						<Spacer />
						<SubHeading>Role: Product Designer</SubHeading>
					</div>
					<div className={classes.half}>
						<VideoPlayer
							src="https://player.vimeo.com/video/444995903?autoplay=1?loop=1"
							title="Prototype Animation"
							aspectRatio="1:1"
						/>
					</div>
				</ItemGrid>
				<Spacer />
				<Body>
					ListenJay lets users share a link to a specific quote from any podcast. They have gotten a lot of engagement from sharing these quotes on their own social channels. Now they want to create a tool that will allow podcasters to take quotes straight from their transcript and turn them into sharable graphics.
				</Body>
			</ContentBlock>
			<a name="discover" />
			<div className={classes.sectionLabel}>
				Discover
			</div>
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
								<SubHeading>Transcribing is useful to people who want to share quotes and have increased accessibility but it can be costly</SubHeading>
							</div>
						</div>
						<Spacer height={2} />
						<div>
							<div className={classes.ballName}>
								<div className={classes.yellowBall} />
								<SubHeading>Many podcasters depend on their own social channels and distribution platforms to promote their shows</SubHeading>
							</div>
						</div>
						<Spacer height={2} />
						<div>
							<div className={classes.ballName}>
								<div className={classes.darkBlueBall} />
								<SubHeading>Podcasters are wearing many hats so tools need to be easy to learn</SubHeading>
							</div>
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
			<a name="define" />
			<div className={classes.sectionLabel}>
				Define
			</div>
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
			<a name="design" />
			<div className={classes.sectionLabel}>
				DESIGN
			</div>
			<ContentBlock className={classes.brandColorBlock}>
				<Heading>
					Visual Designs
				</Heading>
				<Spacer />
				<Body>I updated the branding for ListenJay as part of another project for them and used that new design system to build out these pages.</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/444319554?loop=1"
					title="Prototype Animation"
					aspectRatio="16:9"
				/>
				<Image src={HifiTranscript} size="full" />
				<Image src={HifiDesign} size="full" />
			</ContentBlock>
			<a name="test" />
			<div className={classes.sectionLabel}>
				Test
			</div>
			<ContentBlock>
				<Heading>
					Validation Testing
				</Heading>
				<Spacer />
				<Body>I tested this prototype with a handful of partcicpants to gague the usabilty and also test the proof of concept.</Body>
				<Spacer />
				<SubHeading>Validation</SubHeading>
				<Body>
					All of the participants understood the product and were excited to use it.
				</Body>
				<Spacer />
				<SubHeading>Separating Tasks</SubHeading>
				<Body>For some participants, thinking about editing a transcript and creating graphics at the same time was too much. Some participants understood that they could highlight something in order to come back later but in order to make these tasks more separate, I adjusted the flow below.</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/444317718?loop=1"
					title="Prototype Animation"
					aspectRatio="16:9"
				/>
			</ContentBlock>
			<a name="learnings" />
			<div className={classes.sectionLabel}>
				Learnings
			</div>
			<ContentBlock className={classes.brandColorBlock}>
				<Heading>What I learned from this project</Heading>
				<Spacer />
				<SubHeading>Finding participants can be a challenge</SubHeading>
				<Body>
					Finding people to interview for niche products, like something built only for people who have podcasts, can be hard! For this project I reached out to multiple networks and a lot of strangers. Some were happy to help me!
				</Body>
				<Spacer />
				<SubHeading>User research can lead to great competitive research</SubHeading>
				<Body>
					I found that doing user research before/in tandem with competitive analysis allowed me to ask participants what tools they are using day to day and then take a closer look at those
				</Body>
				<Spacer />
				<SubHeading>Building for prototypes</SubHeading>
				<Body>
					The controls for the design editor on this project were complex to prototype for testing. I learned a lot about using overlays and hover states in Figma to create something that feels realistic.
				</Body>
			</ContentBlock>

		</PageWrapper>
	)
}
