import React from 'react'
import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
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


const UXUICourse = () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Chase Sapphire</Heading>
				<Spacer />
				<p>
					As an Art Director at VaynerMedia, I worked primarily on the Chase Sapphire Reserve line of business, creating original work and repurposing existing assets for their social channels.
				</p>
				<br />
				<Heading>Summer at the Seaport</Heading>
				<Spacer />
				<p>
					Chase Sapphire was the primary launch partner for the 2017 reopening of the South Street Seaport in New York City. Their sponsorship provided cardmembers with access to an exclusive lounge and bar as well as VIP musical and dining experiences. We created original social content driving members to take advantage of these perks.
				</p>
				<br />
				<p>Role: Art Direction</p>
				<br />
				<p>Photography: Rav Carlotti </p>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<ContentBlock>
				<ItemGrid>
					<Image size="full" src={SeaportOne} />
					<Image src={SeaportTwo} />
					<Image src={SeaportThree} />
					<Image src={SeaportFour} />
					<Image src={SeaportFive} />
					<Image size="full" src={SeaportSix} />
				</ItemGrid>
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

export default UXUICourse
