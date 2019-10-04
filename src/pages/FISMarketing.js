import React from 'react'
import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import VideoPlayer from 'components/VideoPlayer'
import Spacer from 'components/Spacer'
import ItemGrid from 'components/ItemGrid'

import LondonTube from 'static/images/FISMarketing/LondonTubeAd.png'
import LinkNyc from 'static/images/FISMarketing/LinkNyc.png'
import IG1 from 'static/images/FISMarketing/ig-6.gif'
import IG2 from 'static/images/FISMarketing/houchronad.png'
import IG3 from 'static/images/FISMarketing/ig-3.png'
import BackToSchool from 'static/images/FISMarketing/BackToSchool-Social.gif'
import IG4 from 'static/images/FISMarketing/ig-4.png'
import IG5 from 'static/images/FISMarketing/ig-5.png'
import IG6 from 'static/images/FISMarketing/ActuallyGetJobs.gif'
import CyberGif from 'static/images/FISMarketing/CyberGif_Square.gif'
import IG8 from 'static/images/FISMarketing/ig-8.png'

const FlatironMarketing = () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Flatiron School</Heading>
				<Spacer height={2} />
				<Body>
					As the first Graphic Design hire at Flatiron School, I handled the creation of all marketing assets including, out of home, web, organic and paid social.
				</Body>
				<Spacer />
				<Body>
					Role: Creative Direction and Design
					Graphic Designer: Emily Brown
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<Image src={LondonTube} alt="LondonTube Ad" size="full" />
			<Image src={LinkNyc} alt="Nyc Link Ad" size="full" />
			<VideoPlayer
				src="https://player.vimeo.com/video/324643084"
				title="Landing page demo"
				aspectRatio="1:1"
			/>
			<VideoPlayer
				src="https://player.vimeo.com/video/324643304"
				title="Stop motion video"
			/>
			<ContentBlock>
				<ItemGrid>
					<Image src={IG2} alt="Students coding" />
					<Image src={IG1} alt="JIntro to Front End Graphic" />
					<Image src={IG3} alt="Laptop and plant" />
					<Image src={IG4} alt="Students coding in Dallas" />
					</ItemGrid>

					<Image src={BackToSchool} alt="Parents go back to school too" size="full" />
					<ItemGrid>
					<Image src={IG5} alt="Young woman coding" />
					<Image src={CyberGif} alt="Learn Cybersecurity Analytics" />
					<Image src={IG6} alt="Logos of employers" />
					<Image
						src={IG8}
						alt="Students comparing code in ad for '2020 skills'"
					/>
				</ItemGrid>
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

export default FlatironMarketing
