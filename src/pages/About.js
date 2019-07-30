import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import PageContent from 'components/PageWrapper/components/PageContent'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Spacer from 'components/Spacer'
import Body from 'components/Typography/Body'
import Image from 'components/Image'

import addStickerListener from 'util/addStickerListener'

import Resume from 'static/svg/about/resume.svg'
import ResumeRed from 'static/svg/about/resumeRed.svg'

const styles = {
	stickerBoard: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	resumeWrapper: {
		display: 'inline',
	},
}

const About = ({ classes }) => {
	const [isDownloadHovered, setIsDownloadHovered] = useState(false)

	addStickerListener()

	return (
		<div className={classes.stickerBoard} id="stickerBoard">
			<PageWrapper>
				<PageContent>
					<ContentBlock>
						<div
							onMouseEnter={() => setIsDownloadHovered(true)}
							onMouseLeave={() => setIsDownloadHovered(false)}
							className={classes.resumeWrapper}
						>
							<NavLink to="/">
								<Image
									src={isDownloadHovered ? ResumeRed : Resume}
									alt="Resume download"
								/>
							</NavLink>
						</div>
						<Spacer />
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
					<ContentBlock>
						<Heading>about me</Heading>
						<Spacer height={2} />
						<Body>(click anywhere)</Body>
					</ContentBlock>
				</PageContent>
			</PageWrapper>
		</div>
	)
}

export default injectSheet(styles)(About)
