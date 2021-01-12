import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import useScrollingText from 'effects/useScrollingText'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import ItemGrid from 'components/ItemGrid'
import SubHeading from 'components/Typography/SubHeading'
import Spacer from 'components/Spacer'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import VideoPlayer from 'components/VideoPlayer'
import PageNav from 'components/PageNav'
import NextProject from 'components/NextProject'

import CardSort from 'static/images/Mirror/CardSorting.png'
import SiteMap from 'static/images/Mirror/SiteMap.png'
import Persona from 'static/images/Mirror/Persona-03.png'
import StyleTile from 'static/images/Mirror/StyleTile-03.png'
import Logo from 'static/images/Mirror/Logo-01.png'
import UIKIT from 'static/images/Mirror/UIKIT.png'
import UserFlow from 'static/images/Mirror/userflow-02.png'
import UsabilityHeader from 'static/images/Mirror/Frame30.png'
import SizeGuide from 'static/images/Mirror/SizeGuide.png'
import HifiHome from 'static/images/Mirror/HifIHome.png'
import HifiCategory from 'static/images/Mirror/HifiCategory.png'
import HifiPDP from 'static/images/Mirror/HiFiPDP.png'
import LogoEx from 'static/images/Mirror/logoExploration.png'
import Sketches from 'static/images/Mirror/sketchesMirror.png'

