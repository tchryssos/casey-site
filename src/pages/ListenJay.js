import React from 'react'

import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageContent'
import PageDescription from 'components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import SubHeading from 'components/Typography/SubHeading'

import ResultsPod from 'static/images/ListenJay/result_podacst.png'
import Areas from 'static/images/ListenJay/areas.png'
import Wireframes from 'static/images/ListenJay/wireframes.jpg'
import LJBranding from 'static/images/ListenJay/LJ-branding.png'
import Player from 'static/images/ListenJay/player-hifi.png'
import Home from 'static/images/ListenJay/home-hifi.png'


export default () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Listen Jay UX/UI Design</Heading>
				<Spacer />
			</ContentBlock>
		</PageDescription>
		<PageContent>
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
				<Image size="full" src={Areas} />
				<Spacer />
				<Spacer />
				<SubHeading>WIREFRAMES</SubHeading>
				<Spacer />
				<Image size="full" src={Wireframes} />
				<Spacer />
				<Spacer />
				<SubHeading>BRANDING AND HI-FIDELITY MOCK UPS</SubHeading>
				<Spacer />
				<Body>
					With the Listen Jay branding I wanted to use a more consistent font family that would improve legibility. I also wanted to incorporate colors that made the platform feel modern and use them in a more inviting way.
				</Body>
				<Image size="full" src={LJBranding} />
				<Image size="full" src={Player} />
				<Image size="full" src={Home} />
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)
