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
import VideoPlayer from 'components/VideoPlayer'

import OGELO from 'static/images/ELO/Og-elo.png'
import FirstELO from 'static/images/ELO/first-elo.png'
import ELOGif from 'static/images/ELO/elo-account-flow.gif'
import ELOWhiteboard from 'static/images/ELO/elo-whiteboard.png'
import ELODarkmode from 'static/images/ELO/elo-darkmode.gif'
import ELOBluemode from 'static/images/ELO/elo-bluemode.png'
import ELOYellow from 'static/images/ELO/elo-yellow.png'


export default () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>ELO Tracker -WIP-</Heading>
				<Spacer />
				<Body>
					This project was something that my boyfriend started as a personal project so that him and his coworkers could track their rankings while they played Super Smash Bros. At first we worked on coding a simple one page site together, but it quickly evolved into something larger.
				</Body>
				<Spacer />
				<Body>
					Role: Product Designer
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<ContentBlock>
				<Heading>VERSION 1</Heading>
				<Spacer />
				<Body>
					This is what my boyfriend had built on his own just for him and his friends to use together.
				</Body>
				<Image bordered size="full" src={OGELO} />
				<Spacer />
				<Body>
					I coded the front-end to clean it up a little and look like this.
				</Body>
				<Image size="full" src={FirstELO} />
				<Spacer />
				<Spacer />
				<Heading>VERSION 2</Heading>
				<Spacer />
				<Body>
					We decided we wanted more of our friends and even strangers to be able to use the platform and use it for multiple games at a time. At this stage we created a flow to create an account and manage all of your scoreboards.
				</Body>
				<Image size="full" src={ELOGif} />
				<Spacer />
				<Spacer />
				<Heading>VERSION 3</Heading>
				<Spacer />
				<Body>
					At this point we recruited our friend who is a backend developer to help us make a more robust user experience. Here we created a brand new roadmap, mapping out all of the features we needed for an MVP.
				</Body>
				<Image size="full" src={ELOWhiteboard} />
				<Spacer />
				<Body>
					After we created a roadmap for the project, I went off and created wireframe prototypes to make sure we had thought out every user action we wanted to include.
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/390019243?loop=1"
					title="Musical rug demo"
					aspectRatio="1:1"
				/>
				<Spacer />
				<Heading>BRANDING AND VISUAL DESIGN</Heading>
				<Spacer />
				<Body>
					Once we felt comfortable with the wireframes and functionality, I explored a few visual directions for the platform.
				</Body>
				<Spacer />
				<SubHeading>Direction 1</SubHeading>
				<Spacer />
				<Body>
					Most gamers use dark mode so that they are not looking at bright screens at night and hurting their eyes. Most gaming-adjacent platforms that we looked at, such as Discord and Challoneg also primarily use a dark mode for their UI.
				</Body>
				<Image size="full" src={ELODarkmode} />
				<Spacer />
				<Spacer />
				<SubHeading>Direction 2</SubHeading>
				<Spacer />
				<Body>
					For a second direction I tried a blue mode so that we could keep the usability of a dark mode but stand out from out competitors a little more and add some more personality.
				</Body>
				<Image size="full" src={ELOBluemode} />
				<Spacer />
				<Spacer />
				<SubHeading>Direction 3</SubHeading>
				<Spacer />
				<Body>
					Here I wanted to try something very different and out of the box. I wanted to have something very playful since games are playful!
				</Body>
				<Image size="full" src={ELOYellow} />
				<Spacer />
				<Spacer />
				<SubHeading>This project is ongoing! This is where we are at currently.</SubHeading>
				<Spacer />
				<Spacer />
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)