const useStyles = createUseStyles({
	third: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: '30%',
			marginBottom: 0,
		},
	},
	thirdImage: {
		width: '60%',
		marginLeft: '20%',
		[MD_MIN_STRING]: {
			width: '100%',
			marginLeft: 0,
		},
	},
	mirrorColorPrimary: {
		backgroundColor: '#FFFAF1',
	},
	mirrorColorSecondary: {
		backgroundColor: '#fde8c7',
	},
	whiteBlock: {
		backgroundColor: 'white',
	},
	blueBackground: {
		backgroundColor: '#b4e0ff',
	},
	pinkBackground: {
		backgroundColor: '#e7b2c2',
	},
	boxShadow: {
		boxShadow: '10px 10px #384ea1',
	},
	sectionLabel: {
		backgroundColor: '#4e7fff',
		padding: 8,
		color: 'white',
		whiteSpace: 'nowrap',
		textAlign: 'center',
		fontWeight: 500,
	},
	scrollTextPadding: {
		[MD_MIN_STRING]: {
			paddingTop: 100,
			transform: 'translateY(-100px)',
		},
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

	const navLinks = [
		{ link: 'brief' },
		{ link: 'persona', text: 'Research' },
		{ link: 'ia', text: 'Architecture' },
		{ link: 'layout' },
		{ link: 'brand', text: 'Branding', altLink: 'hifi' },
		{ link: 'testing' },
		{ link: 'learnings' },
	]

	// START - PAGE SCROLL LOGIC - START
	const scrollingContainer = useRef()
	const scrollingTextContainer = useRef()
	useScrollingText(scrollingContainer, scrollingTextContainer)

	// END - PAGE SCROLL LOGIC - END

	return (
		<PageWrapper>
			<PageNav navLinkObjects={navLinks} />
			{/* eslint-disable jsx-a11y/anchor-is-valid */}

			{/* START - BRIEF - START */}
			<a name="brief">
				<ContentBlock blockId="brief" className={classes.mirrorColorSecondary}>
					<ItemGrid>
						<div className={classes.half}>
							<SubHeading>CASE STUDY</SubHeading>
							<Heading>
								Mirror is a global brick-and-mortar clothing store looking to
								take their business online
							</Heading>
						</div>
						<div className={classes.half}>
							<VideoPlayer
								src="https://player.vimeo.com/video/434853454?autoplay=1&loop=1&autopause=0"
								title="Prototype Animation"
								aspectRatio="1:1"
							/>
						</div>
					</ItemGrid>
					<Spacer />
					<Body>
						Mirror wants to&nbsp;
						<b>maintain it’s great customer service</b>
						&nbsp;in its online shop, but also&nbsp;
						<b>reach a new audience</b>
						&nbsp;by adding an online experience that is modern and easy to use.
					</Body>
					<Spacer />
					<Body>
						This project was done as part of the curriculum for Design
						Lab&apos;s UX Academy. I completed the project on my own and was
						responsible for the research, UX/UI Design, and asset creation.
					</Body>
				</ContentBlock>
			</a>
			{/* END - BRIEF - END */}

			{/* START - RESEARCH - START */}
			<a name="persona">
				<div className={classes.sectionLabel}>RESEARCH</div>
				<ContentBlock blockId="persona" className={classes.mirrorColorPrimary}>
					<Heading>Discovering the Mirror Customer</Heading>
					<Spacer />
					<Body>
						I did competitive research as well as interviewed a group of males
						and females 22-30 years old who shop online regularly about their
						online shopping habits.
					</Body>
					<Spacer />
					<Image src={Persona} size="full" />
				</ContentBlock>
			</a>
			{/* END - RESEARCH - END */}

			{/* START - ARCHITECTURE - START */}
			<a name="ia">
				<div className={classes.sectionLabel}>ARCHITECTURE</div>
				<ContentBlock className={classes.mirrorColorPrimary} blockId="ia">
					<Heading>What is the best way to organize an online shop?</Heading>
					<Spacer />
					<ItemGrid>
						<div className={classes.half}>
							<Image src={CardSort} size="full" />
						</div>
						<div className={classes.half}>
							<SubHeading>Card Sorting Exercise</SubHeading>
							<Spacer />
							<Body>
								I did a remote card sorting exercise via Trello and Zoom with 6
								participants who shop online regularly. They sorted 50 items
								from the Mirror catalog.
							</Body>
							<ul>
								<li>
									Most participants included skirts, pants, and overalls in
									&quot;Bottoms&quot;
								</li>
								<li>
									Most participants wanted to sort major categories by occassion
								</li>
								<li>
									There was the most variety in the way participants organized
									the &quot;Accessories&quot; category.
								</li>
							</ul>
							<Spacer />
						</div>
					</ItemGrid>
					<Spacer height={2} />
					<SubHeading>Creating a site map</SubHeading>
					<Body>
						I organized the main shopping nav based on the results from my card
						sorting exercise. I also looked at common design patterns in other
						ecommerce sites to organize the footer and global nav content.
					</Body>
					<Image src={SiteMap} size="full" />
				</ContentBlock>
			</a>
			{/* END - ARCHITECTURE - END */}

			{/* START - LAYOUT - START */}
			<a name="layout">
				<div className={classes.sectionLabel}>LAYOUT</div>
			</a>
			<ContentBlock className={classes.blueBackground} blockId="layout">
				<Heading>Building the user experience</Heading>
				<Spacer />
				<div ref={scrollingContainer}>
					<ItemGrid stackedOnMobile startAligned>
						<div
							ref={scrollingTextContainer}
							className={clsx(classes.half, classes.scrollTextPadding)}
						>
							<SubHeading>USER TASK</SubHeading>
							<Heading>Add a new white Tshirt to the cart</Heading>
							<Spacer />
							<Body>
								For this project I built out the necessary pages for a user to
								filter, find an item, and add it to the cart.
							</Body>
						</div>
						<Image src={UserFlow} className={classes.half} />
					</ItemGrid>
				</div>
				<Spacer />
				<SubHeading>Getting started with some sketches</SubHeading>
				<Spacer />
				<Body>
					The first page I wanted to focus on was the home page. Below are two
					of my first sketches of this page. With these sketched I wanted to
					make coupon codes for first time customers easy to find, highlight any
					sales or special collections and show off new arrivals for returning
					customers.
				</Body>
				<Spacer />
				<Body>
					In my card sorting exercise, most participants wanted to sort the
					items by occasion. Because of this finding, I wanted to use the hero
					image to highlight the lookbook for a certain occasion.
				</Body>
				<Image src={Sketches} size="full" />
				<Spacer />
				<SubHeading>Seeing the pages in motion</SubHeading>
				<Spacer />
				<Body>
					Most of the participants I interviewed wanted to be able to browse on
					mobile easily. The best way for me to double check my work with this
					experience was to build out a prototype and see for myself how easy
					was to navigate and filter items.
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/434350879?loop=1&autopause=0"
					title="Prototype Animation"
					aspectRatio="1:1"
				/>
			</ContentBlock>
			{/* END - LAYOUT - END */}

			{/* START - BRAND - START */}
			<a name="brand">
				<div className={classes.sectionLabel}>BRAND</div>
			</a>
			<ContentBlock className={classes.mirrorColorPrimary} blockId="brand">
				<Heading>Evolving the brand for their online debut</Heading>
				<ItemGrid>
					<div className={classes.half}>
						<SubHeading>Logo Exploration</SubHeading>
						<Spacer />
						<Body>
							While exploring logo options for Mirror, I played a lot with
							turning the &quot;o&quot; into a literal mirror. Ultimately, this
							felt outdated but I used a font that allowed me to stretch some of
							the letters to place emphasis on the &quot;o&quot; in a more
							elevated way.&nbsp;
						</Body>
					</div>
					<div className={classes.half}>
						<Image src={Logo} size="full" />
					</div>
				</ItemGrid>
				<Body>Previous drafts of the logo</Body>
				<Image src={LogoEx} size="full" />
				<Spacer height={2} />
				<SubHeading>Developing a Style Guide and UI Kit</SubHeading>
				<Spacer />
				<Body>
					Mirror&apos;s goals are to have a site that is accessible and easy to
					use but also to be a trendy and modern brand. For these reasons I used
					a digestible san-serif typeface for the body text and played with
					multiple bold colors to both add excitment and create more heirarchy.
				</Body>
				<Image src={StyleTile} size="full" />
				<Image src={UIKIT} size="full" />
			</ContentBlock>
			<ContentBlock className={classes.pinkBackground} blockId="hifi">
				<Heading>High Fidelity Mock Ups</Heading>
				<Spacer />
				<Body>
					I used Figma to create visual designs for the key pages: Home Page,
					Category Page, and Product Detail Page.
				</Body>
				<Spacer />
				<SubHeading>Home Page</SubHeading>
				<Body>
					In my reserach, most shoppers will filter directly down the category
					they are looking for.If they are lingering on the home page they are
					here to browse and will need some persuasion to click through to an
					item. This is why I put spaces for promotional campaigns and carousels
					of new arrivals on the homepage as well as a banner with a coupon code
					for first time visitors to encourage a purchase.
				</Body>
				<Image src={HifiHome} size="full" />
				<SubHeading>Category Page</SubHeading>
				<Body>
					Most participants in the card sorting exercise chose to sort the items
					by the occasion for which they would wear them. This finding led me to
					place those filters larger and across the top of the page. Users also
					mentioned a desire to like or save things for later, which I built
					into the Mirror site.
				</Body>
				<Image src={HifiCategory} size="full" />
				<SubHeading>Product Detail Page</SubHeading>
				<Body>
					I looked at many competitor sites to understand how I would best lay
					out the product detail page and images. I wanted to basic information
					to be front and center accompanied by a scrolling image gallery. I
					also wanted to make the reviews more visual for a quick read.
				</Body>
				<Image src={HifiPDP} size="full" />
			</ContentBlock>
			{/* END - BRAND - END */}

			{/* START - TESTING - START */}
			<a name="testing">
				<div className={classes.sectionLabel}>TESTING</div>
			</a>
			<ContentBlock className={classes.mirrorColorPrimary} blockId="testing">
				<ItemGrid>
					<div className={classes.half}>
						<Heading>Usability Testing</Heading>
						<Spacer />
						<SubHeading>GOALS</SubHeading>
						<Body>
							Test whether users can find an item and add it to the cart.
							Understand how many participants use filters and quick view
							functionality.
						</Body>
						<Spacer />
						<SubHeading>PARTICIPANTS</SubHeading>
						<Body>Six users, male and female, 22-35 years old.</Body>
						<Spacer />
						<SubHeading>PROMPT</SubHeading>
						<Body>
							You&apos;ve spilled on your favorite white shirt and need to order
							a new one.
						</Body>
					</div>
					<Image
						src={UsabilityHeader}
						size="full"
						className={clsx(classes.half, classes.boxShadow)}
					/>
				</ItemGrid>
				<Spacer />
				<Spacer />
				<SubHeading>User testing in a remote world</SubHeading>
				<Spacer />
				<Body>
					For my user tests I created a Figma prototype and had participants
					screenshare over Zoom as they moved through the task, narrating their
					decision making process along the way.
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/434380887?loop=1"
					title="Prototype Animation"
					aspectRatio="16:9"
				/>
				<Spacer height={2} />
				<SubHeading>Analyzing the results</SubHeading>
				<Spacer />
				<ItemGrid startaligned>
					<div className={classes.half}>
						<Heading>100%</Heading>
						<SubHeading>
							of participants added an item to the cart with no problem
						</SubHeading>
					</div>
					<div className={classes.half}>
						<Heading>50%</Heading>
						<SubHeading>of participants used the filters to sort</SubHeading>
					</div>
				</ItemGrid>
				<Spacer />
				<ItemGrid>
					<div className={classes.half}>
						<SubHeading>Price and Size</SubHeading>
						<Spacer />
						<Body>
							Multiple participants mentioned discrepancies in the price or that
							the prices were high which signals that price is very important to
							users. Many also mentioned wanting to click on the size guide to
							find their size, which had not yet been prototyped. To the right
							is a first iteration I created after these tests.
						</Body>
					</div>
					<Image src={SizeGuide} className={classes.half} />
				</ItemGrid>
				<Spacer />
				<SubHeading>QuickView Feature</SubHeading>
				<Spacer />
				<Body>
					Only one person out of six used the quick view feature. I think this
					is because I only asked participants to add one item to the cart
					instead of multiple. I would want to test this again with a multi-item
					task.
				</Body>
			</ContentBlock>
			{/* END - TESTING - END */}

			<a name="learnings">
				<div className={classes.sectionLabel}>Learnings</div>
			</a>
			<ContentBlock className={classes.mirrorColorSecondary}>
				<Heading>Key Learnings</Heading>
				<Spacer />
				<SubHeading>Research is important!</SubHeading>
				<Spacer />
				<Body>
					With a background in graphic design, I felt fairly comfortable
					navigating the visual design of the pages and presenting my work.
					Coming into Design Lab, I wanted to learn more about how to execute
					meaningul user research and testing. I found that interviewing
					potential users and going through the research process helped me to
					feel confident in my decision making and back it up with data that put
					the user at the center.
				</Body>
				<Spacer />
				<SubHeading>Design for every option</SubHeading>
				<Spacer />
				<Body>
					This project helped me understand just how much detail goes into any
					online shopping experience. Filling in my prototypes with real content
					was informative in planning for situations like different length
					product names and reviews, showing sizes and colors that are out of
					stock, and creating different states for filters and drop-downs.
				</Body>
				<Spacer />
				<SubHeading>Working Remotely</SubHeading>
				<Spacer />
				<Body>
					Even though some of my research and testing plans involved processes
					that would ideally be hands-on, I was able to adapt most of them to be
					executed virtually. I used zoom to facilitate card-sorting via a
					Trello board and also to observe participants interacting with my
					Figma prototype. I used Maze to help other students with their testing
					and learned a lot about planning for what is feasible and being
					flexible.
				</Body>
			</ContentBlock>
			<NextProject link="/philz" />
		</PageWrapper>
	)
}
