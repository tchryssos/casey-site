import React from 'react'
import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Image from 'components/Image'
import VideoPlayer from 'components/VideoPlayer'
import Spacer from 'components/Spacer'

import BusGif from 'static/images/FISMarketing/bus-boom.gif'
import PaulGif from 'static/images/FISMarketing/paul-ryan.gif'
import IG1 from 'static/images/FISMarketing/ig-1.gif'
import IG2 from 'static/images/FISMarketing/ig-2.png'
import IG3 from 'static/images/FISMarketing/ig-3.png'
import IG4 from 'static/images/FISMarketing/ig-4.png'
import IG5 from 'static/images/FISMarketing/ig-5.png'
import IG6 from 'static/images/FISMarketing/ig-6.gif'
import IG7 from 'static/images/FISMarketing/ig-7.png'
import IG8 from 'static/images/FISMarketing/ig-8.png'


import './styles/flatironMarketing.scss'

const FlatironMarketing = () => (
	<PageWrapper>
		<Spacer height={96} />
		<ContentBlock>
			<Heading>Flatiron School</Heading>
			<Spacer height={32} />
			<p>
				As the first Graphic Design hire at Flatiron School, I handled the creation of all marketing assets including, out of home, web, organic and paid social.
			</p>
			<br />
			<p>
				Role: Creative Direction and Design
			</p>
		</ContentBlock>
		<Spacer height={96} />
		<Image src={BusGif} alt="Bus boomerang" size="full" />
		<Image src={PaulGif} alt="Bus boomerang" size="full" />
		<VideoPlayer
			src="https://player.vimeo.com/video/324643084"
			title="Landing page demo"
		/>
		<VideoPlayer
			src="https://player.vimeo.com/video/324643304"
			title="Stop motion video"
		/>
		<Spacer />
		<ContentBlock>
			<div className="itemGridWrapper">
				<Image src={IG1} alt="Job slideshow" />
				<Image src={IG2} alt="Web language cards" />
				<Image src={IG3} alt="Laptop and plant" />
				<Image src={IG4} alt="Students coding in Dallas" />
				<Image src={IG5} alt="Young woman coding" />
				<Image src={IG6} alt="Sign advertising front end courses" />
				<Image src={IG7} alt="Data science bootcamp graphic" />
				<Image
					src={IG8}
					alt="Students comparing code in ad for '2020 skills'"
				/>
			</div>
		</ContentBlock>
	</PageWrapper>
)

export default FlatironMarketing
