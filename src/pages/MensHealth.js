import React from 'react'
import { createUseStyles } from 'react-jss'


import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import ItemGrid from 'components/ItemGrid'

import Frank from 'static/images/MensHealth/personaFrank.png'
import Tom from 'static/images/MensHealth/personaTom.png'
import PhotoRange from 'static/images/MensHealth/ImageRange_1.png'
import SiteMap1 from 'static/images/MensHealth/SiteMap1.png'
import SiteMap2 from 'static/images/MensHealth/SiteMap2.png'

const useStyles = createUseStyles({

})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<Heading>
					Men&apos;s Health Houston is looking to revamp their website in anicipation of a new location launch
				</Heading>
				<Spacer />
				<SubHeading>
					Role: Product Designer
				</SubHeading>
				<Spacer />
				<Body>
					I got in touch with Men&apos;s Health Houston through my network. I worked directly with the clients to redesign the site and hired a developer to build it out. I held weekly meetings for all of us to connect and move the project forward.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>
					GOAL #1
				</SubHeading>
				<Body>
					Elevate the branding and simplify the content for users coming to the site.
				</Body>
				<Spacer />
				<SubHeading>
					GOAL #2
				</SubHeading>
				<Body>
					Create a modular design system that will streamline the internal process for managing the site.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					A woman designing a Men&apos;s Health site
				</Heading>
				<Spacer />
				<Body>
					Men&apos;s Health Houston knows who their main customers and demographics are, but because I don&apos;t frequent men&apos;s health sites I wanted to do some work to get in the mindset of our consumer.
				</Body>
				<Spacer />
				<SubHeading>
					Defining Personas
				</SubHeading>
				<Spacer />
				<Body>
					I interviewed a group of men between the ages of 35 and 55 about their health care habits and body goals to create the following personas.
				</Body>
				<Image src={Frank} size="full" />
				<Image src={Tom} size="full" />
				<Spacer height={2} />
				<SubHeading>
					Finding the right photography
				</SubHeading>
				<Spacer />
				<Body>
					One of the biggest challenges with this project was figuring out how relatable versus aspirational the photography should be. While the clients thought their audience wanted extremely aspirational imagery, our interviews showed that most wanted to see someone relatable to them.
				</Body>
				<Spacer />
				<Image src={PhotoRange} size="full" />
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Streamlining the existing content
				</Heading>
				<Spacer />
				<SubHeading>Auditing the Site Map</SubHeading>
				<ItemGrid>
					<Image src={SiteMap1} size="half" />
					<Image src={SiteMap2} size="half" />
				</ItemGrid>
				<Spacer />
				<SubHeading>Creating wireframes from existing content</SubHeading>
				<Spacer />
				<SubHeading>Building for scalability</SubHeading>
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<Heading>Modernizing the brand</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Testing</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Key learnings</Heading>
				<Spacer />
				<SubHeading>Developer Handoff</SubHeading>
			</ContentBlock>
		</PageWrapper>
	)
}
