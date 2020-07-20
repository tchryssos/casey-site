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
import ImageLightBox from 'components/ImageLightBox'

import Frank from 'static/images/MensHealth/personaFrank.png'
import Tom from 'static/images/MensHealth/personaTom.png'
import PhotoRange from 'static/images/MensHealth/photoRange-01.png'
import SiteMap1 from 'static/images/MensHealth/SiteMap1.png'
import SiteMap2 from 'static/images/MensHealth/SiteMap2.png'
import MHHLogo from 'static/images/MensHealth/MHHLogo.png'
import MHHBranding from 'static/images/MensHealth/MHHBranding.png'
import CompareWires from 'static/images/MensHealth/compareWire.png'


const useStyles = createUseStyles({
	whiteBlock: {
		backgroundColor: 'white',
	},
	blueBlock: {
		backgroundColor: '#E0EEFF',
	},
	orangeBlock: {
		backgroundColor: '#DF7356',
	},
	sectionLabel: {
		backgroundColor: '#4e7fff',
		padding: 8,
		color: 'white',
		whiteSpace: 'nowrap',
		textAlign: 'center',
	},
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
			<ContentBlock className={classes.blueBlock}>
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
				<Spacer />
				<ItemGrid startAligned stackedOnMobile>
					<div className={classes.half}>
						<SubHeading>
							GOAL #1
						</SubHeading>
						<Body>
							Elevate the branding and simplify the content for users coming to the site.
						</Body>
					</div>
					<div className={classes.half}>
						<SubHeading>
							GOAL #2
						</SubHeading>
						<Body>
							Create a modular design system that will streamline the internal process for managing the site.
						</Body>
					</div>
				</ItemGrid>
			</ContentBlock>
			<div className={classes.sectionLabel}>
				DISCOVER
			</div>
			<ContentBlock className={classes.whiteBlock}>
				<Heading>
					Getting in the head of the Men&apos;s Health customer
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
			<div className={classes.sectionLabel}>
				DEFINE
			</div>
			<ContentBlock className={classes.blueBlock}>
				<Heading>
					Streamlining the existing content
				</Heading>
				<Spacer />
				<SubHeading>Auditing the Site Map</SubHeading>
				<Spacer />
				<ItemGrid stackedOnMobile>
					<ImageLightBox src={SiteMap1} />
					<ImageLightBox src={SiteMap2} />
				</ItemGrid>
				<Spacer height={2} />
				<SubHeading>Creating wireframes from existing content</SubHeading>
				<Spacer />
				<Body>
					One of the main goals with this project was to streamline the content on the pages to make it more digestible for users.
				</Body>
				<Image src={CompareWires} size="full" />
			</ContentBlock>
			<div className={classes.sectionLabel}>
				DESIGN
			</div>
			<ContentBlock className={classes.whiteBlock}>
				<Heading>Modernizing the brand</Heading>
				<ItemGrid>
					<div className={classes.half}>
						<SubHeading>Adjusting the logo for web</SubHeading>
						<Spacer />
						<Body>
							The logo was an important piece of the brand to keep from the previous site since it is used in marketing and other assets. While I kept the basic form, color, and serif font, I wanted to make the detail bolder and less intricate so it could be more legible on mobile and web screens.
						</Body>
					</div>
					<Image className={classes.half} src={MHHLogo} size="full" />
				</ItemGrid>
				<Spacer />
				<SubHeading>Creating new guidelines</SubHeading>
				<Image src={MHHBranding} size="full" />
			</ContentBlock>
			<ContentBlock className={classes.orangeBlock}>
				<Heading>Visual Designs</Heading>
			</ContentBlock>
			<div className={classes.sectionLabel}>
				TEST
			</div>
			<ContentBlock>
				<Heading>Testing</Heading>
			</ContentBlock>
			<div className={classes.sectionLabel}>
				DEVELOP
			</div>
			<ContentBlock>
				<Heading>Key learnings</Heading>
				<Spacer />
				<SubHeading>Developer Handoff</SubHeading>
			</ContentBlock>
		</PageWrapper>
	)
}
