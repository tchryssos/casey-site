import React from 'react'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import SubHeading from 'components/Typography/SubHeading'
import VideoPlayer from 'components/VideoPlayer'

import ResultsPod from 'static/images/ListenJay/iterations.gif'
import Areas from 'static/images/ListenJay/areas.png'
import Wireframes from 'static/images/ListenJay/wireframes.jpg'
import LJBranding from 'static/images/ListenJay/LJ-branding.png'
import Player from 'static/images/ListenJay/player-hifi.png'


export default () => (
	<PageWrapper>
		<ContentBlock>
			<Heading>Listen Jay UX/UI Design</Heading>
			<Spacer />
		</ContentBlock>
		<ContentBlock>
			<Heading>Podcast Episode Page Improvements</Heading>
			<Spacer />
			<Body>
				Listen Jay is a podcast review site that sees most of its traffic through social media posts that link directly to a specific podcast episode&apos;s page. Because of that page&apos;s priority it was the first one I focused on cleaning up from a UX perspective.
			</Body>
			<Image size="full" src={ResultsPod} />
			<Spacer />
			<Spacer />
			<SubHeading>IDENTIFY AREAS FOR IMPROVEMENT</SubHeading>
			<Spacer />
			<Body>
				This round of wireframes and mockups was something that I proactively brought to ListenJay without the benefit of talking to them first. These areas were things I identified as a new user without knowledge of teh business strategy.
			</Body>
			<Image size="full" src={Areas} bordered />
			<Spacer />
			<Spacer />
			<SubHeading>WIREFRAMES</SubHeading>
			<Spacer />
			<Image size="full" src={Wireframes} bordered />
			<Spacer />
			<Spacer />
			<SubHeading>BRANDING AND HI-FIDELITY MOCK UPS</SubHeading>
			<Spacer />
			<Body>
				With the Listen Jay branding I wanted to use a more consistent font family that would improve legibility. I also wanted to incorporate colors that are similar to the original colors but made the platform feel modern and use them in a more inviting way.
			</Body>
			<Image size="full" src={LJBranding} />
			<Image size="full" src={Player} />
			<Spacer />
			<Spacer />
			<SubHeading>FEEDBACK AND ITERATION</SubHeading>
			<Spacer />
			<Body>
				After talking to the ListenJay team, I learned a lot about the functionality of the platform that informed the second round of designs. The key differentiator of ListenJay is the ability to share any line from the transcript and link directly to that part. This lead me to condense the player to bring the transcript higher on the page and remove many of the call-to-actions that a user would encounter before reaching the transcript.
			</Body>
			<Spacer />
			<Body>
				Clip Sharing Flow
			</Body>
			<VideoPlayer
				src="https://player.vimeo.com/video/390219313?loop=1"
				title="Musical rug demo"
				aspectRatio="1:1"
			/>
		</ContentBlock>
	</PageWrapper>
)
