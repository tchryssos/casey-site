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
import SubHeading from 'components/Typography/SubHeading'
import VideoPlayer from 'components/VideoPlayer'
import ItemGrid from 'components/ItemGrid'

import OGELO from 'static/images/ELO/Og-elo.png'
import ELOWireframes from 'static/images/ELO/elo-wireframes.png'
import ELOWhiteboard from 'static/images/ELO/elo-whiteboard.png'
import ELOHiDef1 from 'static/images/ELO/hidef-1.png'
import ELOHiDef2 from 'static/images/ELO/hidef-2.png'
import ELOStorybook from 'static/images/ELO/elo-storybook.png'
import ELODirections from 'static/images/ELO/elo-directions.png'
import ELOAltLogo from 'static/images/ELO/elo-alt-logos.png'
import ELOLogo from 'static/images/ELO/elo-logo.png'
import ELOStyle from 'static/images/ELO/elo-styleguide.png'
import Test from 'static/images/ELO/test.png'

const useStyles = createUseStyles({
	headerColor: {
		backgroundColor: '#fad793',
		[MD_MIN_STRING]: {
			paddingTop: 150,
		},
	},
	wireFrameBlock: {
		backgroundColor: '#4fa0f4',
	},
	half: {
		width: '50%',
	},
	visualDesignBlock: {
		backgroundColor: '#fad793',
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.headerColor}>
				<ItemGrid>
					<div className={classes.half}>
						<Heading>Ladders ELO Tracker</Heading>
						<Spacer />
						<Body>
							Ladders is a platform that allows people playing any game together to track their ranking among the group. Users enter who won and lost each match and we use the ELO rating system to adjust their ELO score and rank. This product…
						</Body>
						<Spacer />
						<Body>
							Role: Product Designer
						</Body>
					</div>
					<Image size="half" src={Test} />
				</ItemGrid>
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<SubHeading>THE PRODUCT</SubHeading>
				<Spacer />
				<Body>
					This project was something that a friend started as a personal project so him and his coworkers could track their rankings while they played Super Smash Bros. Below is the first very simple prototype he built. After using it, we decided we wanted to make it available for multiple games and multiple users.
				</Body>
				<Image bordered size="full" src={OGELO} />
				<Spacer />
				<Spacer />
				<SubHeading>SCALING THE PRODUCT</SubHeading>
				<Spacer />
				<Body>
					After a few iterations, we recruited our friend who is a backend developer to round out our product team and help us execute on a more robust user experience. Here we created a brand new product roadmap, mapping out all of the features we needed for an MVP.
				</Body>
				<Image size="full" src={ELOWhiteboard} bordered />
				<Spacer />
			</ContentBlock>
			<ContentBlock className={classes.wireFrameBlock}>
				<SubHeading>WIREFRAMES AND USABILITY TESTING</SubHeading>
				<Spacer />
				<Body>
					I kicked off the project by creating a wireframe prototype that we could test for usability. During this phase, we discovered a lot of user needs based around adding and deleting players from a group.
				</Body>
				<Image size="full" src={ELOWireframes} bordered />
				<VideoPlayer
					src="https://player.vimeo.com/video/390019243?loop=1"
					title="Musical rug demo"
					aspectRatio="1:1"
				/>
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<SubHeading>EXPLORING VISUAL DIRECTIONS</SubHeading>
				<Spacer />
				<Body>
					For this project we explored 3 different visual directions. One that used relied heavily on the dark mode aesthetic we saw a lot in the space, one that used a blue mode to keep the accessibily of dark mode but allo wus to stand out and one that went entirely out of the box.
				</Body>
				<Image size="full" src={ELODirections} bordered />
				<Spacer />
				<Spacer />
				<SubHeading>LOGO AND STYLE GUIDE</SubHeading>
				<Spacer />
				<Body>
					We developed a list of many names for for the platform and once we landed on Ladders we created multiple logo options below.
				</Body>
				<Image size="full" src={ELOAltLogo} />
				<Spacer />
				<Body>
					Below are the final logos.
				</Body>
				<Image size="full" src={ELOLogo} />
				<Image size="full" src={ELOStyle} bordered />
				<Spacer />
				<Spacer />
			</ContentBlock>
			<ContentBlock className={classes.visualDesignBlock}>
				<SubHeading>FINAL VISUAL DESIGN</SubHeading>
				<Spacer />
				<Image size="full" src={ELOHiDef1} />
				<Image size="full" src={ELOHiDef2} />
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<SubHeading>STORYBOOK PRODUCTION</SubHeading>
				<Spacer />
				<Body>
					We used Storybook to build and design all of the components.
				</Body>
				<Image size="full" src={ELOStorybook} />
				<Spacer />
				<Spacer />
				<SubHeading>This project is ongoing! We are currently in production.</SubHeading>
				<Spacer />
				<Spacer />
			</ContentBlock>
		</PageWrapper>
	)
}
