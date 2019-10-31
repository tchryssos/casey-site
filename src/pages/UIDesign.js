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
import VideoPlayer from 'components/VideoPlayer'

import WireFrames from 'static/images/UIDesign/WireFrames.png'
import SiteStyles from 'static/images/UIDesign/Styles.png'
import HomeAboutPages from 'static/images/UIDesign/HomeAbout.png'
import LogInSignUp from 'static/images/UIDesign/LogInSignUp.gif'
import Mobile from 'static/images/UIDesign/mobile.png'

import MHomePage from 'static/images/UIDesign/MaynoothHomePage.png'
import MFilter from 'static/images/UIDesign/MaynoothFilter.gif'
import MStyles from 'static/images/UIDesign/MaynoothStyles.png'
import MProduct from 'static/images/UIDesign/MaynoothProduct.gif'

import { offWhite } from 'constants/styles/colors'

const styles = {
	partyDesignGraphics: {
		padding: '16px',
		backgroundColor: offWhite,
	},
	hideMargin: {
		marginTop: 0,
	},
}

const UIDesign = ({ classes }) => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>UI Design</Heading>
				<Spacer />
				<Body>
					In order to learn more about web design, I took a UI Design course on Udemy. These are the two projects that came out of the course. 
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
		<ContentBlock>
				<Heading>Roar Bicycles</Heading>
				<Spacer />
				<Body>
				 	Client: Roar Bikes is a manufacturer of small run, contemporary bicycles. They currently have 3 models of bike to purchase.
				 	<br></br><br></br>Primary Objective: Build an e-commerce website for people to browse and purchase.
				 	<br></br><br></br>Audience: Jake is a graphic designer for a large design agency in Los Angles. Jake prides himself on having strange & interesting versions of everyone else’s everyday objects. His shoes are hand made & his backpack is pink. He likes to make his purchase (big or small) from local responsible crafts people. He doesn’t own a car. He always brings a reusable cup to the coffee shop. Jake cycles to work and wants his bicycle to be practical but unique.
				</Body>
			</ContentBlock>
			<ContentBlock>
			<Image src={WireFrames} alt="Wire Frames" size="full" />
			<VideoPlayer
				src="https://player.vimeo.com/video/369424560?autoplay=1&loop=1"
				title="Musical rug demo"
			/>
			<Image src={SiteStyles} alt="Logo Fonts and Colors for the site" size="full" />
				<Image
					src={HomeAboutPages}
					alt="About and Home Pages"
					size="full"
				/>
			<Image src={LogInSignUp} alt="Log In and Sign Up Screens" size="full" />
			<Image src={Mobile} alt="Mobile Screens" size="full" />
				</ContentBlock>
			<ContentBlock>
				<Heading>Maynooth Furniture</Heading>
				<Spacer />
				<Body>
				Client: Maynooth Furniture is a new business selling high-end furniture. 
				 	<br></br><br></br>Primary Objective: Build an e-commerce website for people to browse and purchase.
				</Body>
			</ContentBlock>
			<ContentBlock>
			<Image src={MHomePage} alt="Homepage on desktop and mobile" size="full" />
			<Image src={MFilter} alt="Animation of user selection tool" size="full" />
			<Image src={MStyles} alt="Style guide for the site" size="full" />
			<Image src={MProduct} alt="Product page on desktop and mobile" size="full" />
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

export default injectSheet(styles)(UIDesign)
