import React from 'react'
import { createUseStyles } from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'

const useStyles = createUseStyles({

})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<Heading>
					Listen Jay PodQuote Feature
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Understanding the podcaster&apos;s needs
				</Heading>
				<Body>
					User Interviews
				</Body>
				<Body>
					Competitive Research
				</Body>
				<Body>
					Persona
				</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Building the feature
				</Heading>
				<Body>
					User Flow
				</Body>
				<Body>
					Wireframes
				</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Branding/Visual Designs
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Testing
				</Heading>
			</ContentBlock>
		</PageWrapper>
	)
}
