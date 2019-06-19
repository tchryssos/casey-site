import React from 'react'
import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Image from 'components/Image'
import Spacer from 'components/Spacer'

import PhoneOne from 'static/images/UXUICourse/phone-1.gif'
import PhoneTwo from 'static/images/UXUICourse/phone-2.gif'
import Future from 'static/images/UXUICourse/future.gif'
import Cocktail from 'static/images/UXUICourse/cocktail.png'
import Nametag from 'static/images/UXUICourse/nametag.png'
import Swag from 'static/images/UXUICourse/swag.jpg'
import Tote from 'static/images/UXUICourse/tote.png'

import './styles/UXUICourse.scss'

const UXUICourse = () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Flatiron School</Heading>
				<Spacer />
				<p>
					Assets to promote the launch of Flatiron School’s UX/UI Design bootcamp and acquisition of fellow bootcamp, Designation.
				</p>
				<br />
				<p>
					Role: Creative Direction and Design
				</p>
				<br />
				<p>
					Junior Designer: Emily Brown
				</p>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<Image src={PhoneOne} alt="Instagram demo" size="full" />
			<ContentBlock>
				<Image
					src={Future}
					alt="Design your future launch party gif"
					size="full"
				/>
			</ContentBlock>
			<Image src={PhoneTwo} alt="Instagram swiper demo" size="full" />
			<div className="partyDesignGraphics">
				<Image src={Cocktail} alt="Design cocktail graphic" size="half" />
				<Image src={Nametag} alt="Design nametag graphic" size="half" />
			</div>
			<Image src={Swag} alt="Swag bag poster" size="full" />
			<Image src={Tote} alt="Flatiron tote bag" size="full" />
		</PageContent>
	</PageWrapper>
)

export default UXUICourse
