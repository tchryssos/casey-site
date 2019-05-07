import React from 'react'
import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Image from 'components/Image'
import Spacer from 'components/Spacer'

import BusGif from 'static/images/flatiron-marketing/bus-boom.gif'
import PaulGif from 'static/images/flatiron-marketing/paul-ryan.gif'
import IG1 from 'static/images/flatiron-marketing/ig-1.gif'
import IG2 from 'static/images/flatiron-marketing/ig-2.png'


import './styles.scss'

const FlatironMarketing = () => (
	<PageWrapper>
		<Spacer height={96} />
		<ContentBlock>
			<Heading>Flatiron School</Heading>
			<div className="fismDescription">
				<p>
					As the first Graphic Design hire at Flatiron School, I handled the creation of all marketing assets including, out of home, web, organic and paid social.
				</p>
				<br />
				<p>
					Role: Creative Direction and Design
				</p>
			</div>
		</ContentBlock>
		<Spacer height={96} />
		<Image src={BusGif} alt="Bus boomerang" size="full" />
		<Image src={PaulGif} alt="Bus boomerang" size="full" />
		<div className="fismVimeoWrapper">
			<iframe
				title="Landing page demo"
				src="https://player.vimeo.com/video/324643084"
				width="640"
				height="640"
				frameBorder="0"
				allow="autoplay; fullscreen"
				allowFullScreen
				className="vimeoVideo"
			/>
		</div>
		<div className="fismVimeoWrapper">
			<iframe
				title="Stop motion video"
				src="https://player.vimeo.com/video/324643304"
				width="640"
				height="360"
				frameBorder="0"
				allow="autoplay;fullscreen"
				allowFullScreen
				className="vimeoVideo"
			/>
		</div>
		<Spacer />
		<ContentBlock>
			<div className="itemGridWrapper">
				<Image src={IG1} alt="Job slideshow" />
				<Image src={IG2} alt="Web language cards" />
			</div>
		</ContentBlock>
	</PageWrapper>
)

export default FlatironMarketing
