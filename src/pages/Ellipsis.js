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
import VideoPlayer from 'components/VideoPlayer'

import BeforeAfter from 'static/images/Ellipsis/beforeAfter.gif'
import Icons from 'static/images/Ellipsis/motifIcon.png'
import SoundWave from 'static/images/Ellipsis/motifWave.png'
import EllipsisSketch from 'static/images/Ellipsis/ellipsis_motif.png'
import AboveFold from 'static/images/Ellipsis/site_abovefold.png'
import Copy from 'static/images/Ellipsis/copy.png'
import NavGif from 'static/images/Ellipsis/navgif.gif'
import Wix from 'static/images/Ellipsis/Wix.png'


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
					Ellipsis Health wants to update their site to be modern, professional and tell their story better
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<SubHeading>
							THE SITUATION
						</SubHeading>
						<ul>
							<li>
								Timeline: 1 week
							</li>
							<li>
								Should be managable by the Ellipsis team in the future
							</li>
							<li>
								Speaks to Patients, Providers and Investors
							</li>
						</ul>
						<SubHeading>
							THE TASK
						</SubHeading>
						<ul>
							<li>
								Design and build a fully functional website
							</li>
							<li>
								Expand the brand guidelines for web
							</li>
							<li>
								Enhance the content gathered by the Ellipsis team
							</li>
						</ul>
					</div>
					<Image src={BeforeAfter} className={classes.half} />
				</ItemGrid>
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
				<ItemGrid>
					<Body className={classes.half}>
						It was important that this site be able to scale with the team after my 1 week stint with them. Because their existing site was built in Wix we stuck with that platform so they could easily make changes down the line.
					</Body>
					<Image src={Wix} className={classes.half} />
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
				<Body>Because we didn't have any existing icons ready to use, I created some to enhance certain ideas brought in the site.</Body>
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
				<SubHeading>
					Investors
				</SubHeading>
				<Spacer />
				<Body>
					To enhance our professionalism and credibilty we included our key press pieces and also included a snapshot of our leadership team.
				</Body>

			</ContentBlock>
			<ContentBlock>
				<SubHeading>
					THE RESULTS
				</SubHeading>
				<Heading>
					XYZ
				</Heading>
				<Spacer />
				<VideoPlayer
					src="https://player.vimeo.com/video/486566045"
					title="Home Page of Website"
				/>
			</ContentBlock>
		</PageWrapper>
	)
}
