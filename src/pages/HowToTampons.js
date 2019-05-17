import React from 'react'
import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Image from 'components/Image'
import Spacer from 'components/Spacer'

import TamponOne from 'static/images/HowToTampons/Tampon-1.jpg'
import TamponTwo from 'static/images/HowToTampons/Tampon-2.jpg'
import TamponThree from 'static/images/HowToTampons/Tampon-3.png'
import TamponFour from 'static/images/HowToTampons/Tampon-4.png'
import TamponFive from 'static/images/HowToTampons/Tampon-5.png'
import TamponSix from 'static/images/HowToTampons/Tampon-6.png'
import TamponSeven from 'static/images/HowToTampons/Tampon-7.png'

const HowToTampons = () => (
	<PageWrapper>
		<Spacer height={96} />
		<ContentBlock>
			<Heading>How to put in a tampon</Heading>
			<Spacer height={32} />
			<p>
				How to Put in a Tampon is a collection of scrolling animations. Each interaction is based on a verb taken from a Young Women&apos;s Health article describing how to put in a tampon. This Piece was shown in the UCLA DMA 2016 Senior Exhibit, S.A.D. Show surrounded by tampons hand wrapped with the verbs used in the project.
			</p>
			<br />
			<p>
				Role: Creative Direction, Design, Computer Programming
			</p>
		</ContentBlock>
		<Spacer height={96} />
	</PageWrapper>
)

export default HowToTampons
