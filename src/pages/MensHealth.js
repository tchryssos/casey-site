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
import VideoPlayer from 'components/VideoPlayer'
import PageNav from 'components/PageNav'

import Frank from 'static/images/MensHealth/personaFrank.png'
import Tom from 'static/images/MensHealth/personaTom.png'
import PhotoRange from 'static/images/MensHealth/photoRange-01.png'
import SiteMap1 from 'static/images/MensHealth/SiteMap1.png'
import SiteMap2 from 'static/images/MensHealth/SiteMap2.png'
import MHHLogo from 'static/images/MensHealth/MHHLogo.png'
import MHHBranding from 'static/images/MensHealth/MHHBranding.png'
import CompareWires from 'static/images/MensHealth/compareWire.png'
import HomeDesktop from 'static/images/MensHealth/HomePage_Desktop2.png'
import GainsWaveDesktop from 'static/images/MensHealth/GainsWave_Desktop.png'
import MapModal from 'static/images/MensHealth/MapModal.png'
import MHHHero from 'static/images/MensHealth/MHH_Hero.png'
import HomeWires from 'static/images/MensHealth/homeWires.png'


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
	const brief = 'brief'
	const discover = 'discover'
	const define = 'define'
	const design = 'design'
	const test = 'test'
	const develop = 'develop'

	const classes = useStyles()
	// const [currentBlock, setCurrentBlock] = useState(brief)

	const navLinks = [
		{ link: brief },
		{ link: discover },
		{ link: define },
		{ link: design },
		{ link: test },
		{ link: develop },
	]
	return (
		<PageWrapper>
			<PageNav navLinkObjects={navLinks} />
			{/* eslint-disable jsx-a11y/anchor-is-valid */}
			{/* eslint-disable jsx-a11y/anchor-has-content */}
			<a name={brief} />
			<ContentBlock
				className={classes.blueBlock}
				blockId={brief}
			>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Heading>
							Men&apos;s Health Houston is looking to revamp their website in anicipation of a new location launch
						</Heading>
						<Spacer />
						<SubHeading>
							Role: Product Designer
						</SubHeading>
					</div>
					<Image src={MHHHero} size="full" className={classes.half} />
				</ItemGrid>
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
			<a name={discover} />
			<div className={classes.sectionLabel}>
				Discover
			</div>
			<ContentBlock
				className={classes.whiteBlock}
				blockId={discover}
			>
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
					I interviewed a group of men between the ages of 35 and 55 about their health care habits and body goals to create the following personas. I reached out to networks I was a part of to find men in the correct demographic and interviewed them over the phone.
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
			<a name={define} />
			<div className={classes.sectionLabel}>
				Define
			</div>
			<ContentBlock
				className={classes.blueBlock}
				blockId={define}
			>
				<Heading>
					Streamlining the existing content
				</Heading>
				<Spacer />
				<SubHeading>Auditing the Site Map</SubHeading>
				<Body>
					The original site was built with many pages that were serving overlapping purposes and some of the terminology was a little too medical for people to understand. In order to create a clear roadmap of the pages I would be working on I audited and streamlined the site map. You can seea snapshot of my process below.
				</Body>
				<Spacer />
				<ItemGrid stackedOnMobile>
					<ImageLightBox src={SiteMap1} />
					<ImageLightBox src={SiteMap2} />
				</ItemGrid>
				<Spacer height={2} />
				<SubHeading>Creating wireframes from existing content</SubHeading>
				<Spacer />
				<Body>
					One of the main goals with this project was to streamline the content on the pages to make it more digestible for users. Below is an example of how I reorganized the existing content to be more straight forward and digestible.
				</Body>
				<Image src={CompareWires} size="full" />
				<SubHeading>
					Recognizing Design Patterns
				</SubHeading>
				<Body>
					I looked at many competitor sites to understand how they were organizing their content. Most sites made it very clear what their services were from first glance. I wanted to create a visual navigation system on the home page that allowed user to get directly where they needed to go.
				</Body>
				<Image src={HomeWires} size="full" />
			</ContentBlock>
			<a name={design} />
			<div className={classes.sectionLabel}>
				Design
			</div>
			<ContentBlock
				className={classes.whiteBlock}
				blockId={design}
			>
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
				<Spacer />
				<Body>
					The clients wanted to update their branding to be more modern. Beyond their logo, they were open to changing everything. I used some of the blues from their original branding and expanded the palette to include a more bold orange. I created icons set that would emphasize a friendly approach and used a more clean and legible font to get their personality across.
				</Body>
				<Image src={MHHBranding} size="full" />
			</ContentBlock>
			<ContentBlock className={classes.orangeBlock}>
				<Heading>Visual Designs</Heading>
				<Spacer />
				<Body>
					I created a prototype to test with for usability and also to show the developer how I imagined the site working.
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/440119937?loop=1"
					title="Prototype Animation"
					aspectRatio="16:9"
				/>
				<Spacer height={2} />
				<Body>
					The two pages that I focused the majority of my time on were the home page and a template for a service page. These pages contained the most specific components and these modules were reused on many other pages for easy scalability.
				</Body>
				<ItemGrid startAligned stackedOnMobile>
					<Image className={classes.half} size="full" src={HomeDesktop} />
					<Image className={classes.half} size="full" src={GainsWaveDesktop} />
				</ItemGrid>
			</ContentBlock>
			<a name={test} />
			<div className={classes.sectionLabel}>
				Test
			</div>
			<ContentBlock
				className={classes.blueBlock}
				blockId={test}
			>
				<Heading>Usability Testing</Heading>
				<Spacer />
				<Body>
					I tested both the mobile and desktop prototypes with a handful of participants over Zoom.
				</Body>
				<Spacer />
				<ItemGrid startAligned>
					<div className={classes.half}>
						<Heading>100%</Heading>
						<SubHeading>of participants were able to learn about a service and book an appointment with no problems</SubHeading>
					</div>
					<div className={classes.half}>
						<Heading>100%</Heading>
						<SubHeading>of participants used the icon-based navigation on the home page validating that addition</SubHeading>
					</div>
				</ItemGrid>
				<Spacer />
				<ItemGrid>
					<div className={classes.half}>
						<SubHeading>
							Multiple CTAs
						</SubHeading>
						<Body>
							There were CTAs to schedule an appointment at multiple points throughout the page. Each participant used a different CTA to schedule their appointment which validates each individual placements.
						</Body>
					</div>
					<Image className={classes.half} src={MapModal} size="full" />
				</ItemGrid>
			</ContentBlock>
			<a name={develop} />
			<div className={classes.sectionLabel}>
				Develop
			</div>
			<ContentBlock
				className={classes.whiteBlock}
				blockId={develop}
			>
				<Heading>What did I learn from this project?</Heading>
				<Spacer />
				<SubHeading>Design leadership skills</SubHeading>
				<Body>
					My main role for this project was Product Designer but ended up wearing lots of hats. I hired the developer, created the timeline, redesigned the branding, and held weekly meetings to gather everyone together together to make decisions and gain approvals
				</Body>
				<Spacer />
				<SubHeading>Collaborating with a developer</SubHeading>
				<Body>
					Working closely with a developer on this project was a great experience. It helped me learn the difference between what a developer and a client need from a designer. We also collaborated to uncover responsive design sticking points that needed extra attention.
				</Body>
				<Spacer />
				<SubHeading>Building for scale</SubHeading>
				<Body>
					The ideal outcome for this project was to arm the Men&apos;s Health Houston team with everything they would need to add new services and locations to their site on their own in the future. We kept this in mind at every step of the way.
				</Body>
			</ContentBlock>
		</PageWrapper>
	)
}
