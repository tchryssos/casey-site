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
					xyz
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
				</ContentBlock>
				<ContentBlock>
				<Heading>Maynooth Furniture</Heading>
				<Spacer />
				<Body>
					xyz
				</Body>
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

export default injectSheet(styles)(UIDesign)
