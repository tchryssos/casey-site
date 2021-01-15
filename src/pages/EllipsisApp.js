import React from 'react'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { NavLink } from 'react-router-dom'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import VideoPlayer from 'components/VideoPlayer'
import ItemGrid from 'components/ItemGrid'
import NextProject from 'components/NextProject'

import Flow from 'static/images/EllipsisApp/EH_userflow-03.png'
import Wires from 'static/images/EllipsisApp/wires2.png'
import Tests from 'static/images/EllipsisApp/Tests.png'
import Iterations from 'static/images/EllipsisApp/Iterations.png'
import Starting from 'static/images/EllipsisApp/starting2.png'
import Prototype1 from 'static/images/EllipsisApp/prototype_1.png'
import Prototype2 from 'static/images/EllipsisApp/prototype_2.png'
import Hero from 'static/images/EllipsisApp/eh_app_hero.gif'

const useStyles = createUseStyles({
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
	aboutLink: {
		textDecoration: 'none',
		borderBottom: '2px solid blue',
		color: 'blue',
	},
	blue: {
		backgroundColor: '#e0eeffff',
	},
	hero: {
		backgroundColor: '#81de80',
	},
})

const EllipsisApp = () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.hero}>
				<ItemGrid>
					<div className={classes.half}>
						<Heading>
							Ellipsis Health is an AI that can diagnose anxiety and depression
							with 2-3 minutes of voice data
						</Heading>
						<Spacer />
						<Body>
							While their technology is used often by clinicians, I worked with
							the Head of Product to make their voice assessment available in a
							more digestible format that can be used by insurers, schools, and
							individuals.
						</Body>
					</div>
					<Image src={Hero} className={classes.half} size="full" />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Main Goal</SubHeading>
				<Heading>Create an easy to use voice recording assessment</Heading>
				<Spacer />
				<ItemGrid>
					<div className={classes.half}>
						<SubHeading>Jumping off point</SubHeading>
						<Body>
							I worked with Ellipsis Health&apos;s Head of Product to clean up
							and expand upon rough sketches of the app that he put together. We
							also started with the criteria that users must speak for 2-3
							minutes and answer at least two questions to complete the
							assessment.
						</Body>
					</div>
					<Image src={Starting} size="full" className={classes.half} />
				</ItemGrid>
				<Spacer />
				<SubHeading>Our User</SubHeading>
				<Body>
					Our user is most often defined as a young professional who is
					experiencing the side effects of mental health issues for the first
					time. They may want to dip their toes into the mental health space or
					start to create some habits around their behavior health. These
					iterations of the assessment will be used by insurance providers and
					schools to help their audiences learn more about themselves.
				</Body>
				<Spacer />
				<SubHeading>Design Process</SubHeading>
				<Body>
					I started by sketching out the main user flow for completing the
					assessment. Pen and paper sketch became a rough sketch in Figma, and
					then became a more robust wireframe and prototype before we tackled
					visual designs.
				</Body>
				<Spacer />
				<Image src={Flow} size="full" />
				<Image src={Wires} size="full" />
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Bringing the app to life</SubHeading>
				<Heading>Visual Design Exploration</Heading>
				<Spacer />
				<Body>
					I created two visual design directions for feedback from the team and
					users. The first was a blue direction that was more inline with the
					Eliipsis Health brand guidelines and very cohesive with their&nbsp;
					<NavLink className={classes.aboutLink} to="/ellipsis">
						website
					</NavLink>
					&nbsp;which I designed. For the second I wanted to test a warmer
					palette to be more inline with other wellness apps out there and
					create a more uplifting experience.
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/498482895"
					title="Two Visual Directions"
				/>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>User Testing</SubHeading>
				<Heading>Informing decisions with data</Heading>
				<Spacer />
				<Body>
					We created prototypes from both of the visual directiosn to get user
					feedback on. In each there were some variations to the experience we
					wanted to test. You can see the variations and winners below
				</Body>
				<Image src={Tests} size="full" />
			</ContentBlock>
			<ContentBlock className={classes.blue}>
				<SubHeading>Iterating based on Feedback</SubHeading>
				<Heading>Improving the user experience</Heading>
				<Spacer />
				<Body>
					In testing the assessment we learned that while some users were
					anxious about whether or not they were doing it right and wanted some
					additional feedback, others felt like they wanted to talk longer than
					three minutes but were being rushed to finish. Because of this
					feedback we decided to explore how to show progress and balance these
					two user needs.
				</Body>
				<Spacer />
				<SubHeading>Exploring how we show progress</SubHeading>
				<Body>
					Below are multiple iterations we explored focused on showing progress
					but not being too pushy about finishing.
				</Body>
				<Spacer />
				<Image src={Iterations} size="full" />
				<Spacer />
				<SubHeading>Our Solution</SubHeading>
				<Body>
					Our ultimate solution included helper text surrounding the record
					button to let users know what was happening and how far along they
					were. We kept an animated wave form to signal recording.
				</Body>
				<Image src={Prototype1} size="full" />
				<Image src={Prototype2} size="full" />
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Results</SubHeading>
				<Heading>Onboard, Assess, Submit</Heading>
				<Spacer />
				<Body>
					Below is a video of the prototype I created to pass off to the
					Ellipsis team.
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/498984190"
					title="Prototype"
				/>
				<Spacer />
				<SubHeading>Looking Forward</SubHeading>
				<Body>
					Having a great response to the roll outs of this assessment, I am
					currently working with Ellipsis to create a more robust direct to
					consumer wellness app.
				</Body>
			</ContentBlock>
			<NextProject link="/flatiron-school-marketing" />
		</PageWrapper>
	)
}

export default EllipsisApp
