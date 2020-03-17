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
import ELOWireframes from 'static/images/ELO/elo-wireframes.png'
import ELOWhiteboard from 'static/images/ELO/elo-whiteboard.png'
import ELOHiDef1 from 'static/images/ELO/hidef-1.png'
import ELOHiDef2 from 'static/images/ELO/hidef-2.png'
import ELOStorybook from 'static/images/ELO/storybook.gif'
import ELODarkmode from 'static/images/ELO/elo-darkmode.gif'
import ELOBluemode from 'static/images/ELO/elo-bluemode.png'
import ELOYellow from 'static/images/ELO/elo-yellow.png'
import ELOAltLogo from 'static/images/ELO/elo-alt-logos.png'
import ELOLogo from 'static/images/ELO/elo-logo.png'
import ELOStyle from 'static/images/ELO/elo-styleguide.png'


export default () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Ladders ELO Tracker</Heading>
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
				<Heading>Product Design</Heading>
				<Spacer />
				<SubHeading>THE IDEA</SubHeading>
				<Spacer />
				<Body>
					This was the original site that was only accesible to one group of people to use for one game.
				</Body>
				<Image bordered size="full" src={OGELO} />
				<Spacer />
				<SubHeading>SCALING THE PRODUCT</SubHeading>
				<Spacer />
				<Body>
					After a few iterations based on what we could build on our own, we recruited our friend who is a backend developer to help us execute on a more robust user experience. Here we created a brand new roadmap, mapping out all of the features we needed for an MVP.
				</Body>
				<Image size="full" src={ELOWhiteboard} />
				<Spacer />
				<SubHeading>WIREFRAMES</SubHeading>
				<Spacer />
				<Body>
					After we created a roadmap for the project, I went off and created wireframe prototypes to make sure we had thought out every user action we wanted to include.
				</Body>
				<Image size="full" src={ELOWireframes} />
				<VideoPlayer
					src="https://player.vimeo.com/video/390019243?loop=1"
					title="Musical rug demo"
					aspectRatio="1:1"
				/>
				<Spacer />
				<SubHeading>VISUAL DESIGN</SubHeading>
				<Spacer />
				<Body>
					To see the full branding exercise click here.
				</Body>
				<Image size="full" src={ELOHiDef1} />
				<Image size="full" src={ELOHiDef2} />
				<Spacer />
				<SubHeading>STORYBOOK PRODUCTION</SubHeading>
				<Spacer />
				<Body>
					We used Storybook to build and design all of the components.
				</Body>
				<Image size="full" src={ELOStorybook} />
				<Spacer />
				<SubHeading>CHALLENGES WE FACED</SubHeading>
				<Spacer />
				<Body>
					We used Storybook to build and design all of the components.
				</Body>
				<Spacer />
				<Spacer />
				<Spacer />
				<Heading>Branding</Heading>
				<Spacer />
				<Body>
					Once we felt comfortable with the wireframes and functionality, I explored a few visual directions for the platform.
				</Body>
				<Spacer />
				<SubHeading>Direction 1</SubHeading>
				<Spacer />
				<Body>
					Most gamers use dark mode so that they are not looking at bright screens at night and hurting their eyes. Most gaming-adjacent platforms that we looked at, such as Discord and Challonge also primarily use a dark mode for their UI.
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
				<SubHeading>Logo</SubHeading>
				<Spacer />
				<Body>
					We developed a list of many names for for the platform and once we landed on Ladders we created multiple logo options below.
				</Body>
				<Image size="full" src={ELOAltLogo} />
				<Spacer />
				<Body>
					Below are the final logos.
				</Body>
				<Image size="full" src={ELOLogo} />
				<Image size="full" src={ELOStyle} />
				<Spacer />
				<Spacer />
				<SubHeading>This project is ongoing! This is where we are at currently.</SubHeading>
				<Spacer />
				<Spacer />
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)
