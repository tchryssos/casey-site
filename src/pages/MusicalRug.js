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

import MusicalRugOne from 'static/images/MusicalRug/MusicalRug-1.jpg'
import MusicalRugTwo from 'static/images/MusicalRug/MusicalRug-2.jpg'
import MusicalRugThree from 'static/images/MusicalRug/MusicalRug-3.jpg'

const UXUICourse = () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Musical Rug</Heading>
				<Spacer />
				<Body>
					Built using Arduino and Processing during UCLA|DMA&apos;s Winter 2016 Special Topics class with Instructor Casey Reas. The project combines hardware and software skills to create a rug that plays sounds upon touch. All sounds are also generated using code.
				</Body>
				<Spacer />
				<Body>
					Role: Creative Direction, Design, Production
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<VideoPlayer
				src="https://player.vimeo.com/video/331255265"
				title="Musical rug demo"
			/>
			<Image
				src={MusicalRugOne}
				alt="Two hands touching musical rug"
				size="full"
			/>
			<Image src={MusicalRugTwo} alt="Setting up musical rug" size="full" />
			<Image src={MusicalRugThree} alt="Touching musical rug" size="full" />
			<Spacer isHiddenSmall />
		</PageContent>
	</PageWrapper>
)

export default UXUICourse
