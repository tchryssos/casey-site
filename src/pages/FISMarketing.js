import React from 'react'
import PageWrapper from 'components/PageWrapper'
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
import BackToSchool from 'static/images/FISMarketing/BackToSchool-Social.gif'
import IG4 from 'static/images/FISMarketing/ig-4.png'
import IG5 from 'static/images/FISMarketing/ig-5.png'
import IG6 from 'static/images/FISMarketing/ActuallyGetJobs.gif'
import CyberGif from 'static/images/FISMarketing/CyberGif_Square.gif'
import IG8 from 'static/images/FISMarketing/ig-8.png'
import JobsReport from 'static/images/FISMarketing/93-finalweb.gif'

export default () => (
	<PageWrapper>
		<ContentBlock>
			<Heading>Flatiron School</Heading>
			<Spacer height={2} />
			<Body>
				As the first Graphic Design hire at Flatiron School, I handled the creation of all marketing assets including, out of home, web, organic and paid social.
			</Body>
			<Spacer />
			<Body>
				Role: Design Manager
			</Body>
			<Spacer />
			<Body>
				Graphic Designers: Emily Brown, Alexa Venazio
			</Body>
		</ContentBlock>
		<ContentBlock>
			<Heading>Out of Home Advertising</Heading>
			<Image src={LondonTube} alt="LondonTube Ad" size="full" />
			<Image src={LinkNyc} alt="Nyc Link Ad" size="full" />
		</ContentBlock>
		<ContentBlock>
			<Heading>Brand Campaign Video</Heading>
			<Spacer />
			<Body>
				Flatiron School worked with the agency, Humanaut, to create an updated brand video to be used across all channels. On paid social channels we received applications at a quarter of our average cost.
			</Body>
			<Spacer />
			<Body>Role: Client-side project manager/producer</Body>
			<Spacer />
			<Body>Agency: Humanaut</Body>
			<VideoPlayer
				src="https://player.vimeo.com/video/338254527"
				title="Hero version 14"
			/>
			<VideoPlayer
				src="https://player.vimeo.com/video/338254396"
				title="Change Things 30 seconds"
			/>
		</ContentBlock>
		<ContentBlock>
			<Heading>Social Advertising</Heading>
			<Spacer />
			<ItemGrid>
				<Image src={IG2} alt="Students coding" />
				<Image src={IG1} alt="JIntro to Front End Graphic" />
				<Image src={JobsReport} alt="93% employment rate" />
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
			<VideoPlayer
				src="https://player.vimeo.com/video/324643304"
				title="Stop motion video"
			/>
		</ContentBlock>
	</PageWrapper>
)
