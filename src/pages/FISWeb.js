import React from 'react'
import { createUseStyles } from 'react-jss'

import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'
import Image from 'components/Image'
import SubHeading from 'components/Typography/SubHeading'
import ItemGrid from 'components/ItemGrid'

import HeroBefore from 'static/images/FISWeb/FISWeb_OG_2.png'
import AACombo from 'static/images/FISWeb/AACombos.png'
import Cyber from 'static/images/FISWeb/Cyber.png'

const useStyles = createUseStyles({
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
				<Heading>Flatiron School Hero Section Redesign</Heading>
				<Spacer />
			</ContentBlock>
			<ContentBlock>
				<Body>
					Current hero section on any given page at flatironschool.com.
				</Body>
				<Spacer />
				<Image size="full" src={HeroBefore} />
				<ItemGrid>
					<div className={classes.half}>
						<SubHeading>GOAL #1</SubHeading>
						<Heading>Increase Accessibility</Heading>
						<Spacer />
						<Body>
							After auditing this section for accessibility we found that the buttons with white text on a blue background did not meet AA standards. We also wanted to make sure that the white text over the image was legible in every case.
						</Body>
					</div>
					<Image className={classes.half} src={AACombo} />
				</ItemGrid>
				<Spacer height={4} />
				<SubHeading>GOAL #2</SubHeading>
				<Heading>Differentiate Pages</Heading>
				<Spacer />
				<Body>
					When the header on every page looks exactly the same it is hard for users to tell where they are on the site. We want to uncover the graphics that make individual campaigns and courses stand out so that if you are on a page for cybersecurity and not design - you know it.
				</Body>
				<Image size="full" src={Cyber} />
				<Spacer height={4} />
				<SubHeading>GOAL #3</SubHeading>
				<Heading>Modernize</Heading>
				<Spacer />
				<Body>
					Flatiron School is a coding bootcamp and we want prospective students to be impressed with our tech presence.
				</Body>
			</ContentBlock>
		</PageWrapper>
	)
}

