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

import useStickers from 'effects/useStickers'

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
		backgroundColor: '#fad793',
	},
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
	linkedInButton: {
		backgroundColor: '#346c63',
		padding: 8,
		color: 'white',
		display: 'inline-flex',
		'&:hover': {
			backgroundColor: '#4e7fff',
			transform: 'translate(5px, -5px)',
		},
	},
	link: {
		textDecoration: 'none',
	},
})

export default () => {
	const classes = useStyles()
	useStickers()
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
						I am an adaptable designer with experience building creative teams from the ground up at WeWork’s Flatiron School. Currently working on freelance projects in product design.
					</Body>
					<Spacer height={2} />
					<SubHeading>Email</SubHeading>
					<Body>caseyebradford@gmail.com</Body>
					<Spacer height={2} />
					<ItemGrid startAligned>
						<div className={classes.half}>
							<Heading>Experience</Heading>
							<Spacer height={2} />
							<SubHeading>Product Designer</SubHeading>
							<Body>Freelance, May 2020 - current</Body>
							<Spacer height={2} />
							<SubHeading>Design Manager</SubHeading>
							<Body>WeWork (Flatiron School), Jan 2018 - April 2020</Body>
							<Spacer height={2} />
							<SubHeading>Art Director</SubHeading>
							<Body>Vayner Media, Aug 2017 - Aug 2018</Body>
							<Spacer height={2} />
						</div>
						<div className={classes.half}>
							<Heading>Education</Heading>
							<Spacer height={2} />
							<SubHeading>Design Lab</SubHeading>
							<Body>UX Academy, May 2020 - current</Body>
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
				<ContentBlock className={classes.reviewBlock}>
					<Heading>
						What my colleagues are saying
					</Heading>
					<Spacer height={2} />
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
					<Body>Katharine Lucic, Marketing Events Manager</Body>
					<Spacer height={3} />
					<a
						className={classes.link}
						href="https://www.linkedin.com/in/caseyebradford/"
						target="_blank"
						rel="noreferrer"
					>
						<div className={classes.linkedInButton}>
							<Body><b>Read more on my LinkedIn Profile</b></Body>
						</div>
					</a>
				</ContentBlock>
			</PageWrapper>
		</div>
	)
}
