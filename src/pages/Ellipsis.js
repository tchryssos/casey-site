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
					Ellipsis
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>
					GOAL #1
				</SubHeading>
				<Body>
					Display a professional and modern brand that keeps up with our competition
				</Body>
				<SubHeading>
					GOAL #2
				</SubHeading>
				<Body>
					Enhance our brand storytelling
				</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Speaking to each of our users
				</Heading>
				<SubHeading>
					Patients
				</SubHeading>
				<SubHeading>
					Providers
				</SubHeading>
				<SubHeading>
					Investors
				</SubHeading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Making a big impact in a short amount of time
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Expanding the existing brand guidelines to work for web
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Learnings
				</Heading>
			</ContentBlock>
		</PageWrapper>
	)
}
