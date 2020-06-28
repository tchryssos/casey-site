import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

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
import OldProjectPage from 'static/images/Portfolio/old-project-page.png'
import FISMPage from 'static/images/Portfolio/portfolio-fism.png'
import LaddersPage from 'static/images/Portfolio/portfolio-ladders.png'
import HeaderCode from 'static/images/Portfolio/portfolio-header-01.png'
import HeaderSite from 'static/images/Portfolio/portfolio-header-02.png'
import HeaderTerm from 'static/images/Portfolio/portfolio-header-03.png'

const useStyles = createUseStyles({
	'@keyframes shake3': {
		'0%': { transform: 'translate(38px, 98px) rotate(1deg)' },
		'10%': { transform: 'translate(40px, 101px) rotate(0deg)' },
		'20%': { transform: 'translate(40px, 97px) rotate(-1deg)' },
		'30%': { transform: 'translate(40px, 100px) rotate(0deg)' },
		'40%': { transform: 'translate(38px, 97px) rotate(-1deg)' },
		'50%': { transform: 'translate(36px, 99px) rotate(1deg)' },
		'60%': { transform: 'translate(42px, 101px) rotate(0deg)' },
		'70%': { transform: 'translate(40px, 99px) rotate(1deg)' },
		'80%': { transform: 'translate(38px, 101px) rotate(-1deg)' },
		'90%': { transform: 'translate(36px, 100px) rotate(0deg)' },
		'100%': { transform: 'translate(42px, 100px) rotate(-1deg)' },
	},
	'@keyframes shake2': {
		'0%': { transform: 'translate(74px, -49px) rotate(-1deg)' },
		'10%': { transform: 'translate(72px, -48px) rotate(0deg)' },
		'20%': { transform: 'translate(78px, -48px) rotate(-1deg)' },
		'30%': { transform: 'translate(74px, -50px) rotate(1deg)' },
		'40%': { transform: 'translate(76px, -47px) rotate(0deg)' },
		'50%': { transform: 'translate(76px, -51px) rotate(-1deg)' },
		'60%': { transform: 'translate(75px, -50px) rotate(0deg)' },
		'70%': { transform: 'translate(73px, -53px) rotate(-1deg)' },
		'80%': { transform: 'translate(71px, -51px) rotate(1deg)' },
		'90%': { transform: 'translate(78px, -49px) rotate(0deg)' },
		'100%': { transform: 'translate(76px, -52px) rotate(1deg)' },
	},
	'@keyframes shake1': {
		'0%': { transform: 'translate(-75px, 25px) rotate(0deg)' },
		'10%': { transform: 'translate(-76px, 23px) rotate(-1deg)' },
		'20%': { transform: 'translate(-78px, 23px) rotate(1deg)' },
		'30%': { transform: 'translate(-72px, 25px) rotate(0deg)' },
		'40%': { transform: 'translate(-74px, 22px) rotate(1deg)' },
		'50%': { transform: 'translate(-76px, 25px) rotate(-1deg)' },
		'60%': { transform: 'translate(-78px, 24px) rotate(0deg)' },
		'70%': { transform: 'translate(-72px, 24px) rotate(-1deg)' },
		'80%': { transform: 'translate(-68px, 22px) rotate(1deg)' },
		'90%': { transform: 'translate(-70px, 23px) rotate(0deg)' },
		'100%': { transform: 'translate(-75px, 25px) rotate(-1deg)' },
	},
	headerBackgroundColor: {
		backgroundColor: '#4e7fff',
	},
	filterBlock: {
		backgroundColor: '#da8c43',
	},
	imageContainer: {
		position: 'relative',
	},
	headerImg: {
		position: 'absolute',
	},
	headerCode: {
		position: 'absolute',
		width: 200,
		height: 100,
		transform: 'translate(-75px, 25px)',
		animation: '$shake1 8s infinite',
	},
	headerSite: {
		position: 'absolute',
		width: 200,
		height: 100,
		transform: 'translate(75px, -50px)',
		animation: '$shake2 8s infinite',
	},
	headerTerm: {
		position: 'absolute',
		width: 100,
		height: 100,
		transform: 'translate(40px, 100px)',
		animation: '$shake3 8s infinite',
	},
	animationContainer: {

	},
	half: {
		width: '100%',
		height: 200,
		marginBottom: 64,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
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
					<div
						className={clsx(
							classes.half,
							classes.imageContainer,
						)}
					>
						<Heading>Building this website!</Heading>
					</div>
					<div className={classes.half}>
						<Image
							src={HeaderSite}
							className={classes.headerSite}
						/>
						<Image
							src={HeaderCode}
							className={classes.headerCode}
						/>
						<Image
							src={HeaderTerm}
							className={classes.headerTerm}
						/>
					</div>
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
					After hiring graphic designers for my team, I was shocked at how similar all of the portfolios I was looking at were. To lower the bounce rate of hiring managers looking at my website, I wanted to create a home page that was more interesting and interactive than the sea of squarespaces.
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
			<ContentBlock className={classes.contentStrategyBlock}>
				<SubHeading>GOAL #4</SubHeading>
				<Spacer />
				<Heading>Create a clear content strategy for each page</Heading>
				<Spacer />
				<Body>
					In the first iteration of the site, I focused on templatizing the project pages to reduce the amount of developer resources I would need. After learning more React myself, I wanted to tailor the pages more to the projects and make them easier to read for hiring managers.
				</Body>
				<Spacer />
				<Body>
					In the first iteration of the site every page had two components - a description on the left and a scrolling content area witha stream of text and images.
				</Body>
				<Spacer />
				<Image src={OldProjectPage} size="full" bordered />
				<Spacer />
				<Body>
					In version 2, I created components that would help differentiate the pages and make them more digestible to a user.
				</Body>
				<ItemGrid>
					<Image size="half" src={LaddersPage} />
					<Image size="half" src={FISMPage} />
				</ItemGrid>
			</ContentBlock>
		</PageWrapper>
	)
}
