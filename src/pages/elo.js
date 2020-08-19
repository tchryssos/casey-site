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
import ELOAltLogo from 'static/images/ELO/elo-alt-logos.png'
import ELOLogoBlack from 'static/images/ELO/elo-logo-01.png'
import ELOLogoYellow from 'static/images/ELO/elo-logo-02.png'
import Test from 'static/images/ELO/test.png'
import UserFlow from 'static/images/ELO/userflow-03.png'
import NewWires from 'static/images/ELO/new_flow.png'
import ReturningWires from 'static/images/ELO/returning_flow.png'
import UIKit from 'static/images/ELO/UIKit_2.png'

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
				<ItemGrid>
					<div className={classes.half}>
						<Body>
							This project was something that a friend started as a personal project so he and his coworkers could track their rankings while they played Super Smash Bros. Below is the first very simple prototype he built. After doing some user testing with his friends, we decided we wanted to make it available for multiple games and multiple users.
						</Body>
					</div>
					<Image size="full" src={OGELO} className={classes.half} />
				</ItemGrid>
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
							I want to try this new tool to track my game
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
							I just beat my friend at a game andI need to
							submit this match and see how it affects my ranking
						</SubHeading>
					</div>
					<div className={classes.half}>
						<Image src={UserFlow} size="full" />
					</div>
				</ItemGrid>
				<Body>Returning User Task Wireframes</Body>
				<Image src={ReturningWires} size="full" />
				<Body>Prototype for testing</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/448970796?loop=1"
					title="Prototype Animation"
					aspectRatio="1:1"
				/>
			</ContentBlock>
			<ContentBlock>
				<Heading>Creating a visual design system</Heading>
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
				<Spacer height={2} />
				<SubHeading>Cohesive UI Kit</SubHeading>
				<Image src={UIKit} size="full" />
			</ContentBlock>
			<ContentBlock className={classes.visualDesignBlock}>
				<Heading>Final UI Designs</Heading>
				<Spacer />
				<Image size="full" src={ELOHiDef1} />
				<Image size="full" src={ELOHiDef2} />
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<Heading>Testing for Validation and Usability</Heading>
				<Body>
					I had each participant complete the tasks for both new and returning users. I observed them complete the tasks over Zoom.
				</Body>
				<Spacer />
				<SubHeading>
					100% of the users completed both tasks with no problems
				</SubHeading>
				<Spacer />
				<SubHeading>
					Multiple paths to completion
				</SubHeading>
				<Body>
					I built the forms so that if a new user clicked the Submit a Match button and did not yet have any games set up they could be redirected to complete that form first. During testing, participants used both pathways to complete the task validating this choice.
				</Body>
				<Spacer />
				<SubHeading>
					Too many options
				</SubHeading>
				<Body>
					Initially I added a setting for volatility when users were setting up a ranking board. This setting was meant to affect how much each game changed the rankings. Most participants were a little confused about this setting so I ultimately decided to remove it or build it in to advanced settings later.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>Key Learnings</Heading>
				<Spacer />
				<SubHeading>
					User Centered Approach to a Roadmap
				</SubHeading>
				<Body>
					Working closely with developers on this project I had a tendency to lean into a developer or business mindset to planning the roadmap. I was creating priority between sign-up and login pages but shifted my mindset to think about the flows that were most necessary and valuable to the user.
				</Body>
				<Spacer />
				<ItemGrid>
					<div className={classes.half}>
						<SubHeading>Coding Skills</SubHeading>
						<Body>
							As a designer with some coding skills working with a small team of 2 developers to build an entire app, I also put my coding skills to the test, styling and building simple elements in our Storybook using React.
						</Body>
					</div>
					<Image src={ELOStorybook} className={classes.half} />
				</ItemGrid>
				<Spacer />
				<SubHeading>End to End App</SubHeading>
				<Body>
					Creating something from scratch can be overwhelming at times but always rewarding. I found that focusing on what would be the most valuable to the user and testing those interactions helped me reign myself in from taking on too much right out of the gate.
				</Body>
			</ContentBlock>
		</PageWrapper>
	)
}
