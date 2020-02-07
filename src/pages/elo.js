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

import OGELO from 'static/images/ELO/Og-elo.png'
import FirstELO from 'static/images/ELO/first-elo.png'
import ELOGif from 'static/images/ELO/elo-account-flow.gif'
import ELOWhiteboard from 'static/images/ELO/elo-whiteboard.png'

export default () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>ELO Tracker -WIP-</Heading>
				<Spacer />
				<Body>
					This project was something that my boyfriend started as a personal project so that him and his coworkers could track their rankings while they played Super Smash Bros. At first we worked on coding a simple one page site together, but it quickly evolved into recruiting a back-end dev friend of ours to build a platform that anyone could use to do the same.
				</Body>
				<Spacer />
				<Body>
					Role: Product Designer
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<ContentBlock>
				<SubHeading>VERSION 1</SubHeading>
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
				<SubHeading>VERSION 2</SubHeading>
				<Spacer />
				<Body>
					We decided we wanted more of our friends and even strangers to be able to use the platform and use it for multiple games at a time. At this stage we created a flow to create an account and manage all of your scoreboards.
				</Body>
				<Image size="full" src={ELOGif} />
				<Spacer />
				<Spacer />
				<SubHeading>VERSION 3</SubHeading>
				<Spacer />
				<Body>
					At this point we recruited our friend who is a backend developer to help us make a more robust user experience. Here we created a brand new roadmap, mapping out all of the features we needed for an MVP.
				</Body>
				<Image size="full" src={ELOWhiteboard} />
				<Spacer />
				<Body>
					After we created a roadmap for the project, I went off and created wireframe prototypes to make sure we had thought out every user action we wanted to include.
				</Body>
				<Spacer />
				<Spacer />
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)
