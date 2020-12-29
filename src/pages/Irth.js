import React from 'react'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import ItemGrid from 'components/ItemGrid'
import VideoPlayer from 'components/VideoPlayer'

import ColorScheme from 'static/images/Irth/BeforeAfterIrth.png'
import Founder from 'static/images/Irth/Founder.png'
import LongForm from 'static/images/Irth/LongForm.png'
import ReviewStates from 'static/images/Irth/ReviewStates.png'
import IrthHero from 'static/images/Irth/IrthHero.gif'

const useStyles = createUseStyles({
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
	IrthHero: {
		backgroundColor: '#fff4e9',
	},
	white: {
		backgroundColor: 'white',
	},
})

const Irth = () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.IrthHero}>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Heading>
							Irth is an app for brown and black women to review doctors and
							hospitals involved in their birthing experiences
						</Heading>
						<Spacer />
						<Body>
							I was brought on to this project to make a few key design changes
							necessary to take the app to its first round of beta testing.
						</Body>
					</div>
					<Image src={IrthHero} size="full" className={classes.half} />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock className={classes.white}>
				<SubHeading>Goal #1</SubHeading>
				<Heading>Bring more warmth and joy to the app experience</Heading>
				<Spacer />
				<Body>
					Writing reviews of bad experiences can be stressful and emotional. The
					app’s UI was very cold and stoic when I was brought on to the project
					and one of our main goals was to bring more of the brand personality
					to the designs.
				</Body>
				<Spacer height={2} />
				<SubHeading>Color Palette</SubHeading>
				<Spacer />
				<Body>
					Irth worked with another designer to update their branding and
					website. On of my goals was to adapt these colors and branding for the
					app to create an experience with more warmth and personality.
				</Body>
				<Spacer />
				<Image src={ColorScheme} size="full" />
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<SubHeading>Adding a human touch</SubHeading>
						<Spacer />
						<Body>
							Irth is built for and by it’s community and we want to emphasize
							that you are not alone when going through the review process. To
							add a personal touch to the experience, we created “notes from the
							founder/team” to show up on first login and as soon as you finish
							writing a review. These screens give the founder an opportunity to
							speak directly to her audience.
						</Body>
					</div>
					<Image src={Founder} size="full" className={classes.half} />
				</ItemGrid>
				<Spacer />
				<SubHeading>Encouragement Screens</SubHeading>
				<Spacer />
				<Body>
					Irth is built for and by it’s community and we want to emphasize that
					you are not alone when going through the review process. To add a
					personal touch to the experience, we created “notes from the
					founder/team” to show up on first login and as soon as you finish
					writing a review. These screens give the founder an opportunity to
					speak directly to her audience.
				</Body>
				<Spacer />
				<VideoPlayer
					src="https://player.vimeo.com/video/495562227?autoplay=1?loop=1"
					title="Animated Scrrens"
				/>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Goal #2</SubHeading>
				<Heading>Increase responsiveness</Heading>
				<Spacer />
				<Body>
					As I took over the product design portion of this project one of my
					responsibilities was to address questions from the iOS and Android
					devs about responsiveness.
				</Body>
				<Spacer height={2} />
				<SubHeading>Accommodating lengthy answer text</SubHeading>
				<Spacer />
				<Body>
					As the copy evolved, many of our answers became lengthy or had lots of
					options which required us to move from small tiles to full width list
					items.
				</Body>
				<Image src={LongForm} size="full" />
				<Spacer height={2} />
				<SubHeading>Showing the states of a started review</SubHeading>
				<Spacer />
				<Body>
					Because reviews take time to complete and users may want to take a
					break, we needed clear ways to show their drafts and the status of
					their completed reviews easily.
				</Body>
				<Image src={ReviewStates} size="full" />
			</ContentBlock>
			<ContentBlock className={classes.IrthHero}>
				<Heading>Key Learnings</Heading>
				<Spacer />
				<SubHeading>Working within someone elses files</SubHeading>
				<Spacer />
				<Body>
					I picked up this project from another designer who had too much on her
					plate. This meanth that I had to dive into her files and design system
					without a lot of context. I think that having a fresh perspective can
					be helpful but is also hard at times when you don&apos;t know why
					certain assumptions were made.
				</Body>
				<Spacer height={2} />
				<SubHeading>Testflight and Firebase</SubHeading>
				<Spacer />
				<Body>
					I worked closely with an iOS and Android developer to build a product
					to be beta tested before launch. This helped me learn some of the
					nuances that go into each build from a design perspective.
				</Body>
				<Spacer height={2} />
			</ContentBlock>
		</PageWrapper>
	)
}

export default Irth
