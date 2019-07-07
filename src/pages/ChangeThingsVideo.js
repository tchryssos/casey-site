import React from 'react'

import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Spacer from 'components/Spacer'
import Body from 'components/Typography/Body'
import VideoPlayer from 'components/VideoPlayer'

const ChangeThingsVideo = () => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Change Things Video</Heading>
				<Spacer />
				<Body>
					Flatiron School worked with the agency, Humanaut, to create an updated brand video to be used across all channels. On paid social channels we received applications at a quarter of our average cost.
				</Body>
				<Spacer />
				<Body>Role: Client-side project manager/producer</Body>
				<Spacer />
				<Body>Agency: Humanaut</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<ContentBlock>
				<VideoPlayer
					src="https://player.vimeo.com/video/338254527"
					title="Hero version 14"
				/>
				<VideoPlayer
					src="https://player.vimeo.com/video/338254396"
					title="Change Things 30 seconds"
				/>
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

export default ChangeThingsVideo
