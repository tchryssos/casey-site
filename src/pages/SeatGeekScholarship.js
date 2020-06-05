import React from 'react'
import { createUseStyles } from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Image from 'components/Image'
import Spacer from 'components/Spacer'
import ItemGrid from 'components/ItemGrid'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import Stickers from 'static/images/SeatGeekScholarship/stickers.png'
import FiftyFifty from 'static/images/SeatGeekScholarship/50-50-graphic.png'
import Timeline from 'static/images/SeatGeekScholarship/womens-month-timeline.png'
import CarolAnimation from 'static/images/SeatGeekScholarship/carol-animation.gif'
import Grace from 'static/images/SeatGeekScholarship/GraceHopper.png'
import GraceHeader from 'static/images/SeatGeekScholarship/GraceHopper_transparent.png'
import Sweatshirt from 'static/images/SeatGeekScholarship/TrailblazerSweatshirt.jpg'
import Perlman from 'static/images/SeatGeekScholarship/perlman.png'
import Coalition from 'static/images/SeatGeekScholarship/coalition.png'

const useStyles = createUseStyles({
	headerColor: {
		backgroundColor: '#00b3e6',
	},
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: '50%',
			marginBottom: 0,
		},
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.headerColor}>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Heading>Flatiron School x SeatGeek 50/50 Scholarship</Heading>
						<Spacer />
						<SubHeading>
							Role: Creative Direction and Design
						</SubHeading>
					</div>
					<Image className={classes.half} src={GraceHeader} alt="Animation of Carol Shaw" />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Image
					src={Stickers}
					alt="Stickers"
					size="full"
					bordered
				/>
				<Image src={FiftyFifty} alt="Scholarship advertisement" size="full" bordered />
				<Image src={Timeline} alt="Women in computing timeline" size="full" bordered />
				<Image src={CarolAnimation} alt="Animation of Carol Shaw" size="full" bordered />
				<Image src={Grace} alt="Grace Hopper Sticker" size="full" bordered />
				<Spacer height={2} />
				<SubHeading>
					665 people applied for this scholarship over the 3 week period that it was live for and 60 of those applicants enrolled, mostly on first conversion.
				</SubHeading>
				<Spacer height={2} />
				<Image src={Sweatshirt} alt="Trailblazer Sweatshirt" size="full" bordered />
				<ItemGrid>
					<Image src={Perlman} alt="Drawing of Radia Perlman" bordered />
					<Image src={Coalition} alt="50/50 gender coalition flyer" bordered />
				</ItemGrid>
			</ContentBlock>
		</PageWrapper>
	)
}
