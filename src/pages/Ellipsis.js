import React from 'react'
import { createUseStyles } from 'react-jss'

import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import Spacer from 'components/Spacer'
import ItemGrid from 'components/ItemGrid'

import BeforeAfter from 'static/images/Ellipsis/beforeAfter.png'
import Icons from 'static/images/Ellipsis/motifIcon.png'
import SoundWave from 'static/images/Ellipsis/motifWave.png'
import EllipsisSketch from 'static/images/Ellipsis/EH_Hero-03.png'
import AboveFold from 'static/images/Ellipsis/site_abovefold.png'
import Copy from 'static/images/Ellipsis/copy.png'
import NavGif from 'static/images/Ellipsis/navgif.gif'
import Solutions from 'static/images/Ellipsis/Solutions-05.png'
import Hero from 'static/images/Ellipsis/EllipsisHero.png'


const useStyles = createUseStyles({
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
})


export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<Heading>
					Ellipsis Health wants to update their site to be modern and professional
				</Heading>
				<Spacer />
				<SubHeading>
					THE TASK
				</SubHeading>
				<Spacer />
				<Body>
					In one week, we need to design, build and launch a website that is easily manageable by the Ellipsis team moving forward. The site needs to align with their new branding and speak to the Ellipsis audience.
				</Body>
				<Image src={Hero} size="full" />
			</ContentBlock>
			<ContentBlock>
				<SubHeading>
					THE ACTIONS
				</SubHeading>
				<Spacer />
				<Heading>
					Build a Wix site that doesn’t look like a Wix site
				</Heading>
				<Spacer />
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Body>
							It was important that this site be able to scale with the team after my 1 week stint with them. Because their existing site was built in Wix we stuck with that platform so they could easily make changes down the line, but we customized our template to speak to the brand.
						</Body>
					</div>
					<Image src={BeforeAfter} className={classes.half} />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Expand the brand guidelines for web
				</Heading>
				<Spacer />
				<Body>
					Ellipsis Health had just created a new logo and color palette for their brand. While this needed to be present in the site designs, there was not a lot of other guidance on visual so I worked with the team to grow their style guide for web.
				</Body>
				<Spacer />
				<SubHeading>
					The Ellipsis
				</SubHeading>
				<Spacer />
				<Body>
					The form of the ellipsis is essential to this brand so I wanted to find as many creative ways to use the three circles as possible.
				</Body>
				<ItemGrid stackedOnMobile>
					<Image src={EllipsisSketch} size="full" className={classes.half} />
					<Image src={AboveFold} size="full" className={classes.half} />
				</ItemGrid>
				<SubHeading>
					The Sound Wave
				</SubHeading>
				<Spacer />
				<Body>Since one of Ellipsis Health&apos;s goals is to establish speech as a vital sign, the sound wave became an important design element as well. In graphic treatments, it is often combined with the ellipsis circles, but I also used it to help create heirarchy in our typography.</Body>
				<Image src={SoundWave} size="full" />
				<SubHeading>
					Iconography
				</SubHeading>
				<Spacer />
				<Body>Because we didn&apos;t have any existing icons ready to use, I created some to enhance certain ideas brought in the site.</Body>
				<Image src={Icons} size="full" />
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Speak to each of our users
				</Heading>
				<Spacer />
				<Body>
					While this project started as a single-page site, it quickly grew beyond a simple splash page as we thought about the information each of our users are looking for.
				</Body>
				<Spacer />
				<Image src={NavGif} size="full" />
				<Spacer />
				<ItemGrid>
					<div className={classes.half} stackedOnMobile>
						<SubHeading>
							Patients
						</SubHeading>
						<Spacer />
						<Body>
							When patients come to the site we want them to be able to understand what we have to offer immediately. We want our copy to be straight forward and ommit any medical jargon that could be confusing.
						</Body>
					</div>
					<Image src={Copy} className={classes.half} size="full" />
				</ItemGrid>
				<Spacer />
				<SubHeading>
					Providers
				</SubHeading>
				<Spacer />
				<Body>
					We want providers to have access to their data immediately so we keep the Provider Login CTA always on in the navigation. We use infographics to explain our problems and solutions in a digestible way but also provide links to our papers so providers can dig deeper if they want.
				</Body>
				<Spacer />
				<Image src={Solutions} size="full" />
				<SubHeading>
					Investors
				</SubHeading>
				<Spacer />
				<Body>
					To enhance our professionalism and credibilty we included our key press pieces and included a snapshot of our leadership team on the about page.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>
					THE RESULTS
				</SubHeading>
				<Heading>
					Key Learnings
				</Heading>
				<Spacer />
				<SubHeading>
					Iterating quickly
				</SubHeading>
				<Body>
					With a one week timeline, this project would not have come together without constant communication, feedback and iteration.
				</Body>
				<Spacer />
				<SubHeading>
					Using design to enhance content
				</SubHeading>
				<Body>
					I worked closely with the internal team who gathered the best content and resources. My job was to make that information shine in a digestible and engaging format.
				</Body>
				<Spacer />
				<SubHeading>
					Working with templating platforms
				</SubHeading>
				<Body>
					We used Wix to create a site that the internal team could edit easily moving forward. Using Wix also allowed us to get this project done quickly by designing and building in tandem.
				</Body>
			</ContentBlock>
		</PageWrapper>
	)
}
