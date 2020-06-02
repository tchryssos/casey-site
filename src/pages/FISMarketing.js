import React from 'react'
import { createUseStyles } from 'react-jss'

import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import SubHeading from 'components/Typography/SubHeading'
import Image from 'components/Image'
import VideoPlayer from 'components/VideoPlayer'
import Spacer from 'components/Spacer'
import ItemGrid from 'components/ItemGrid'

import FISorg from 'static/images/FISMarketing/FIS-orgchart-01.png'
import CourseGraphic from 'static/images/FISMarketing/CourseGraphic.svg'

import LondonTube from 'static/images/FISMarketing/LondonTubeAd.png'
import LinkNyc from 'static/images/FISMarketing/LinkNyc.png'
import IG1 from 'static/images/FISMarketing/ig-6.gif'
import IG2 from 'static/images/FISMarketing/houchronad.png'
import BackToSchool from 'static/images/FISMarketing/BackToSchool-Social.gif'
import IG4 from 'static/images/FISMarketing/ig-4.png'
import IG5 from 'static/images/FISMarketing/ig-5.png'
import IG6 from 'static/images/FISMarketing/ActuallyGetJobs.gif'
import CyberGif from 'static/images/FISMarketing/CyberGif_Square.gif'
import IG8 from 'static/images/FISMarketing/ig-8.png'
import JobsReport from 'static/images/FISMarketing/93-finalweb.gif'
import Scrum from 'static/images/FISMarketing/FIS-Scrum.png'


const useStyles = createUseStyles({
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
	callOutText: {
		fontWeight: 800,
		backgroundColor: '#ea9b41',
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Heading>Building the creative team at Flatiron School</Heading>
					</div>
					<Image className={classes.half} src={FISorg} />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Working with a nimble internal team
				</Heading>
				<Spacer />
				<Body>
					In order to amplify the impact of our 4-person creative team, we engaged freelancers and agencies to help us execute across video, photo, and illustration.
				</Body>
				<Spacer height={4} />
				<SubHeading>
					Using video to tell our story
				</SubHeading>
				<Spacer />
				<Body>
					Video by Humanaut
				</Body>
				<Spacer />
				<Body>
					Flatiron engaged the Humanaut agency to create a brand campaign video and subsequent cuts that could be used across our paid and earned channels.
				</Body>
				<Spacer />
				<Body>
					Between June 2019 and June 2020,&nbsp;
					<span className={classes.callOutText}>
						1.6 million people
					</span>
					&nbsp;were served this ad on YouTube alone and it had a&nbsp;
					<span className={classes.callOutText}>
						15% view rate
					</span>
					&nbsp;during that time. When we launched this video, the&nbsp;
					<span className={classes.callOutText}>
						cost per application was half of the average price.
					</span>
				</Body>
				<VideoPlayer
					src="https://player.vimeo.com/video/338254527"
					title="Hero version 14"
				/>
				<VideoPlayer
					src="https://player.vimeo.com/video/338254396"
					title="Change Things 30 seconds"
				/>
				<Spacer height={4} />
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<SubHeading>
							Differentiating products and building brand
						</SubHeading>
						<Spacer />
						<Body>
							Graphics by Sepehr Mokhtarzadeh
						</Body>
						<Spacer />
						<Body>
							One of Flatiron's strategic goals was to differentiate the products while continuing to build the master brand. I vetted freelance illustrators and ultimately brought on Sepehr Mokhtarzadeh to create the graphics for us. This gave our internal team more bandwith to work on business-as-usual projects, but still had a large impact on our creative. The graphics were used on our website and our across paid advertising.
						</Body>
					</div>
					<Image src={CourseGraphic} className={classes.half} />
				</ItemGrid>
				<Spacer height={4} />
				<SubHeading>
					Using photography to document our community
				</SubHeading>
				<Spacer />
				<Body>
					Photography by Lauren Kallen
				</Body>
				<Spacer />
				<Body>
					As a brand, Flatiron strives to be authentic and transparent. Some of its key differentiators are its amazing community of students and teachers and its access to beautiful WeWork spaces. I wanted to capture photography that showed real students working together in these comfortable and inspiring spaces. Photography was a very important part of the brand that needed to serve many parts of the team including paid advertising, organic social, the website and landing pages.
				</Body>
				<Spacer />
				<ItemGrid>
					<Image src={IG5} alt="Young woman coding" size="half" />
					<Image
						src={IG8}
						size="half"
						alt="Students comparing code in ad for '2020 skills'"
					/>
					<Image src={IG4} size="half" alt="Students coding in Dallas" />
					<Image src={IG2} size="half" alt="Students coding" />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Launch, launch, launch
				</Heading>
				<Spacer />
				<SubHeading>
					Use out-of-home advertising to make a big splash in new markets
				</SubHeading>
			</ContentBlock>
			<ContentBlock>
				<ItemGrid>
					<div className={classes.half}>
						<Heading>
							How we work
						</Heading>
						<Spacer />
						<SubHeading>
							Two Week Sprint Cycles
						</SubHeading>
						<Spacer />
						<Body>
							Keep us on track with the rest of the organization and give the brand team room to think creatively. Help us ruthlessly prioritize tasks.
						</Body>
						<Spacer />
						<SubHeading>
							Weekly Creative Reviews
						</SubHeading>
						<Spacer />
						<Body>
							Give the team a chance to talk through their work and to take feedback from key stakeholders.
						</Body>
						<Spacer />
						<SubHeading>
							Constant Sharing
						</SubHeading>
						<Spacer />
						<Body>
							We use a slack channel, #marketing-inspo, to share things with the entire team and keep everyone thinking innovatively.
						</Body>
					</div>
					<Image src={Scrum} className={classes.half} />
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Heading>Out of Home Advertising</Heading>
				<Image src={LondonTube} alt="LondonTube Ad" size="full" />
				<Image src={LinkNyc} alt="Nyc Link Ad" size="full" />
			</ContentBlock>
			<ContentBlock>
				<Heading>Social Advertising</Heading>
				<Spacer />
				<ItemGrid>
					<Image src={IG1} alt="JIntro to Front End Graphic" />
					<Image src={JobsReport} alt="93% employment rate" />
				</ItemGrid>

				<Image src={BackToSchool} alt="Parents go back to school too" size="full" />
				<ItemGrid>
					<Image src={CyberGif} alt="Learn Cybersecurity Analytics" />
					<Image src={IG6} alt="Logos of employers" />
				</ItemGrid>
				<VideoPlayer
					src="https://player.vimeo.com/video/324643304"
					title="Stop motion video"
				/>
			</ContentBlock>
		</PageWrapper>
	)
}
