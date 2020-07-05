import React, { useEffect, useRef, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import {
	MD_MIN_STRING, MD_MIN_VALUE,
} from 'constants/styles/breakpoints'
import ScrollContext from 'contexts/scroll'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import SubHeading from 'components/Typography/SubHeading'
import VideoPlayer from 'components/VideoPlayer'
import ItemGrid from 'components/ItemGrid'
import Note from 'components/Typography/Note'


import HeaderImage from 'static/images/ListenJay/LJ-HeaderImage.png'
import LJBranding from 'static/images/ListenJay/LJ-Brand.png'
import Wires1 from 'static/images/ListenJay/ITERATION-1.png'
import Wires2 from 'static/images/ListenJay/ITERATION-2.png'
import Wires3 from 'static/images/ListenJay/ITERATION-3.png'
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
	third: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: '30%',
			marginBottom: 0,
		},
	},
	thirdImage: {
		width: '60%',
		marginLeft: '20%',
		[MD_MIN_STRING]: {
			width: '100%',
			marginLeft: 0,
		},
	},
	WireframeDescription: {
		[MD_MIN_STRING]: {
			height: 150,
		},
	},
	scrollTextPadding: {
		[MD_MIN_STRING]: {
			paddingTop: 100,
			transform: 'translateY(-100px)',
		},
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
	const { scrollRef } = useContext(ScrollContext)
	const scrollZone = scrollRef.current
	const scrollListener = () => {
		if (window.innerWidth >= MD_MIN_VALUE) {
			const scrollOffset = scrollZone.scrollTop - scrollingContainer.current.offsetTop
			const containerHeight = scrollingContainer.current.offsetHeight
			const textHeight = scrollingTextContainer.current.offsetHeight
			if (scrollOffset >= -100 && scrollOffset <= containerHeight - textHeight) {
				scrollingTextContainer.current.style.transform = `translateY(${scrollOffset}px)`
			}
		} else {
			scrollingTextContainer.current.style.transform = 'translateY(0px)'
		}
	}
	useEffect(() => {
		if (window.innerWidth >= MD_MIN_VALUE && scrollZone) {
			scrollZone.addEventListener('scroll', scrollListener)
		}
		return () => scrollZone.removeEventListener('scroll', scrollListener)
	}, [scrollZone])
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
							The majority of ListenJay&apos;s current users land on the site after clicking a link on social media. These social posts take them directly to the podcast episode&apos;s page so that is the page we decided to focus on first.
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
				<ItemGrid stackedOnMobile startAligned>
					<div className={classes.third}>
						<div className={classes.WireframeDescription}>
							<SubHeading>
								Iteration 1
							</SubHeading>
							<Spacer />
							<Note>
								Keeps most of the functionality but creates more of a heirarchy and removes the repetitive CTAs.
							</Note>
						</div>
						<Image className={classes.thirdImage} size="full" src={Wires1} />
					</div>
					<div className={classes.third}>
						<div className={classes.WireframeDescription}>
							<SubHeading>
								Iteration 2
							</SubHeading>
							<Spacer />
							<Note>
								Makes it apparent that users can share a quote or piece from the transcript. Adds in discovery feature for other episodes.
							</Note>
						</div>
						<Image className={classes.thirdImage} size="full" src={Wires2} />
					</div>
					<div className={classes.third}>
						<div className={classes.WireframeDescription}>
							<SubHeading>
								Iteration 3
							</SubHeading>
							<Spacer />
							<Note>
								Condenses the episode information to bring the transcript and main CTA up.
							</Note>
						</div>
						<Image className={classes.thirdImage} size="full" src={Wires3} />
					</div>
				</ItemGrid>
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
								Bringing it all together
							</Heading>
							<Spacer />
							<SubHeading>
								Final UI Designs
							</SubHeading>
							<Spacer />
							<Body>
								For the final UI designs, I used the third iteration of the wireframes as a jumping off point. Combined with the new branding, this created a v2 of ListenJay&apos;s podcast episode page that I believe will work better for new users coming from social and also show off ListenJay as a brand.
							</Body>
						</div>
						<Image src={UIMock} className={classes.half} />
					</ItemGrid>
				</div>
				<Spacer height={3} />
				<SubHeading>
					Prototyping an onboarding flow for listeners
				</SubHeading>
				<Spacer />
				<Body>
					ListenJay&apos;s main differentiator is its ability to create a share link that drives to one specific quote in a podcast. Because this is hard to understand from the player page, I created an onboarding flow to help users understand the capabilities better.
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/428292732?loop=1"
					title="Prototype Animation"
					aspectRatio="1:1"
				/>
			</ContentBlock>
		</PageWrapper>
	)
}
