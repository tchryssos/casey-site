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
	aboutContainer: {
		paddingLeft: '48px',
		[MD_MIN_STRING]: {
			paddingLeft: '30%',
		},
	},
})

export default () => {
	const classes = useStyles()
	addStickerListener() // this is a useEffect
	return (
		<div className={classes.stickerBoard} id="stickerBoard">
			<PageWrapper>
				<ContentBlock className={classes.aboutContainer}>
					<ResumeButton />
					<Spacer height={4} />
					<Heading>About Me</Heading>
					<Body>(click anywhere)</Body>
					<Spacer height={2} />
					<SubHeading>Email</SubHeading>
					<Body>caseyebradford@gmail.com</Body>
					<Spacer height={2} />
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
					<Spacer height={3} />
				</ContentBlock>
			</PageWrapper>
		</div>
	)
}
