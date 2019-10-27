import React from 'react'
import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import Spacer from 'components/Spacer'
import VideoPlayer from 'components/VideoPlayer'
import ItemGrid from 'components/ItemGrid'

import SeaportOne from 'static/images/ChaseSapphire/Seaport/Seaport_01.png'
import SeaportTwo from 'static/images/ChaseSapphire/Seaport/Seaport_02.png'
import SeaportThree from 'static/images/ChaseSapphire/Seaport/Seaport_03.png'
import SeaportFour from 'static/images/ChaseSapphire/Seaport/Seaport_04.png'
import SeaportFive from 'static/images/ChaseSapphire/Seaport/Seaport_05.png'
import SeaportSix from 'static/images/ChaseSapphire/Seaport/Seaport_06.png'

import CitiesCaw from 'static/images/ChaseSapphire/Cities/caw.jpg'
import CitiesLiho from 'static/images/ChaseSapphire/Cities/liho.jpg'
import CitiesCarousel from 'static/images/ChaseSapphire/Cities/carousel.jpg'

import bbqOne from 'static/images/ChaseSapphire/WhatsNext/bbq_1.jpg'
import bbqTwo from 'static/images/ChaseSapphire/WhatsNext/bbq_2.png'
import bbqThree from 'static/images/ChaseSapphire/WhatsNext/bbq_3.png'
import bbqFour from 'static/images/ChaseSapphire/WhatsNext/bbq_4.png'


const ChaseSapphire = () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Chase Sapphire</Heading>
				<Spacer />
				<Body>
					As an Art Director at VaynerMedia, I worked primarily on the Chase Sapphire Reserve line of business, creating original work and repurposing existing assets for their social channels.
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<ContentBlock>
				<Heading>Summer at the Seaport</Heading>
				<Spacer />
				<Body>
					Chase Sapphire was the primary launch partner for the 2017 reopening of the South Street Seaport in New York City. Their sponsorship provided cardmembers with access to an exclusive lounge and bar as well as VIP musical and dining experiences. We created original social content driving members to take advantage of these perks.
				</Body>
				<Spacer />
				<Body>Role: Art Direction</Body>
				<Spacer />
				<Body>Photography: Rav Carlotti </Body>
			</ContentBlock>
			<ContentBlock>
				<Image size="full" src={SeaportOne} />
				<ItemGrid>
					<Image src={SeaportTwo} />
					<Image src={SeaportThree} />
					<Image src={SeaportFour} />
					<Image src={SeaportFive} />
					<Image size="full" src={SeaportSix} />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Heading>Reserve What&apos;s Next</Heading>
				<Spacer />
				<Body>
					Chase Sapphire worked with the Droga5 agency to create a 3 part video series highlighting the future of travel and dining starring James Corden. At VaynerMedia, we leveraged Droga5&apos;s assets to create an accompanying social media campaign consisting of 200+ assets.
				</Body>
				<Spacer />
				<Body>
					Role: Junior Art Director, repurposing assets from Droga5
				</Body>
				<Spacer />
				<Body>
					Copywriter: Chris Kerr
				</Body>
				<Spacer />
				<Body>
					Creative Director: Etan Bednarsh
				</Body>
			</ContentBlock>
			<ContentBlock>
				<VideoPlayer
					src="https://player.vimeo.com/video/338773040"
					title="Reserve What's Next: Clip 4"
				/>
				<ItemGrid>
					<Image src={bbqOne} />
					<Image src={bbqTwo} />
					<Image src={bbqThree} />
					<Image src={bbqFour} />
				</ItemGrid>
				<VideoPlayer
					src="https://player.vimeo.com/video/338774140"
					title="Reserve What's Next: Social Campaign"
					aspectRatio="1:1"
				/>
			</ContentBlock>
			<ContentBlock>
				<Heading>Sapphire Six Cities</Heading>
				<Spacer />
				<Body>
					Chase Sapphire pinpointed some of the top restaurants that their cardmembers were dining at in six major cities across the US. We created original social content around the top 6 restaurants in each of the 6 cities.
				</Body>
				<Spacer />
				<Body>Role: Junior Art Director, Graphic Designer</Body>
				<Spacer />
				<Body>Senior Art Director: Lauren Bolger</Body>
			</ContentBlock>
			<ContentBlock>
				<ItemGrid>
					<Image src={CitiesLiho} />
					<Image src={CitiesCaw} />
				</ItemGrid>
				<VideoPlayer
					src="https://player.vimeo.com/video/338773155"
					title="Six Cities: San Francisco"
					aspectRatio="1:1"
				/>
				<Image scrollable src={CitiesCarousel} size="full" />
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

export default ChaseSapphire
