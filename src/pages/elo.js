import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

import useScrollingText from 'effects/useScrollingText'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import SubHeading from 'components/Typography/SubHeading'
import ItemGrid from 'components/ItemGrid'
import VideoPlayer from 'components/VideoPlayer'

import ELOStorybook from 'static/images/ELO/elo-storybook.png'
import ELOAltLogo from 'static/images/ELO/elo-alt-logos.png'
import ELOLogoBlack from 'static/images/ELO/elo-logo-01.png'
import ELOLogoYellow from 'static/images/ELO/elo-logo-02.png'
import Test from 'static/images/ELO/test.png'
import UserFlow from 'static/images/ELO/userflow-03.png'
import UserFlow2 from 'static/images/ELO/userflow-returning.png'
import NewWires from 'static/images/ELO/newUserWires.png'
import ReturningWires from 'static/images/ELO/returningUserWires.png'
import UIKit from 'static/images/ELO/UIKit_2.png'
import Visual1 from 'static/images/ELO/sideBySide-01.png'
import Visual2 from 'static/images/ELO/sideBySide-02.png'

const useStyles = createUseStyles({
	headerColor: {
		backgroundColor: '#fad793',
		[MD_MIN_STRING]: {
			paddingTop: 100,
		},
	},
	lightYellow: {
		backgroundColor: '#fad793',
	},
	whiteBlock: {
		backgroundColor: 'white',
	},
	blueBackground: {
		backgroundColor: '#b4e0ff',
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
	visualDesignBlock2: {
		backgroundColor: '#595959',
	},
	scrollTextPadding: {
		[MD_MIN_STRING]: {
			paddingTop: 150,
			transform: 'translateY(-100px)',
		},
	},
})

export default () => {
	const classes = useStyles()

	// START - PAGE SCROLL LOGIC - START
	const scrollingContainer = useRef()
	const scrollingTextContainer = useRef()
	useScrollingText(scrollingContainer, scrollingTextContainer)

	const scrollingContainer2 = useRef()
	const scrollingTextContainer2 = useRef()
	useScrollingText(scrollingContainer2, scrollingTextContainer2)
	// END - PAGE SCROLL LOGIC - END

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
				<Body>
					xyz fgh
				</Body>
			</ContentBlock>
			<ContentBlock className={classes.whiteBlock}>
				<Heading>Understanding the user</Heading>
				<Spacer />
				<div className={classes.lightYellow}>
					<ItemGrid>
						<div className={classes.half}>
							<div>
								photo
							</div>
							<div>
								<Heading>Sam</Heading>
								<SubHeading>The Avid Gamer</SubHeading>
							</div>
						</div>
						<div className={classes.half}>
							<SubHeading>Goals</SubHeading>
							<ul>
								<li>
									Improve skills at playing certain games and gauge that improvement
								</li>
								<li>
									Have some competitive fun
								</li>
							</ul>
							<SubHeading>Frustrations</SubHeading>
							<ul>
								<li>
									Entering info quickly and easily
								</li>
								<li>
									Mobile experience
								</li>
								<li>
									Seeing change in data over time
								</li>
							</ul>
							<SubHeading>Motivations</SubHeading>
							<ul>
								<li>
									Winning
								</li>
								<li>
									Improving skills
								</li>
								<li>
									Prizes and bets
								</li>
							</ul>
						</div>
					</ItemGrid>
				</div>
				<Spacer />
				<SubHeading>Competitive Research</SubHeading>
			</ContentBlock>
			<ContentBlock className={classes.blueBackground}>
				<Heading>Building with a user-centered approach</Heading>
				<Spacer />
				<Body>The first and most important task that I focused on was allowing users to submit whether they won or lost a game. After I got some feedback on this flow, I decided to map out the flow for someone using the app for the first time to set up a game as a second priority.</Body>
				<div ref={scrollingContainer}>
					<ItemGrid stackedOnMobile startAligned>
						<div
							ref={scrollingTextContainer}
							className={clsx(
								classes.half,
								classes.scrollTextPadding,
							)}
						>
							<Body>NEW USER TASK</Body>
							<SubHeading>
								I want to try this new tool to track my game
							</SubHeading>
						</div>
						<div className={classes.half}>
							<Image src={UserFlow} size="full" />
						</div>
					</ItemGrid>
				</div>
				<Spacer />
				<Body>New User Task Wireframes</Body>
				<Image src={NewWires} size="full" />
				<Body>Prototype for testing</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/448968438?loop=1"
					title="Prototype Animation"
					aspectRatio="1:1"
				/>
				<div ref={scrollingContainer2}>
					<ItemGrid stackedOnMobile startAligned>
						<div
							ref={scrollingTextContainer2}
							className={clsx(
								classes.half,
								classes.scrollTextPadding,
							)}
						>
							<Body>RETURNING USER TASK</Body>
							<SubHeading>
								I just beat my friend at a game andI need to
								submit this match and see how it affects my ranking
							</SubHeading>
						</div>
						<div className={classes.half}>
							<Image src={UserFlow2} size="full" />
						</div>
					</ItemGrid>
				</div>
				<Spacer />
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
			<ContentBlock className={classes.whiteBlock}>
				<Heading>Final UI Designs</Heading>
				<Spacer />
				<Image size="full" src={Visual1} />
				<Image size="full" src={Visual2} />
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
			<ContentBlock className={classes.lightYellow}>
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
