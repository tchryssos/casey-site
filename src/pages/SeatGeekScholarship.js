import React from 'react'
import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import Spacer from 'components/Spacer'
import ItemGrid from 'components/ItemGrid'

import Stickers from 'static/images/SeatGeekScholarship/stickers.png'
import FiftyFifty from 'static/images/SeatGeekScholarship/50-50-graphic.png'
import Timeline from 'static/images/SeatGeekScholarship/womens-month-timeline.png'
import CarolAnimation from 'static/images/SeatGeekScholarship/carol-animation.gif'
import Perlman from 'static/images/SeatGeekScholarship/perlman.png'
import Coalition from 'static/images/SeatGeekScholarship/coalition.png'

const HowToTampons = () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Image src={Stickers} alt="Stickers" size="full" />
				<Heading>Flatiron School x SeatGeek 50/50 Scholarship</Heading>
				<Spacer />
				<Body>
					Assets to promote Flatiron School x SeatGeek 50/50 Scholarship for women in tech. 665 people applied for this scholarship over the 3 week period that it was live for and 60 of those applicants enrolled, mostly on first conversion.
				</Body>
				<Spacer />
				<Body>
					Role: Creative Direction and Design
				</Body>
				<Spacer />
				<Body>
					Junior Designer: Emily Brown
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<ContentBlock>
				<Image src={FiftyFifty} alt="Scholarship advertisement" size="full" />
				<Image src={Timeline} alt="Women in computing timeline" size="full" />
				<Image src={CarolAnimation} alt="Animation of Carol Shaw" size="full" />
				<ItemGrid>
					<Image src={Perlman} alt="Drawing of Radia Perlman" />
					<Image src={Coalition} alt="50/50 gender coalition flyer" />
				</ItemGrid>
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

export default HowToTampons
