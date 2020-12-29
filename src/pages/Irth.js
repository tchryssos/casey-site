import React from 'react'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'

const Irth = () => {
	return (
		<PageWrapper>
			<ContentBlock>
				<Heading>
					Irth is an app for brown and black women to review doctors and
					hospitals involved in their birthing experiences
				</Heading>
				<Spacer />
				<Body>
					I was brought on to this project to make a few key design changes
					necessary to take the app to its first round of beta testing.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Goal #1</SubHeading>
				<Heading>Bring more warmth and joy to the app experience</Heading>
				<Spacer />
				<Body>
					Writing reviews of bad experiences can be stressful and emotional. The
					app’s UI was very cold and stoic when I was brought on to the project
					and one of our main goals was to bring more of the brand personality
					to the designs.
				</Body>
				<Spacer />
				<SubHeading>Color Palette</SubHeading>
				<Body>
					Irth worked with another designer to update their branding and
					website. On of my goals was to adapt these colors and branding for the
					app to create an experience with more warmth and personality.
				</Body>
				<Spacer />
				<SubHeading>Adding a human touch</SubHeading>
				<Body>
					Irth is built for and by it’s community and we want to emphasize that
					you are not alone when going through the review process. To add a
					personal touch to the experience, we created “notes from the
					founder/team” to show up on first login and as soon as you finish
					writing a review. These screens give the founder an opportunity to
					speak directly to her audience.
				</Body>
				<Spacer />
				<SubHeading>Encouragement Screens</SubHeading>
				<Body>
					Irth is built for and by it’s community and we want to emphasize that
					you are not alone when going through the review process. To add a
					personal touch to the experience, we created “notes from the
					founder/team” to show up on first login and as soon as you finish
					writing a review. These screens give the founder an opportunity to
					speak directly to her audience.
				</Body>
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Goal #2</SubHeading>
				<Heading>Address issues with responsiveness</Heading>
				<Spacer />
				<Body>
					As I took over the product design portion of this project one of my
					responsibilities was to address questions from the iOS and Android
					devs about responsiveness.
				</Body>
				<Spacer />
				<SubHeading>Accommodating lengthy answer text</SubHeading>
				<Body>
					As the copy evolved, many of our answers became lengthy or had lots of
					options which required us to move from small tiles to full width list
					items.
				</Body>
				<Spacer />
				<SubHeading>Showing the states of a started review</SubHeading>
				<Body>
					Because reviews take time to complete and users may want to take a
					break, we needed clear ways to show their drafts and the status of
					their completed reviews easily.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>Key Learnings</Heading>
			</ContentBlock>
		</PageWrapper>
	)
}

export default Irth
