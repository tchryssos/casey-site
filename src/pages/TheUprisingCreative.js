import React from 'react'
import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Image from 'components/Image'
import Spacer from 'components/Spacer'

import AnimalsOne from 'static/images/TheUprisingCreative/AnimalsMag/uprising-SRL.jpg'
import AnimalsTwo from 'static/images/TheUprisingCreative/AnimalsMag/uprising-SRL2.jpg'
import AnimalsThree from 'static/images/TheUprisingCreative/AnimalsMag/uprising-SRL3.jpg'
import AnimalsFour from 'static/images/TheUprisingCreative/AnimalsMag/uprising-SRL4.jpg'
import AnimalsFive from 'static/images/TheUprisingCreative/AnimalsMag/uprising-SRL5.jpg'

import SkinOne from 'static/images/TheUprisingCreative/SkinDeep/skindeep1.png'
import SkinTwo from 'static/images/TheUprisingCreative/SkinDeep/skindeep2.png'
import SkinThree from 'static/images/TheUprisingCreative/SkinDeep/skindeep3.png'
import SkinFour from 'static/images/TheUprisingCreative/SkinDeep/skindeep4.png'

import DDOne from 'static/images/TheUprisingCreative/DigitalDomain/dd-grid.jpg'
import DDTwo from 'static/images/TheUprisingCreative/DigitalDomain/dd-permalink-narrow.jpg'

import RedBullOne from 'static/images/TheUprisingCreative/RedBullRecords/redbull-records.png'

const UXUICourse = () => (
	<PageWrapper>
		<Spacer height={96} />
		<ContentBlock>
			<Heading>The Uprising Creative Design Internship</Heading>
			<Spacer height={32} />
			<p>
				During my internship I worked on designs for web, merchandise, print ads, logos, letterheads and magazine layouts. Also created pitch decks for upcoming film projects, documented inventory, and sat in on meetings with clients.
			</p>
		</ContentBlock>
		<Spacer height={96} />
		<ContentBlock>
			<Heading>Layouts for Animals Magazine</Heading>
			<Image src={AnimalsOne} alt="Magazine layout" size="full" />
			<Image src={AnimalsTwo} alt="Magazine layout" size="full" />
			<Image src={AnimalsThree} alt="Magazine layout" size="full" />
			<Image src={AnimalsFour} alt="Magazine layout" size="full" />
			<Image src={AnimalsFive} alt="Magazine layout" size="full" />
		</ContentBlock>
		<ContentBlock>
			<Heading>Pitch deck for the horror film, Skin Deep</Heading>
			<Image src={SkinOne} alt="Film title card" size="full" />
			<Image src={SkinTwo} alt="Film inspiration card" size="full" />
			<Image src={SkinThree} alt="Director's statement" size="full" />
			<Image src={SkinFour} alt="Crew notes" size="full" />
		</ContentBlock>
		<ContentBlock>
			<Heading>Digital Domain Website Mocks</Heading>
			<Image src={DDOne} alt="Movie grid" size="full" />
			<Image src={DDTwo} alt="X-Men movie page" size="full" />
		</ContentBlock>
		<ContentBlock>
			<Heading>HITS Mag Ad, Red Bull Records</Heading>
			<Image src={RedBullOne} alt="Paper doll cutout ad" size="full" />
		</ContentBlock>
	</PageWrapper>
)

export default UXUICourse
