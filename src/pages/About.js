import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import PageContent from 'components/PageWrapper/components/PageContent'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Spacer from 'components/Spacer'
import Body from 'components/Typography/Body'
import Image from 'components/Image'

import Resume from 'static/svg/about/resume.svg'
import ResumeRed from 'static/svg/about/resumeRed.svg'

const About = () => {
	const [isDownloadHovered, setIsDownloadHovered] = useState(false)
	return (
		<PageWrapper>
			<PageContent>
				<ContentBlock>
					<div
						onMouseEnter={() => setIsDownloadHovered(true)}
						onMouseLeave={() => setIsDownloadHovered(false)}
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
					<Heading>work w me</Heading>
					<Spacer height={2} />
					<Body>I&apos;m creative bla bla</Body>
				</ContentBlock>
			</PageContent>
		</PageWrapper>
	)
}

export default About
