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

const useStyles = createUseStyles({
	third: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: '30%',
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
					Mirror is a global brick-and-mortar clothing store looking to take their business online.
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>Competitive Landscape</Heading>
				<Spacer />
				<ItemGrid stackedOnMobile startAligned>
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
					User Interviews
				</Heading>
				<Spacer />
				<Body>I interviewed 3 people, males and females 22-30 years old.</Body>
			</ContentBlock>
		</PageWrapper>
	)
}

