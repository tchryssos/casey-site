import React from 'react'
import { createUseStyles } from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import Spacer from 'components/Spacer'
import VideoPlayer from 'components/VideoPlayer'
import SubHeading from 'components/Typography/SubHeading'

import MusicalRugOne from 'static/images/MusicalRug/MusicalRug-1.jpg'
import MusicalRugTwo from 'static/images/MusicalRug/MusicalRug-2.jpg'
import MusicalRugThree from 'static/images/MusicalRug/MusicalRug-3.jpg'


const useStyles = createUseStyles({
	headerBackground: {
		backgroundColor: '#cbe3ee',
	},
})
export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.headerBackground}>
				<Heading>A textile that plays sounds upon touch</Heading>
				<Spacer />
				<SubHeading>
					Role: Creative Direction, Design, Production
				</SubHeading>
			</ContentBlock>
			<ContentBlock>
				<VideoPlayer
					src="https://player.vimeo.com/video/331255265?loop=1"
					title="Musical rug demo"
				/>
				<Spacer height={2} />
				<Body>
					Built using Arduino and Processing. The project combines hardware and software skills to create a rug that plays sounds upon touch. All sounds are also generated using code.
				</Body>
				<Spacer />
				<Image
					src={MusicalRugOne}
					alt="Two hands touching musical rug"
					size="full"
				/>
				<Image src={MusicalRugTwo} alt="Setting up musical rug" size="full" />
				<Image src={MusicalRugThree} alt="Touching musical rug" size="full" />
				<Spacer />
			</ContentBlock>
		</PageWrapper>
	)
}
