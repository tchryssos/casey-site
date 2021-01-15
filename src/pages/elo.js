import React from 'react'
import { createUseStyles } from 'react-jss'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import SubHeading from 'components/Typography/SubHeading'
import ItemGrid from 'components/ItemGrid'
import VideoPlayer from 'components/VideoPlayer'
import PageNav from 'components/PageNav'
import NextProject from 'components/NextProject'

import ELOStorybook from 'static/images/ELO/elo-storybook.png'
import ELOAltLogo from 'static/images/ELO/elo-alt-logos.png'
import ELOLogoBlack from 'static/images/ELO/elo-logo-01.png'
import ELOLogoYellow from 'static/images/ELO/elo-logo-02.png'
import Hero from 'static/images/ELO/hero.png'
import UIKit from 'static/images/ELO/UIKit_2.png'
import Visual1 from 'static/images/ELO/sideBySide-01.png'
import Visual2 from 'static/images/ELO/sideBySide-02.png'
import WireDisabled from 'static/images/ELO/wire.png'
import finalflow from 'static/images/ELO/elo-wires-flow.png'
import complexWire from 'static/images/ELO/complexWire.png'
import testingScreenshot from 'static/images/ELO/testingScreenshot.png'
import Persona from 'static/images/ELO/persona.png'
import ScoreKeep from 'static/images/ELO/scorekeep.png'
import OGELO from 'static/images/ELO/Og-elo.png'
import Roadmap from 'static/images/ELO/elo-roadmap.png'
import Directions from 'static/images/ELO/elo-directions.png'
import ELOWire from 'static/images/ELO/elo_wire.png'

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
	personaName: {
		display: 'flex',
		alignItems: 'center',
	},
	personaImage: {
		width: '30%',
		marginRight: 8,
	},
	sectionLabel: {
		backgroundColor: '#4e7fff',
		padding: 8,
		color: 'white',
		whiteSpace: 'nowrap',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 500,
	},
	quote: {
		padding: '24px',
		borderTop: '2px solid black',
		backgroundColor: 'white',
	},
})

