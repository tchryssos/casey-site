import React from 'react'
import { createUseStyles } from 'react-jss'

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

import ResultsPod from 'static/images/ListenJay/iterations.gif'
import Areas from 'static/images/ListenJay/areas.png'
import Wireframes from 'static/images/ListenJay/wireframes.jpg'
import LJBranding from 'static/images/ListenJay/LJ-branding.png'
import Player from 'static/images/ListenJay/player-hifi.png'
import Flow from 'static/images/ListenJay/LJ-flow-01.png'
import CTA from 'static/images/ListenJay/LJ-CTA.png'
import Modal from 'static/images/ListenJay/LJ-Modal.png'

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
				<Heading>Listen Jay is a podcast discovery tool looking to improve its usability and branding</Heading>
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
			<ContentBlock>
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
					<Image src={CTA} className={classes.half} />
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
			<ContentBlock>
				<Heading>Iterate on Wireframes</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Branding
				</Heading>
				<Body>
					fun, inviting
				</Body>
				<Image size="full" src={LJBranding} />
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Differentiating, Value Props
				</Heading>
				<SubHeading>
					Bring the transcript up on the page
				</SubHeading>
				<SubHeading>
					Create Onboarding flow to explain transcript
				</SubHeading>
				<VideoPlayer
					src="https://player.vimeo.com/video/390219313?loop=1"
					title="Musical rug demo"
					aspectRatio="1:1"
				/>
			</ContentBlock>
		</PageWrapper>
	)
}
