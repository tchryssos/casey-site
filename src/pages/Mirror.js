import React, { Suspense } from 'react'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

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
import MobileWires from 'static/images/Mirror/MobilePrototypeWire.png'
import UserFlow from 'static/images/Mirror/UserFlow-01.png'
import UsabilityHeader from 'static/images/Mirror/Frame30.png'

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
			<ContentBlock className={classes.brandBlock}>
				<SubHeading>CASE STUDY</SubHeading>
				<Heading>
					Mirror is a global brick-and-mortar clothing store looking to take their business online
				</Heading>
			</ContentBlock>
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
			<ContentBlock>
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
			</ContentBlock>
			<ContentBlock className={classes.wiresBlock}>
				<Heading>Locking in the layout</Heading>
				<Spacer />
				<SubHeading>User Task: Purchase a new white Tshirt</SubHeading>
				<Image src={UserFlow} size="full" />
				<Image src={MobileWires} size="full" />
				<VideoPlayer
					src="https://player.vimeo.com/video/434350879?loop=1?"
					title="Prototype Animation"
					aspectRatio="1:1"
				/>
			</ContentBlock>
			<ContentBlock className={classes.brandBlock}>
				<Heading>Evolving the brand for online</Heading>
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
				<Body>Mirror's goals are to have a site that is accessible and easy to use but also to be a trendy and modern brand. For these reasons I used a digestible san-serif typeface for the body text and played with multiple bold colors to both add excitment and create more heirarchy.</Body>
				<Image src={StyleTile} size="full" />
				<Image src={UIKIT} size="full" />
			</ContentBlock>
			<ContentBlock>
				<Heading>High Fidelity Mock Ups</Heading>
			</ContentBlock>
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
							You've spilled on your favorite white shirt and need to order a new one.
						</Body>
					</div>
					<Image src={UsabilityHeader} className={classes.half} />
				</ItemGrid>
				<Spacer />
				<SubHeading>Executing the tests</SubHeading>
				<Spacer />
				<SubHeading>Analyzing the results</SubHeading>
			</ContentBlock>
		</PageWrapper>
	)
}

