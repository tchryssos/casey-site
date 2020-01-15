import React from 'react'
import { createUseStyles } from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import PageContent from 'components/PageWrapper/components/PageContent'
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
})

export default () => {
	const classes = useStyles()
	addStickerListener() // this is a useEffect

	return (
		<div className={classes.stickerBoard} id="stickerBoard">
			<PageWrapper>
				<PageContent>
					<ContentBlock>
						<ResumeButton />
					</ContentBlock>
					<ContentBlock>
						<Heading>about me</Heading>
						<Body>(click anywhere)</Body>
						<Spacer height={2} />
						<SubHeading>EMAIL</SubHeading>
						<Body>caseyebradford@gmail.com</Body>
						<Spacer />
					</ContentBlock>
					<ContentBlock>
						<Heading>experience</Heading>
						<Spacer height={2} />
						<SubHeading>DESIGN LEAD</SubHeading>
						<Body>WeWork (Flatiron School), Jan 2018 - current</Body>
						<Spacer height={2} />
						<SubHeading>ART DIRECTOR</SubHeading>
						<Body>Vayner Media, Aug 2017 - Aug 2018</Body>
						<Spacer height={2} />
						<SubHeading>DESIGN INTERN</SubHeading>
						<Body>The Uprising Creative, Aug 2016</Body>
						<Spacer height={3} />
					</ContentBlock>
				</PageContent>
			</PageWrapper>
		</div>
	)
}
