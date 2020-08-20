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
import UIKit from 'static/images/ELO/UIKit_2.png'
import Visual1 from 'static/images/ELO/sideBySide-01.png'
import Visual2 from 'static/images/ELO/sideBySide-02.png'
import Competitors from 'static/images/ELO/competitors-01.png'
import WireDisabled from 'static/images/ELO/wire.png'
import finalflow from 'static/images/ELO/final.png'
import complexWire from 'static/images/ELO/complexWire.png'


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
	persona: {
		backgroundColor: '#fad793',
		padding: 16,
		borderRadius: 10,
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
	highlight: {
		backgroundColor: 'white',
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
				<SubHeading>Main Goal</SubHeading>
				<Spacer />
				<Body>
					Define and build out an MVP of the product that will allow people playing games together to track their ranking among the group.
				</Body>
			</ContentBlock>
			<ContentBlock className={classes.whiteBlock}>
				<Heading>Understanding the user</Heading>
				<Spacer />
				<Body>
					I interviewed a handful of people who play games with freinds regularly and used their statements to create the following persona.
				</Body>
				<Spacer />
				<div className={classes.persona}>
					<ItemGrid>
						<div className={classes.half}>
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
				<Spacer height={3} />
				<SubHeading>What are people using now?</SubHeading>
				<Spacer />
				<Body>
					People who are tracking games now, are using tools as simple as the notes app so we have to make sure that using this app is just as easy. More serious gamers are using very complex tools like Challonge where leaderboards are hidden behind complicated UI.
				</Body>
				<Image src={Competitors} size="full" />
			</ContentBlock>
			<ContentBlock className={classes.blueBackground}>
				<Heading>Building with a user-centered approach</Heading>
				<Spacer />
				<Spacer height={2} />
				<Body>THE MAIN USER TASK</Body>
				<SubHeading>
					I just beat my friend at a game and&nbsp;
					<span className={classes.highlight}>&nbsp;I need to&nbsp;</span>
					&nbsp;submit this match and see how it affects my ranking
				</SubHeading>
				<Spacer />
				<ItemGrid>
					<div className={classes.half}>
						<SubHeading>
							Iterating on wireframes
						</SubHeading>
						<Spacer />
						<Body>
							Originally I wanted to lead new users to create a leaderboard before they could submit a match by disabling some CTAs and highlighting others. I quickly realized that I could let the user click where they wanted to if I could help navigate them to complete the necessary tasks in the back end.
						</Body>
					</div>
					<Image src={WireDisabled} size="full" className={classes.half} />
				</ItemGrid>
				<SubHeading>Ajdusting for a user-centered experience</SubHeading>
				<Spacer />
				<Body>
					I adjusted this flow so that before filling out the form to submit a match, users had to select a game. If there were no games, I could populate the form to create a game instead of blocking pathways that a user would want to take.
				</Body>
				<Image src={finalflow} size="full" />
				<SubHeading>
					Building functional prototypes
				</SubHeading>
				<Spacer />
				<Body>
					To test these flows I built out two prototypes
				</Body>
				<Image src={complexWire} size="full" />
				<VideoPlayer
					src="https://player.vimeo.com/video/448968438?loop=1"
					title="Prototype Animation"
					aspectRatio="1:1"
				/>
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
