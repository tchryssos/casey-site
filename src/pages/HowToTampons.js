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

import TamponOne from 'static/images/HowToTampons/Tampon-1.jpg'
import TamponTwo from 'static/images/HowToTampons/Tampon-2.jpg'
import TamponThree from 'static/images/HowToTampons/Tampon-3.png'
import TamponFour from 'static/images/HowToTampons/Tampon-4.png'
import TamponFive from 'static/images/HowToTampons/Tampon-5.png'
import TamponSix from 'static/images/HowToTampons/Tampon-6.png'
import TamponSeven from 'static/images/HowToTampons/Tampon-7.png'

const HowToTampons = () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>How to put in a tampon</Heading>
				<Spacer />
				<Body>
					How to Put in a Tampon is a collection of scrolling animations. Each interaction is based on a verb taken from a Young Women&apos;s Health article describing how to put in a tampon. This Piece was shown in the UCLA DMA 2016 Senior Exhibit, S.A.D. Show surrounded by tampons hand wrapped with the verbs used in the project.
				</Body>
				<Spacer />
				<Body>
					Role: Creative Direction, Design, Computer Programming
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<VideoPlayer
				src="https://player.vimeo.com/video/331255354"
				title="Tampon insertion animation"
			/>
			<Image src={TamponOne} alt="TV with tampon project" size="full" />
			<Image src={TamponTwo} alt="Laptop with tampon project" size="full" />
			<Image src={TamponThree} alt="Tampon opening animation" size="full" />
			<Image src={TamponFour} alt="Flying tampon animation" size="full" />
			<Image src={TamponFive} alt="Razor animation" size="full" />
			<Image src={TamponSix} alt="Texting animation" size="full" />
			<Image src={TamponSeven} alt="Heart flying out from between legs" size="full" />
			<Spacer />
		</PageContent>
	</PageWrapper>
)

export default HowToTampons
