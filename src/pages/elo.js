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
import ItemGrid from 'components/ItemGrid'
import VideoPlayer from 'components/VideoPlayer'

import OGELO from 'static/images/ELO/Og-elo.png'
import ELOHiDef1 from 'static/images/ELO/ladders_hidef_1.png'
import ELOHiDef2 from 'static/images/ELO/ladders_hidef_2.png'
import ELOStorybook from 'static/images/ELO/elo-storybook.png'
import ELODirections from 'static/images/ELO/elo-directions.png'
import ELOAltLogo from 'static/images/ELO/elo-alt-logos.png'
import ELOLogoBlack from 'static/images/ELO/elo-logo-01.png'
import ELOLogoYellow from 'static/images/ELO/elo-logo-02.png'
import Test from 'static/images/ELO/test.png'
import UserFlow from 'static/images/ELO/userflow-03.png'
import NewWires from 'static/images/ELO/new_flow.png'
import ReturningWires from 'static/images/ELO/returning_flow.png'

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
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
	visualDesignBlock: {
		backgroundColor: '#f5b142',
	},
	highlight: {
		backgroundColor: 'yellow',
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.headerColor}>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Heading>
							Ladders allows people playing games together to track their ranking among the group
						</Heading>
						<Spacer />
						<Spacer />
						<SubHeading>
							Role: Product Designer
						</SubHeading>
					</div>
					<Image className={classes.half} src={Test} />
				</ItemGrid>
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<Heading>
					How do you know who the best player is?
				</Heading>
				<Spacer />
				<Body>
					This project was something that a friend started as a personal project so he and his coworkers could track their rankings while they played Super Smash Bros. Below is the first very simple prototype he built. After doing some user testing with his friends, we decided we wanted to make it available for multiple games and multiple users.
				</Body>
				<Image size="full" src={OGELO} />
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<Heading>Understanding the user</Heading>
				<Spacer />
				<SubHeading>Persona</SubHeading>
				<SubHeading>Competitive Research</SubHeading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Building with a user-centered approach</Heading>
				<Spacer />
				<Body>The first and most important task that I focused on was allowing users to submit whether they won or lost a game. After I got some feedback on this flow, I decided to map out the flow for someone using the app for the first time to set up a game as a second priority.</Body>
				<ItemGrid>
					<div className={classes.half}>
						<Body>NEW USER TASK</Body>
						<SubHeading>
							<span className={classes.highlight}>I want to</span>
							&nbsp;try this new tool to track my game
						</SubHeading>
					</div>
					<div className={classes.half}>
						<Image src={UserFlow} size="full" />
					</div>
				</ItemGrid>
				<Body>New User Task Wireframes</Body>
				<Image src={NewWires} size="full" />
				<Body>Prototype for testing</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/448968438?loop=1"
					title="Prototype Animation"
					aspectRatio="1:1"
				/>
				<ItemGrid>
					<div className={classes.half}>
						<Body>RETURNING USER TASK</Body>
						<SubHeading>
							I just beat my friend at a game and&nbsp;
							<span className={classes.highlight}>I need to</span>
							&nbsp;submit this match and see how it affects my ranking
						</SubHeading>
					</div>
					<div className={classes.half}>
						<Image src={UserFlow} size="full" />
					</div>
				</ItemGrid>
				<Body>Returning User Task Wireframes</Body>
				<Image src={ReturningWires} size="full" />
				<Body>Prototype for testing</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>Exploring Visual Directions</Heading>
				<Spacer />
				<Body>
					For this project we explored 3 different visual directions. One that used relied heavily on the dark mode aesthetic we saw a lot in the space, one that used a blue mode to keep the accessibily of dark mode but allo wus to stand out and one that went entirely out of the box.
				</Body>
				<Image size="full" src={ELODirections} />
				<Spacer />
				<Spacer />
				<SubHeading>Creating a logo</SubHeading>
				<Spacer />
				<Body>
					We developed a list of many names for for the platform and once we landed on Ladders we created multiple logo options below.
				</Body>
				<Image size="full" src={ELOAltLogo} />
				<Spacer />
				<ItemGrid>
					<Image size="half" src={ELOLogoBlack} />
					<Image size="half" src={ELOLogoYellow} />
				</ItemGrid>
				<Spacer />
				<Spacer />
			</ContentBlock>
			<ContentBlock className={classes.visualDesignBlock}>
				<Heading>Final UI Designs</Heading>
				<Spacer />
				<Image size="full" src={ELOHiDef1} />
				<Image size="full" src={ELOHiDef2} />
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<Heading>Storybook Production</Heading>
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
