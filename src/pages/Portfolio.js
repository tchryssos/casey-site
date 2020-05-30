import React from 'react'
import { createUseStyles } from 'react-jss'

import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import VideoPlayer from 'components/VideoPlayer'
import SubHeading from 'components/Typography/SubHeading'

import MyProblem from 'static/images/Portfolio/problemGif-01.gif'

const useStyles = createUseStyles({
	headerBackgroundColor: {
		backgroundColor: '#4e7fff',
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.headerBackgroundColor}>
				<Heading>A story about building this website</Heading>
			</ContentBlock>
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
		</PageWrapper>
	)
}
