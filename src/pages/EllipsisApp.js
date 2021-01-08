import React from 'react'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'

import Flow from 'static/images/EllipsisApp/EH_userflow-03.png'
import Wires from 'static/images/EllipsisApp/wires.png'
import Tests from 'static/images/EllipsisApp/Tests.png'

const EllipsisApp = () => {
	return (
		<PageWrapper>
			<ContentBlock>
				<Heading>
					Ellipsis Health is an AI that can diagnose anxiety and depression with
					2-3 minutes of voice
				</Heading>
				<Spacer />
				<Body>
					While their technology is used often by clinicians, I worked with the
					Head of Product to make their voice assessment available in a more
					digestible format that can be used by insurers, schools, and
					individuals.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>Defining our user</Heading>
				<Spacer />
				<SubHeading>Greta</SubHeading>
				<Body>xya</Body>
				<Spacer />
				<SubHeading>Goals</SubHeading>
				<Body>xyz</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Main Goal</SubHeading>
				<Heading>Create an easy to use voice recording assessment</Heading>
				<Spacer />
				<SubHeading>Jumping off point</SubHeading>
				<Body>
					I worked with Ellipsis Health&apos;s Head of Product to clean up and
					expand upon rough sketches of the app that he put together. We also
					started with the criteria that users must speak for 2-3 minutes and
					answer at least two questions to complete the assessment.
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
					Eliipsis Health brand guidelines and very cohesive with their website
					which I designed. For the second I wanted to test a warmer palette to
					be more inline with other wellness apps out there and create a more
					uplifting experience.
				</Body>
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
			<ContentBlock>
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
				<SubHeading>Our Solution</SubHeading>
				<Body>
					Our ultimate solution included helper text surrounding the record
					button to let users know what was happening and how far along they
					were. We kept an animated wave form to signal recording.
				</Body>
			</ContentBlock>
		</PageWrapper>
	)
}

export default EllipsisApp
