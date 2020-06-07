import React, { useEffect, useRef } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import SubHeading from 'components/Typography/SubHeading'
import VideoPlayer from 'components/VideoPlayer'
import ItemGrid from 'components/ItemGrid'


import HeaderImage from 'static/images/ListenJay/LJ-HeaderImage.png'
import LJBranding from 'static/images/ListenJay/LJ-Brand.png'
import Wires from 'static/images/ListenJay/LJ-Wires.png'
import Flow from 'static/images/ListenJay/LJ-flow-01.png'
import CTA from 'static/images/ListenJay/LJ-CTA.png'
import Modal from 'static/images/ListenJay/LJ-Modal.png'
import UIMock from 'static/images/ListenJay/testmock.png'

const useStyles = createUseStyles({
	wiresBlock: {
		backgroundColor: '#b4e0ff',
	},
	headerBlock: {
		backgroundColor: '#b4e0ff',
	},
	brandBlock: {
		backgroundColor: 'white',
	},
	scrollTextPadding: {
		paddingTop: 100,
		transform: 'translateY(-100px)',
	},
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
	const scrollingContainer = useRef()
	const scrollingTextContainer = useRef()
	const scrollListener = () => {
		const app = document.querySelector('#scrollApp')
		const scrollOffset = app.scrollTop - scrollingContainer.current.offsetTop
		const containerHeight = scrollingContainer.current.offsetHeight
		const textHeight = scrollingTextContainer.current.offsetHeight
		if (scrollOffset >= -100 && scrollOffset <= containerHeight - textHeight) {
			scrollingTextContainer.current.style.transform = `translateY(${scrollOffset}px)`
		}
	}
	useEffect(() => {
		const app = document.querySelector('#scrollApp')
		app.addEventListener('scroll', scrollListener)
		return () => app.removeEventListener('scroll', scrollListener)
	}, [])
	return (
		<PageWrapper>
			<ContentBlock className={classes.headerBlock}>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Heading>Listen Jay is a podcast discovery tool looking to improve its usability and branding</Heading>
						<Spacer />
						<SubHeading>Role: UX/UI Designer</SubHeading>
					</div>
					<Image src={HeaderImage} className={classes.half} />
				</ItemGrid>
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<SubHeading>Main Goal</SubHeading>
						<Heading>
							Improve the experience for new users coming to the site
						</Heading>
						<Spacer />
						<Body>
							The majority of ListenJay's current users land on the site after clicking a link on social media. These social posts take them directly to the podcast episode's page so that is the page we decided to focus on first.
						</Body>
					</div>
					<Image src={Flow} className={classes.half} />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock className={classes.brandBlock}>
				<Heading>
					Audit the existing page for usability
				</Heading>
				<Spacer height={2} />
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<SubHeading>
							Reduce the number of calls to action and rating systems
						</SubHeading>
						<Spacer />
						<Body>
							Currently above the player controls there are thumbs up and down buttons, a heart button, a place to comment and two separate CTAs to share. At the top of the page each podcast is also ranked by both stars and thumbs. all of these icons can be confusing and overwhelming to the user.
						</Body>
					</div>
					<Image src={CTA} className={classes.half} bordered />
				</ItemGrid>
				<Spacer height={2} />
				<SubHeading>
					Increase learnability
				</SubHeading>
				<Spacer />
				<Body>
					When users land on the podcast episode page, it is actually not a page at all. Users currently land on the home page with a modal open over most of the page that is displaying the podcast information. This makes it confusing for the user to know where they are in the site and how to navigate out to other content.
				</Body>
				<Image src={Modal} size="full" />
			</ContentBlock>
			<ContentBlock className={classes.wiresBlock}>
				<Heading>Iterate on Wireframes</Heading>
				<Spacer />
				<Body>
					In the first iteration, I focused on keeping most of the functionality but streamlining it. In the second iteration, I wanted to make it more obvious that users can share one part of the transcript and also make it easier to find other episodes. Finally, I decided to condense the player even more to bring the transcript higher up on the page, since that is the key differentiator for ListenJay. I also added a CTA to search for anything at the bottom of the page to keep users engaged.
				</Body>
				<Spacer />
				<Image src={Wires} size="full" />
			</ContentBlock>
			<ContentBlock className={classes.brandBlock}>
				<Heading>
					Elevate the brand
				</Heading>
				<Spacer />
				<Body>
					Using san serif fonts and a consistent type system modernized the ListenJay brand. Adding more vibrant colors to the UI helped created a visual heirarchy and also made the platform more inviting.
				</Body>
				<Spacer />
				<Image size="full" src={LJBranding} />
			</ContentBlock>
			<ContentBlock>
				<div ref={scrollingContainer}>
					<ItemGrid stackedOnMobile startAligned>
						<div
							ref={scrollingTextContainer}
							className={clsx(
								classes.half,
								classes.scrollTextPadding,
							)}
						>
							<Heading>
								Polishing / Bringing it all together
							</Heading>
							<Spacer />
							<SubHeading>
								Final UI Designs
							</SubHeading>
							<Spacer />
							<Body>
								ListenJay's main differentiator is its ability to create a share link that drives to one specific quote in a podcast. Because this is hard to understand from the player page, I created an onboarding flow to help users understand the capabilities.
							</Body>
						</div>
						<Image src={UIMock} className={classes.half} />
					</ItemGrid>
				</div>
				<Spacer height={3} />
				<SubHeading>
					Create Onboarding flow to explain transcript
				</SubHeading>
				<Spacer />
				<Body>
					ListenJay's main differentiator is its ability to create a share link that drives to one specific quote in a podcast. Because this is hard to understand from the player page, I created an onboarding flow to help users understand the capabilities.
				</Body>
				<Heading>
					Update this video
				</Heading>
				<VideoPlayer
					src="https://player.vimeo.com/video/390219313?loop=1"
					title="Musical rug demo"
					aspectRatio="1:1"
				/>
			</ContentBlock>
		</PageWrapper>
	)
}
