import React from 'react'
import injectSheet from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import VideoPlayer from 'components/VideoPlayer'
import SubHeading from 'components/Typography/SubHeading'

import MyProblem from 'static/images/Portfolio/problemGif-01.gif'
import MariahBeforeAfter from 'static/images/Portfolio/BeforeAfter1.gif'

const styles = {

}

const Portfolio = ({ classes }) => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Portfolio Design</Heading>
				<Spacer />
				<Body>
					I became very interested in web design and coding after working closely with a developer to redesign my personal website. After learning enough React to edit things on my own website, I wanted to design and build something all on my own so I redid a friend's portfolio as well.
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<ContentBlock>
				<Heading>Caseybradford.club</Heading>
				<VideoPlayer
					src="https://player.vimeo.com/video/380927068?autoplay=1&loop=1"
					title="About Me Page Demo"
				/>
				<Image src={MyProblem} alt="Problem statement" size="full" />
				<Spacer />
				<SubHeading>THE CHALLENGE</SubHeading>
				<Body>
					To build my personal portfolio I was using a Squarespace template that was type heavy making it hard to navigate and rather uninspriring for hiring managers to land on. I even went to an interview where the recruiter told me they liked that my site was ugly on purpose.
				</Body>
				<Spacer />
				<Body>
					After hiring a team of designers myself, I was shocked by how many versions of the same template I was seeing and how hard it was for any individual to stand out, show personality, and present something mobile friendly.
				</Body>
				<Spacer />
				<SubHeading>HYPOTHESIS</SubHeading>
				<Body>
					If I could make my home page visually interesting with a flow that pulled in viewers and encouraged them to interact with the site, they would stay on my site longer. If I could make my about me section show more personality, viewers would be more likely to connect with me and invest in me as a candidate.
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/380927071?autoplay=1&loop=1"
					title="Home Me Page Demo"
				/>
			</ContentBlock>
			<ContentBlock>
				<Heading>Mariah Adcox Portfolio</Heading>
				<Image src={MariahBeforeAfter} alt="Before and After of the website" size="full" />
				<Body>
					Check teh site out <a href="http://mariah-portfolio.herokuapp.com/">here</a>.
				</Body>
				<Spacer />
				<Body>
					After learning enough React to make updates to my personal website, I wanted to code a site from scratch. With Mariah's site, I tried to apply a visual system that showed more personality than the black and white Squarespace.
				</Body>
				<Spacer />
				<Body>
					One challenge that I faced here and not with my own website was organizing the categories of projects - copy writing vs. editorial. I put each of these in a corner of the desktop site so that when viewers move back and forth across the page they discover the interactive elements.
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/380932381?autoplay=1&loop=1"
					title="Home Page Demo"
				/>
				<VideoPlayer
					src="https://player.vimeo.com/video/380932474?autoplay=1&loop=1"
					title="About Me Page Demo"
				/>
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

export default injectSheet(styles)(Portfolio)
