import React from 'react'
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


import CardSort from 'static/images/Mirror/CardSorting.png'
import SiteMap from 'static/images/Mirror/SiteMap.png'
import Persona from 'static/images/Mirror/persona.png'
import StyleTile from 'static/images/Mirror/StyleTile.png'
import Logo from 'static/images/Mirror/mirrorLogo.png'

const useStyles = createUseStyles({
	third: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: '30%',
			marginBottom: 0,
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
	return (
		<PageWrapper>
			<ContentBlock>
				<SubHeading>CASE STUDY</SubHeading>
				<Heading>
					Mirror is a global brick-and-mortar clothing store looking to take their business online
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Competitive Landscape</Heading>
				<Spacer />
				<ItemGrid startAligned>
					<div className={classes.third}>
						<SubHeading>Zara</SubHeading>
						<Spacer />
						<Body>STRENGTHS</Body>
						<ul>
							<li>Flashy Imagery</li>
							<li>Strong Aesthetic</li>
						</ul>
						<Body>WEAKNESSES</Body>
						<ul>
							<li>Marketing > Usability</li>
							<li>Poor Customer Service</li>
						</ul>
					</div>
					<div className={classes.third}>
						<SubHeading>ASOS</SubHeading>
						<Spacer />
						<Body>STRENGTHS</Body>
						<ul>
							<li>Only online</li>
							<li>Save for later feature</li>
						</ul>
						<Body>WEAKNESSES</Body>
						<ul>
							<li>Hard to filter</li>
							<li>No reviews</li>
						</ul>
					</div>
					<div className={classes.third}>
						<SubHeading>Urban Outfitters</SubHeading>
						<Spacer />
						<Body>STRENGTHS</Body>
						<ul>
							<li>Influencer marketing</li>
						</ul>
						<Body>WEAKNESSES</Body>
						<ul>
							<li>Poor reviews</li>
						</ul>
					</div>
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Discovering the Mirror Customer
				</Heading>
				<Spacer />
				<Body>I interviewed a group of males and females 22-30 years old who shop online regularly about their online shopping habits.</Body>
				<Spacer />
				<Body>Target Persona</Body>
				<SubHeading>Fashionista Fran</SubHeading>
				<Image src={Persona} size="full" />
				<Spacer />
				<Body>Seconday Persona</Body>
				<SubHeading>Browsing Brad</SubHeading>
				<Spacer />
				<Body>
					“I often have an impulse to buy something, browse a lot, and rarely end up buying it”
				</Body>
				<Spacer height={2} />
				<Body>Seconday Persona</Body>
				<SubHeading>Straight Shooter Susan</SubHeading>
				<Spacer />
				<Body>
					“My daughter loves the leggings from Athleta, so I use their online store often to send her things”
				</Body>
				<Spacer height={2} />
			</ContentBlock>
			<ContentBlock>
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
				<Spacer height={4} />
				<SubHeading>Creating a site map</SubHeading>
				<Image src={SiteMap} size="full" />
				<Spacer height={4} />
				<SubHeading>
					Identifying Design Patterns
				</SubHeading>
				<Spacer />
				<Body>
					I gathered and analyzed examples of navigation, cart, product detail page, and filtering systems from competitor websites in order to inform the Mirror wireframes.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<Heading>Locking in the layout</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Evolving the brand for online</Heading>
				<Spacer height={2} />
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
			</ContentBlock>
			<ContentBlock>
				<Heading>Usability Testing</Heading>
			</ContentBlock>
		</PageWrapper>
	)
}

