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

import HeroBefore from 'static/images/FISWeb/FISWebHero-01.png'
import HeroAfter from 'static/images/FISWeb/FISWebHero-02.png'
import HeroAfter2 from 'static/images/FISWeb/FISWebHero-03.png'
import HelloBar from 'static/images/FISWeb/FISWebHelloBar.png'
import Modal from 'static/images/FISWeb/FISWebModal.png'

export default () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Flatiron School Website Design</Heading>
				<Spacer />
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<ContentBlock>
				<Heading>Hero Design Updates</Heading>
				<Spacer />
				<SubHeading>CURRENT</SubHeading>
				<Spacer />
				<Body>
					The hero is the first thing people see when they come to our site. It needs to pull them in and inspire them to take actions. Our current hero is very dark. The images of lively students are covered up by a dark overlay and more text on top of that. We think that if we can brighten up our hero section and separate the text from the images, we could be more creative with our visuals and more inviting to prospective students.
				</Body>
				<Image size="full" src={HeroBefore} />
				<Spacer />
				<SubHeading>UPDATED</SubHeading>
				<Spacer />
				<Body>These updates have not yet been enacted, but we would expect them to increase engagement with our site and decrease bounce rate. These updates will also allow us to better match our site pages to campaigns we are running across other channels.</Body>
				<Image size="full" src={HeroAfter} />
				<Image size="full" src={HeroAfter2} />
				<Spacer />
				<Spacer />
				<Heading>Hello Bar and Modal Designs</Heading>
				<Spacer />
				<Body>
						In order to share big news on our pages we wanted to test designs for Hello Bar banners and pop-up modals.
				</Body>
				<Image size="full" src={HelloBar} />
				<Image size="full" src={Modal} />
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

