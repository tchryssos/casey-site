import React from 'react'
import injectSheet from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import Spacer from 'components/Spacer'

import PhoneOne from 'static/images/UXUICourse/phone-1.gif'
import PhoneTwo from 'static/images/UXUICourse/phone-2.gif'
import Future from 'static/images/UXUICourse/future.gif'
import Cocktail from 'static/images/UXUICourse/cocktail.png'
import Nametag from 'static/images/UXUICourse/nametag.png'
import Swag from 'static/images/UXUICourse/swag.jpg'
import Tote from 'static/images/UXUICourse/tote.png'

import { offWhite } from 'constants/styles/colors'

const styles = {
	partyDesignGraphics: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0 4% 32px 4%',
		backgroundColor: offWhite,
	},
}

const UXUICourse = ({ classes }) => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Flatiron School</Heading>
				<Spacer />
				<Body>
					Assets to promote the launch of Flatiron School’s UX/UI Design bootcamp and acquisition of fellow bootcamp, Designation.
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
			<Image src={PhoneOne} alt="Instagram demo" size="full" />
			<ContentBlock>
				<Image
					src={Future}
					alt="Design your future launch party gif"
					size="full"
				/>
			</ContentBlock>
			<Image src={PhoneTwo} alt="Instagram swiper demo" size="full" />
			<div className={classes.partyDesignGraphics}>
				<Image src={Cocktail} alt="Design cocktail graphic" size="half" />
				<Image src={Nametag} alt="Design nametag graphic" size="half" />
			</div>
			<Image src={Swag} alt="Swag bag poster" size="full" />
			<Image src={Tote} alt="Flatiron tote bag" size="full" />
		</PageContent>
	</PageWrapper>
)

export default injectSheet(styles)(UXUICourse)
