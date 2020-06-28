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

import PAINPOINTS from 'static/images/Mirror/Pain_Goal-01.png'
import GOALS from 'static/images/Mirror/Pain_Goal-02.png'
import CardSort from 'static/images/Mirror/CardSorting.png'
import SiteMap from 'static/images/Mirror/SiteMap.png'

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
				<SubHeading>Target Persona</SubHeading>
				<Spacer height={2} />
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<SubHeading>Main Goals</SubHeading>
						<Image src={PAINPOINTS} size="full" />
					</div>
					<div className={classes.half}>
						<SubHeading>Main Pain Points</SubHeading>
						<Image src={GOALS} size="full" />
					</div>
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Heading>What is the best way to organize an online shop?</Heading>
				<Spacer />
				<ItemGrid>
					<div className={classes.half}>
						<SubHeading>Card Sorting Exercise</SubHeading>
						<Spacer />
						<Body>
							I did a remote card sorting exercise via Trello and Zoom with 6 participants who shop online regularly. They sorted 50 items from the Mirror catalog.
						</Body>
						<Spacer />
					</div>
					<div className={classes.half}>
						<Image src={CardSort} size="full" />
					</div>
				</ItemGrid>
				<SubHeading>Key Takeaways</SubHeading>
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
				<Spacer height={4} />
				<SubHeading>Creating a site map</SubHeading>
				<Image src={SiteMap} size="full" />
				<Spacer height={4} />
				<SubHeading>
					Identifying Design Patterns
				</SubHeading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Locking in the layout</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Evolving the brand for online</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Usability Testing</Heading>
			</ContentBlock>
		</PageWrapper>
	)
}

