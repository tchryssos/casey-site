import React from 'react'
import PageWrapper from 'components/PageWrapper'
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

import './styles/uxuiCourse.scss'

const UXUICourse = () => (
	<PageWrapper>
		<Spacer height={96} />
		<ContentBlock>
			<Heading>Flatiron School</Heading>
			<Spacer height={32} />
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
		<Spacer height={96} />
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
	</PageWrapper>
)

export default UXUICourse
