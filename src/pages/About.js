import React from 'react'
import { createUseStyles } from 'react-jss'
import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Spacer from 'components/Spacer'
import Body from 'components/Typography/Body'
import ResumeButton from 'components/ResumeButton'
import ItemGrid from 'components/ItemGrid'

import addStickerListener from 'util/addStickerListener'

const useStyles = createUseStyles({
	stickerBoard: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflowX: 'hidden',
	},
	reviewBlock: {
		// backgroundColor: 'white',
	},
	quoteSection: {
		width: '100%',
		backgroundColor: '#EA9B41',
		textAlign: 'center',
		padding: 8,
		fontWeight: 700,
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
	addStickerListener() // this is a useEffect
	return (
		<div className={classes.stickerBoard} id="stickerBoard">
			<PageWrapper>
				<ContentBlock>
					<ResumeButton />
					<Spacer height={4} />
					<Heading>About Me</Heading>
					<Body>(click anywhere)</Body>
					<Spacer />
					<Body>
						I am an adaptable graphic designer with experience building creative teams from the ground up at WeWork’s Flatiron School. Currently working on freelance projects in product design.
					</Body>
					<Spacer height={2} />
					<SubHeading>Email</SubHeading>
					<Body>caseyebradford@gmail.com</Body>
					<Spacer height={2} />
					<ItemGrid startAligned>
						<div className={classes.half}>
							<Heading>Experience</Heading>
							<Spacer height={2} />
							<SubHeading>Design Manager</SubHeading>
							<Body>WeWork (Flatiron School), Jan 2018 - April 2020</Body>
							<Spacer height={2} />
							<SubHeading>Art Director</SubHeading>
							<Body>Vayner Media, Aug 2017 - Aug 2018</Body>
							<Spacer height={2} />
							<SubHeading>Design Intern</SubHeading>
							<Body>The Uprising Creative, Aug 2016</Body>
							<Spacer height={2} />
						</div>
						<div className={classes.half}>
							<Heading>Education</Heading>
							<Spacer height={2} />
							<SubHeading>Design Lab</SubHeading>
							<Body>UX Academy, May 2020 - ongoing</Body>
							<Spacer height={2} />
							<SubHeading>Flatiron School</SubHeading>
							<Body>Intro to Front End Web Development, 2019</Body>
							<Spacer height={2} />
							<SubHeading>UCLA</SubHeading>
							<Body>Design Media Arts, Class of 2016</Body>
							<Spacer height={2} />
						</div>
					</ItemGrid>
				</ContentBlock>
				<div className={classes.quoteSection}>
					<SubHeading>
						What my coleagues are saying
					</SubHeading>
				</div>
				<ContentBlock className={classes.reviewBlock}>
					<SubHeading>
						&quot;Her creative talent is equally matched by her well-organized way of operating.&quot;
					</SubHeading>
					<Spacer />
					<Body>
						Kim Miller, CMO
					</Body>
					<Spacer height={2} />
					<SubHeading>
						&quot;Casey is not only a talented creative, but also business savvy and has the ability to anticipate needs before they come up.&quot;
					</SubHeading>
					<Spacer />
					<Body>
						Nicole Kroese, Director of Marketing
					</Body>
					<Spacer height={2} />
					<SubHeading>
						&quot;Her ability to juggle multiple high priority projects puts the rest of her team at ease.&quot;
					</SubHeading>
					<Spacer />
					<Body>Katharine Lucic</Body>
					<Spacer />
					<a href="https://www.linkedin.com/in/caseyebradford/">
						<Body>Read more on my LinkedIn Profile</Body>
					</a>
				</ContentBlock>
			</PageWrapper>
		</div>
	)
}
