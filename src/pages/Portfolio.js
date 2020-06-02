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
import ItemGrid from 'components/ItemGrid'

import Filter from 'static/images/Portfolio/portfolio-filter.png'
import HeaderImage from 'static/images/Portfolio/portfolio-header.gif'

const useStyles = createUseStyles({
	headerBackgroundColor: {
		backgroundColor: '#4e7fff',
	},
	filterBlock: {
		backgroundColor: '#da8c43',
	},
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.headerBackgroundColor}>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Heading>Building this website!</Heading>
					</div>
					<Image className={classes.half} src={HeaderImage} />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>GOAL #1</SubHeading>
				<Spacer />
				<Heading>Make my portfolio stand out from the crowd</Heading>
				<VideoPlayer
					src="https://player.vimeo.com/video/380927071?autoplay=1&loop=1"
					title="Home Me Page Demo"
				/>
				<Spacer />
				<Body>
					After hiring graphic designers for my team, I was shocked at how similar all of the portfolios I was looking at were. To lower the bounch rate of hiring managers looking at my website, I wanted to create a home page that was more interesting and interactive than the sea of squarespaces.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>GOAL #2</SubHeading>
				<Spacer />
				<Heading>Embed personality and tell a hiring manager more about myself</Heading>
				<VideoPlayer
					src="https://player.vimeo.com/video/380927068?autoplay=1&loop=1"
					title="About Me Page Demo"
				/>
				<Spacer />
				<Body>
					Since humans are visual learners, I decided not to write a bio about myself. Instead I included a CTA to click anywhere and created stickers that could tell a user more about me.
				</Body>
			</ContentBlock>
			<ContentBlock className={classes.filterBlock}>
				<SubHeading>GOAL #3</SubHeading>
				<Spacer />
				<Heading>Clearly differentiate graphic and product design work</Heading>
				<Spacer />
				<Image src={Filter} size="full" />
				<Body>
					While navigating the transition from Graphic Design to Product Design, I was accepting both kind of jobs. In order to make it easier for hiring managers and mentors to find the appropriate work more quickly, I added a filter to the homepage.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>GOAL #4</SubHeading>
				<Spacer />
				<Heading>Create a clear content strategy for each page</Heading>
				<Spacer />
				<Body>
					In the first iteration of the site, I focused on templatizing the project pages to reduce the amount of developer resources I would need. After learning more React myself, I wanted to tailor the pages more to the projects and make them easier to read for hiring managers.
				</Body>
			</ContentBlock>
		</PageWrapper>
	)
}
