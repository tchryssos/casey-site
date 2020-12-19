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
import Spacer from 'components/Spacer'


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
					Ellipsis Health needs to gather voice input from patients
				</Heading>
				<Spacer />
				<SubHeading>
					Role: Product Designer
				</SubHeading>
				<SubHeading>
					Timeline: 1 week
				</SubHeading>
			</ContentBlock>
			<ContentBlock>
				<Heading>The main goal</Heading>
				<Spacer />
				<SubHeading>Challenge</SubHeading>
				<Spacer />
				<Body>
					Make it clear to users how to record, pause, and submit their voice responses.
				</Body>
				<Spacer />
				<Body>Bonus: Show progress without making them feel like they have to finish at any point</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>Starting point</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Iterative Process</Heading>
				<Spacer />
				<SubHeading>Glowing vs Sound wave</SubHeading>
				<Spacer />
				<SubHeading>Brand colors vs warm colors</SubHeading>
				<Spacer />
				<SubHeading>Cards vs Next button</SubHeading>
				<Spacer />
				<SubHeading>Record Button States</SubHeading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Solution</Heading>
			</ContentBlock>
		</PageWrapper>
	)
}