export default () => {
	const classes = useStyles()

	const navLinks = [
		{ link: 'brief' },
		{ link: 'discover' },
		{ link: 'define' },
		{ link: 'design' },
		{ link: 'deploy' },
		{ link: 'learn' },
	]

	return (
		<PageWrapper>
			{/* <PageNav navLinkObjects={navLinks} /> */}
			{/* eslint-disable jsx-a11y/anchor-is-valid */}

			{/* START - BRIEF - START */}
			<a name="brief">
				<ContentBlock className={classes.headerColor}>
					<ItemGrid stackedOnMobile>
						<div className={classes.half}>
							<Heading>
								Ladders allows people playing games together to track their
								ranking among the group
							</Heading>
							<Spacer />
							<Spacer />
							<SubHeading>Role: Product Designer</SubHeading>
						</div>
						<Image className={classes.half} src={Hero} />
					</ItemGrid>
				</ContentBlock>
			</a>

			{/* START - RESEARCH - START */}
			<a name="discover">
				<div className={classes.sectionLabel}>DISCOVER</div>
				<ContentBlock className={classes.whiteBlock}>
					<Heading>Defining the problem</Heading>
					<Spacer />
					<ItemGrid>
						<Image src={ScoreKeep} className={classes.half} />
						<div className={classes.half}>
							<SubHeading>What are players using to keep score now?</SubHeading>
							<Spacer />
							<Body>
								One of the most fun parts of playing games in having a little
								bit of competitive fun with friends. The tools available to
								track your score now range from something as simple as pen and
								paper to complex tools used by professional gamers and
								organizations but there&apos;s not much in between the two.
							</Body>
						</div>
					</ItemGrid>
					<Spacer />
					<ItemGrid>
						<div className={classes.half}>
							<SubHeading>Iterating from a first draft</SubHeading>
							<Spacer />
							<Body>
								This is the first draft that the developers working on this
								project orginally built on their own. It only worked for one
								group of friends and one game. This prototype was the jumping
								off point for a more robust project.
							</Body>
						</div>
						<Image src={OGELO} className={classes.half} />
					</ItemGrid>
					<Spacer height={3} />
					<Heading>Define, Research, Define Again</Heading>
					<Spacer />
					<ItemGrid>
						<div className={classes.half}>
							<SubHeading>Building a product roadmap</SubHeading>
							<Spacer />
							<Body>
								In order to take this project to the next level, I sat down with
								the developers to define a set of features we would need. We
								sketched out some flows on a whiteboard and created a list of
								Github Issues to keep track of tasks.
							</Body>
						</div>
						<Image src={Roadmap} className={classes.half} />
					</ItemGrid>
					<Spacer />
					<SubHeading>Putting the user at the center</SubHeading>
					<Spacer />
					<Body>
						After making the long list of needs above, I decided it would be
						more helpful to understand what would be most valuable to the user
						to prioritize our efforts in more of an agile approach.
					</Body>
					<Spacer />
					<Body>
						I interviewed a handful of people who play games with freinds
						regularly and used their statements to create the following persona.
					</Body>
					<Spacer />
					<div className={classes.persona}>
						<ItemGrid>
							<div className={classes.half}>
								<div className={classes.personaName}>
									<Image src={Persona} className={classes.personaImage} />
									<div>
										<Heading>Sam</Heading>
										<SubHeading>The Avid Gamer</SubHeading>
									</div>
								</div>
							</div>
							<div className={classes.half}>
								<SubHeading>Goals</SubHeading>
								<ul>
									<li>
										Improve skills at playing certain games and gauge that
										improvement
									</li>
									<li>Have some competitive fun</li>
								</ul>
								<SubHeading>Frustrations</SubHeading>
								<ul>
									<li>Entering info quickly and easily</li>
									<li>Mobile experience</li>
									<li>Seeing change in data over time</li>
								</ul>
								<SubHeading>Motivations</SubHeading>
								<ul>
									<li>Winning</li>
									<li>Improving skills</li>
									<li>Prizes and bets</li>
								</ul>
							</div>
						</ItemGrid>
					</div>
					<Spacer height={3} />
				</ContentBlock>
			</a>

			{/* START - ARCH - START */}
			<a name="define">
				<div className={classes.sectionLabel}>DEFINE</div>
				<ContentBlock className={classes.blueBackground}>
					<Heading>Building with a user-centered approach</Heading>
					<Spacer />
					<ItemGrid>
						<div className={classes.half}>
							<Body>
								In our original roadmap we focused on including things like
								account setting and log in screens. After auditing this list
								under a more user-centered lens, we decided to focus on the
								flows that were bringing value to the user before getting into
								the nitty gritty details.
							</Body>
						</div>
						<div className={classes.half}>
							<div className={classes.quote}>
								<Heading>
									&ldquo;No one ever says, Oh, I can&apos;t wait to set up this
									new tool&rdquo;
								</Heading>
							</div>
						</div>
					</ItemGrid>
					<Spacer height={3} />
					<Body>THE MAIN USER TASK</Body>
					<SubHeading>
						I just beat my friend at a game and&nbsp;
						<span className={classes.highlight}>&nbsp;I need to&nbsp;</span>
						&nbsp;submit this match and see how it affects my ranking
					</SubHeading>
					<Spacer />
					<>
						<SubHeading>Sketching out our idea</SubHeading>
						<Spacer />
						<Body>
							The developers I was working with had a rough draft of something
							working as seen earlier on this page. Once we decided on the key
							features, I drew out the following screens as a gut check before
							working through wireframes.
						</Body>
						<Spacer />
						<Image src={ELOWire} size="full" />
					</>
					<ItemGrid>
						<div className={classes.half}>
							<SubHeading>Iterating on wireframes</SubHeading>
							<Spacer />
							<Body>
								Originally I wanted to lead new users to create a leaderboard
								before they could submit a match by disabling some CTAs and
								highlighting others. I quickly realized that I could let the
								user click where they wanted to if I could help navigate them to
								complete the necessary tasks in the back end.
							</Body>
						</div>
						<Image src={WireDisabled} size="full" className={classes.half} />
					</ItemGrid>
					<SubHeading>Ajdusting for a user-centered experience</SubHeading>
					<Spacer />
					<Body>
						I adjusted this flow so that before filling out the form to submit a
						match, users had to select a game. If there were no games, I could
						populate the form to create a game instead of blocking pathways that
						a user would want to take.
					</Body>
					<Image src={finalflow} size="full" />
					<SubHeading>Building functional prototypes</SubHeading>
					<Spacer />
					<Body>
						Creating working forms in a prototype was a fun challenge with this
						project that involved a complex prototype full of overlays and hover
						states.
					</Body>
					<Image src={complexWire} size="full" />
				</ContentBlock>
			</a>

			{/* START - BRAND - START */}
			<a name="design">
				<div className={classes.sectionLabel}>DESIGN</div>
				<ContentBlock>
					<Heading>Creating a visual design system</Heading>
					<Spacer />
					<SubHeading>Exploring visual direction</SubHeading>
					<Spacer />
					<Body>
						When designing branding for Ladders, I wanted to explore an option
						that used primarily dark mode because it is a hallmark of video game
						culture. I also wanted to explore a colorful option on the other end
						of the spectrum to emphasize the playfulness surrounding games. What
						I landed on was a combination of both - using dark mode for
						usability but with a bright yellow to add a bold playful pop.
					</Body>
					<Spacer />
					<Body>Previous visual directions</Body>
					<Image src={Directions} size="full" />
					<Spacer />
					<SubHeading>Creating a logo</SubHeading>
					<Spacer />
					<Body>
						We developed a list of many names for for the platform and once we
						landed on Ladders we created multiple logo options below.
					</Body>
					<Spacer />
					<Body>Previous drafts of the logo</Body>
					<Image size="full" src={ELOAltLogo} />
					<Spacer />
					<Body>Final logos</Body>
					<ItemGrid>
						<Image size="half" src={ELOLogoBlack} />
						<Image size="half" src={ELOLogoYellow} />
					</ItemGrid>
					<Spacer height={2} />
					<SubHeading>Cohesive UI Kit</SubHeading>
					<Spacer />
					<Body>
						Below are some examples of components that are repeated throughout
						the experience. I built my original wireframes out using components
						in Figma so that when it came time to add the branding it would be
						very quick and easy to change something once and have it reflected
						everywhere.
					</Body>
					<Image src={UIKit} size="full" />
				</ContentBlock>
				<ContentBlock className={classes.whiteBlock}>
					<Heading>Final UI Designs</Heading>
					<Spacer />
					<Body>
						These are some of the main screens designed in order to test our
						main user flow. I used the yellow brand color to highlight the most
						used CTAs and the user&apos;s ranking among their group.
					</Body>
					<Spacer />
					<Body>
						I used a collapsed version of the logo to give more real estate to
						the valuable information and used a fun font for th eleaderboard
						titles to reflect teh playfulness of gaming.
					</Body>
					<Spacer />
					<Image size="full" src={Visual1} />
					<Image size="full" src={Visual2} />
					<Spacer />
				</ContentBlock>
			</a>

			{/* START - TEST - START */}
			<a name="deploy">
				<div className={classes.sectionLabel}>DEPLOY</div>
				<ContentBlock>
					<Heading>Testing for Validation and Usability</Heading>
					<Spacer />
					<SubHeading>Building functional prototypes</SubHeading>
					<Spacer />
					<Body>
						To test these flows I built out two prototypes - one that mimicked
						the experience for a new user and one for a returning user.
					</Body>
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
					<Spacer />
					<SubHeading>Executing Tests</SubHeading>
					<Spacer />
					<Body>
						I had each participant complete the tasks for both new and returning
						users. I observed them complete the tasks over Zoom using teh above
						prototypes.
					</Body>
					<Spacer />
					<SubHeading>
						100% of the users completed both tasks with no problems
					</SubHeading>
					<Spacer />
					<ItemGrid>
						<div className={classes.half}>
							<SubHeading>Offering multiple paths to completion</SubHeading>
							<Body>
								I built the forms so that if a new user clicked the Submit a
								Match button and did not yet have any games set up they could be
								redirected to complete that form first. During testing,
								participants used both pathways to complete the task validating
								this choice.
							</Body>
						</div>
						<Image
							src={testingScreenshot}
							className={classes.half}
							size="full"
						/>
					</ItemGrid>
					<Spacer />
					<SubHeading>Reducing complexity</SubHeading>
					<Body>
						Initially I added a setting for volatility when users were setting
						up a ranking board. This setting was meant to affect how much each
						game changed the rankings. Most participants were a little confused
						about this setting so I ultimately decided to remove it or build it
						in to advanced settings later.
					</Body>
				</ContentBlock>
			</a>

			{/* START - LEARNINGS - START */}
			<a name="learn">
				<div className={classes.sectionLabel}>LEARN</div>
				<ContentBlock className={classes.lightYellow}>
					<Heading>Key Learnings</Heading>
					<Spacer />
					<SubHeading>User Centered Approach to a Roadmap</SubHeading>
					<Body>
						Working closely with developers on this project I had a tendency to
						lean into a developer or business mindset to planning the roadmap. I
						was creating priority between sign-up and login pages but shifted my
						mindset to think about the flows that were most necessary and
						valuable to the user.
					</Body>
					<Spacer />
					<ItemGrid>
						<div className={classes.half}>
							<SubHeading>Coding Skills</SubHeading>
							<Body>
								As a designer with some coding skills working with a small team
								of 2 developers to build an entire app, I also put my coding
								skills to the test, styling and building simple elements in our
								Storybook using React.
							</Body>
						</div>
						<Image src={ELOStorybook} className={classes.half} />
					</ItemGrid>
					<Spacer />
					<SubHeading>End to End App</SubHeading>
					<Body>
						Creating something from scratch can be overwhelming at times but
						always rewarding. I found that focusing on what would be the most
						valuable to the user and testing those interactions helped me reign
						myself in from taking on too much right out of the gate.
					</Body>
				</ContentBlock>
				<NextProject link="/listen-jay" />
			</a>
		</PageWrapper>
	)
}
