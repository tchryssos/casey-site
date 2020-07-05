import React, { useEffect, useRef, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import {
	MD_MIN_STRING, MD_MIN_VALUE,
} from 'constants/styles/breakpoints'

import ScrollContext from 'contexts/scroll'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import ItemGrid from 'components/ItemGrid'
import SubHeading from 'components/Typography/SubHeading'
import Spacer from 'components/Spacer'
import Body from 'components/Typography/Body'
import Image from 'components/Image'
import VideoPlayer from 'components/VideoPlayer'

import CardSort from 'static/images/Mirror/CardSorting.png'
import SiteMap from 'static/images/Mirror/SiteMap.png'
import Persona from 'static/images/Mirror/Persona-03.png'
import StyleTile from 'static/images/Mirror/StyleTile-03.png'
import Logo from 'static/images/Mirror/Logo-01.png'
import CartPattern from 'static/images/Mirror/DesignPatternCart-01.png'
import FilterPattern from 'static/images/Mirror/DesignPatternFilter-02.png'
import NavPattern from 'static/images/Mirror/DesignPatternNav-03.png'
import UIKIT from 'static/images/Mirror/UIKIT.png'
import UserFlow from 'static/images/Mirror/userflow-02.png'
import UsabilityHeader from 'static/images/Mirror/Frame30.png'
import SizeGuide from 'static/images/Mirror/SizeGuide.png'
import HifiHome from 'static/images/Mirror/HifIHome.png'
import HifiCategory from 'static/images/Mirror/HifiCategory.png'
import HifiPDP from 'static/images/Mirror/HiFiPDP.png'


const useStyles = createUseStyles({
	link: {
		color: 'white',
		display: 'block',
		'&:hover': {
			color: 'white',
		},
		'&:visited': {
			color: 'white',
		},
	},
	MirrorPageNav: {
		position: 'fixed',
		display: 'flex',
		justifyContent: 'space-between',
		bottom: 0,
		width: '100%',
		padding: 16,
		boxSizing: 'border-box',
		color: 'white',
		backgroundColor: '#384ea1',
	},
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
	brandBlock: {
		backgroundColor: '#FFFAF1',
	},
	secondaryBlock: {
		backgroundColor: '#fde8c7',
	},
	whiteBlock: {
		backgroundColor: 'white',
	},
	wiresBlock: {
		backgroundColor: '#b4e0ff',
	},
	hifiblock: {
		backgroundColor: '#e7b2c2',
	},
	boxShadow: {
		boxShadow: '10px 10px #384ea1',
	},
	research: {
		backgroundColor: '#384ea1',
		padding: 8,
		color: 'white',
		whiteSpace: 'nowrap',
		textAlign: 'center',
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
	const scrollingContainer = useRef()
	const scrollingTextContainer = useRef()
	const { getScroll } = useContext(ScrollContext)
	const scrollListener = () => {
		if (window.innerWidth >= MD_MIN_VALUE) {
			// @TODO rework this logic into a component or effect
			const scrollOffset = getScroll()?.scrollTop - scrollingContainer.current.offsetTop
			const containerHeight = scrollingContainer.current.offsetHeight
			const textHeight = scrollingTextContainer.current.offsetHeight
			if (scrollOffset >= -100 && scrollOffset <= containerHeight - textHeight) {
				scrollingTextContainer.current.style.transform = `translateY(${scrollOffset}px)`
			}
		} else {
			scrollingTextContainer.current.style.transform = 'translateY(0px)'
		}
	}
	useEffect(() => {
		const scrollZone = getScroll()
		if (window.innerWidth >= MD_MIN_VALUE && scrollZone) {
			scrollZone.addEventListener('scroll', scrollListener)
		}
		return () => scrollZone?.removeEventListener('scroll', scrollListener)
	}, [])
	return (
		<PageWrapper>
			<div className={classes.MirrorPageNav}>
				<a className={classes.link} href="#brief">
					<Body>Brief</Body>
				</a>
				<a className={classes.link} href="#persona">
					<Body>Personas</Body>
				</a>
				<a className={classes.link} href="#ia">
					<Body>Information Architecture</Body>
				</a>
				<a className={classes.link} href="#layout">
					<Body>Layout</Body>
				</a>
				<a className={classes.link} href="#branf">
					<Body>Brand</Body>
				</a>
				<a className={classes.link} href="#testing">
					<Body>Testing</Body>
				</a>
			</div>
			<a name="brief">
				<ContentBlock className={classes.secondaryBlock}>
					<ItemGrid>
						<div className={classes.half}>
							<SubHeading>CASE STUDY</SubHeading>
							<Heading>
								Mirror is a global brick-and-mortar clothing store looking to take their business online
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
						This project was done as part of the curriculum for Design Lab&apos;s UX Academy. I completed the project on my own and was responsible for the research, UX/UI Design, and asset creation.
					</Body>
				</ContentBlock>
			</a>
			<div className={classes.research}>
				RESEARCH
			</div>
			<a name="persona">
				<ContentBlock className={classes.brandBlock}>
					<Heading>
						Discovering the Mirror Customer
					</Heading>
					<Spacer />
					<Body>
						I did competitive research as well as interviewed a group of males and females 22-30 years old who shop online regularly about their online shopping habits.
					</Body>
					<Spacer />
					<Image src={Persona} size="full" />
				</ContentBlock>
			</a>
			<div className={classes.research}>
				ARCHITECTURE
			</div>
			<a name="ia">
				<ContentBlock className={classes.brandBlock}>
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
								I did a remote card sorting exercise via Trello and Zoom with 6 participants who shop online regularly. They sorted 50 items from the Mirror catalog.
							</Body>
							<ul>
								<li>
									Most participants included skirts, pants, and overalls in &quot;Bottoms&quot;
								</li>
								<li>
									Most participants wanted to sort major categories by occassion
								</li>
								<li>
									There was the most variety in the way participants organized the &quot;Accessories&quot; category.
								</li>
							</ul>
							<Spacer />
						</div>
					</ItemGrid>
					<Spacer height={2} />
					<SubHeading>Creating a site map</SubHeading>
					<Image src={SiteMap} size="full" />
				</ContentBlock>
			</a>
			{/* <ContentBlock className={classes.secondaryBlock}>
				<Heading>
					Identifying Design Patterns
				</Heading>
				<Spacer />
				<Body>
					I gathered and analyzed examples of navigation, cart, product detail page, and filtering systems from competitor websites in order to inform the Mirror wireframes.
				</Body>
				<Spacer />
				<SubHeading>Navigation</SubHeading>
				<Spacer />
				<Body>
					The ASOS nav bar has a toggle for mens/womens and then cascades down in layers revealing all of the options which is helpful when navigating. It is nice that it includes some images. This menu starts as a hamburger menu on mobile but has the same structure as the desktop version.
				</Body>
				<Image src={NavPattern} size="full" />
				<Spacer />
				<SubHeading>Filtering</SubHeading>
				<Spacer />
				<Body>
					Urban keeps all of the filters available on desktop on the right side while you browse. This is allows the filters and options to always be seen.
					Madewell and Outdoor Voices use a top nav for filters which feels more premium.	Madewell also includes occasions to sort by pulled out from the filtering.
				</Body>
				<Image src={FilterPattern} size="full" />
				<Spacer />
				<SubHeading>Cart Overlay</SubHeading>
				<Spacer />
				<Body>
					It is common on shopping sites to show a preview of the cart when a user hovers over or clicks the cart icon. This is helpful because users can preview their cart without losing the page that they are on and they can edit their cart while they shop
				</Body>
				<Image src={CartPattern} size="full" />
			</ContentBlock> */}
			<div className={classes.research}>
				LAYOUT
			</div>
			<a name="layout">
				<ContentBlock className={classes.wiresBlock}>
					<Heading>Building the user experience</Heading>
					<Spacer />
					<div ref={scrollingContainer}>
						<ItemGrid stackedOnMobile startAligned>
							<div
								ref={scrollingTextContainer}
								className={clsx(
									classes.half,
									classes.scrollTextPadding,
								)}
							>
								<SubHeading>USER TASK</SubHeading>
								<Heading>Add a new white Tshirt to the cart</Heading>
								<Spacer />
								<Body>
									For this project I built out the necessary pages for a user to filter, find an item, and add it to the cart.
								</Body>
							</div>
							<Image src={UserFlow} className={classes.half} />
						</ItemGrid>
					</div>
					<VideoPlayer
						src="https://player.vimeo.com/video/434350879?loop=1&autopause=0"
						title="Prototype Animation"
						aspectRatio="1:1"
					/>
				</ContentBlock>
			</a>
			<div className={classes.research}>
				BRAND
			</div>
			<a name="brand">
				<ContentBlock
					intersectionCallback={() => console.log("Hello")}
					className={classes.brandBlock}
				>
					<Heading>Evolving the brand for their online debut</Heading>
					<ItemGrid>
						<div className={classes.half}>
							<SubHeading>Logo Exploration</SubHeading>
							<Spacer />
							<Body>While exploring logo options for Mirror, I played a lot with turning the &quot;o&quot; into a literal mirror. Ultimately, this felt outdated but I used a font that allowed me to stretch some of the letters to place emphasis on the &quot;o&quot; in a more elevated way. </Body>
						</div>
						<div className={classes.half}>
							<Image src={Logo} size="full" />
						</div>
					</ItemGrid>
					<Spacer height={2} />
					<SubHeading>Developing a Style Guide and UI Kit</SubHeading>
					<Spacer />
					<Body>Mirror&apos;s goals are to have a site that is accessible and easy to use but also to be a trendy and modern brand. For these reasons I used a digestible san-serif typeface for the body text and played with multiple bold colors to both add excitment and create more heirarchy.</Body>
					<Image src={StyleTile} size="full" />
					<Image src={UIKIT} size="full" />
				</ContentBlock>
				<ContentBlock className={classes.hifiblock}>
					<Heading>High Fidelity Mock Ups</Heading>
					<Spacer />
					<Body>
						I used Figma to create visual designs for the key pages: Home Page, Category Page, and Product Detail Page.
					</Body>
					<Image src={HifiHome} size="full" />
					<Image src={HifiCategory} size="full" />
					<Image src={HifiPDP} size="full" />
				</ContentBlock>
			</a>
			<div className={classes.research}>
				TESTING
			</div>
			<a name="testing">
				<ContentBlock className={classes.brandBlock}>
					<ItemGrid>
						<div className={classes.half}>
							<Heading>Usability Testing</Heading>
							<Spacer />
							<SubHeading>GOALS</SubHeading>
							<Body>
								Test whether users can find an item and add it to the cart. Understand how many participants use filters and quick view functionality.
							</Body>
							<Spacer />
							<SubHeading>PARTICIPANTS</SubHeading>
							<Body>
								Six users, male and female, 22-35 years old.
							</Body>
							<Spacer />
							<SubHeading>PROMPT</SubHeading>
							<Body>
								You&apos;ve spilled on your favorite white shirt and need to order a new one.
							</Body>
						</div>
						<Image
							src={UsabilityHeader}
							size="full"
							className={clsx(
								classes.half,
								classes.boxShadow,
							)}
						/>
					</ItemGrid>
					<Spacer />
					<Spacer />
					<SubHeading>User testing in a remote world</SubHeading>
					<Spacer />
					<Body>
						For my user tests I created a Figma prototype and had participants screenshare over Zoom as they moved through the task, narrating their decision making process along the way.
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
							<SubHeading>of participants added an item to the cart with no problem</SubHeading>
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
							<Body>Multiple participants mentioned discrepancies in the price or that the prices were high which signals that price is very important to users. Many also mentioned wanting to click on the size guide to find their size, which had not yet been prototyped. To the right is a first iteration I created after these tests.</Body>
						</div>
						<Image src={SizeGuide} className={classes.half} />
					</ItemGrid>
					<Spacer />
					<SubHeading>QuickView Feature</SubHeading>
					<Spacer />
					<Body>Only one person out of six used the quick view feature. I think this is because I only asked participants to add one item to the cart instead of multiple. I would want to test this again with a multi-item task.</Body>
				</ContentBlock>
			</a>
		</PageWrapper>
	)
}

