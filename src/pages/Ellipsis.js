import React from 'react'
import { createUseStyles } from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import Spacer from 'components/Spacer'


const useStyles = createUseStyles({
	test: {
		color: 'black',
	},
})


export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<Heading className={classes.test}>
					Ellipsis Health wants to update their site to be modern, professional and tell their story better
				</Heading>
			</ContentBlock>
			<ContentBlock>
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
			</ContentBlock>
			<ContentBlock>
				<SubHeading>
					THE ACTIONS
				</SubHeading>
				<Spacer />
				<Heading>
					Build a Wix site that doesn’t look like a Wix site
				</Heading>
				<Body>
					It was important that this site be able to scale with the team after my 1 week stint with them. Because their existing site was built in Wix we stuck with that platform so they could easily make changes down the line.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Expand the brand guidelines for web
				</Heading>
				<Body>
					Ellipsis Health had just created a new logo and color palette for their brand. While this needed to be present in the site designs, there was not a lot of other guidance on visual so I worked with the team to grow their style guide for web.
				</Body>
				<Spacer />
				<SubHeading>
					The Ellipsis
				</SubHeading>
				<SubHeading>
					The Sound Wave
				</SubHeading>
				<SubHeading>
					Iconography
				</SubHeading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Speak to all of our users
				</Heading>
				<Body>
					While this project started as a single-page site, it quickly grew beyond a simple splash page as we thought about the information our users are looking for
				</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>
					THE RESULTS
				</SubHeading>
			</ContentBlock>
		</PageWrapper>
	)
}
