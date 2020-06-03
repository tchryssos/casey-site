import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

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

import FISorg from 'static/images/FISMarketing/orgchart-01.gif'
import CourseGraphic from 'static/images/FISMarketing/CourseGraphic.svg'
import Spinner from 'static/images/FISMarketing/FISM-circle.svg'

import LondonTube from 'static/images/FISMarketing/LondonTubeAd.png'
import LinkNyc from 'static/images/FISMarketing/LinkNyc.png'
import IG2 from 'static/images/FISMarketing/houchronad.png'
import IG4 from 'static/images/FISMarketing/ig-4.png'
import IG5 from 'static/images/FISMarketing/ig-5.png'
import IG8 from 'static/images/FISMarketing/ig-8.png'
import Scrum from 'static/images/FISMarketing/FIS-Scrum.png'


const useStyles = createUseStyles({
	'@keyframes spin': {
		from: { transform: 'rotate(0deg)' },
		to: { transform: 'rotate(90deg)' },
	},
	cardImage: {
		position: 'absolute',
		zIndex: 2,
	},
	cardBG: {
		zIndex: 0,
		animation: '$spin infinite 5s linear',
		width: '90%',
	},
	cardAnimationWrapper: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
	callOutText: {
		fontWeight: 700,
	},
	HowWeWorkBlock: {
		backgroundColor: '#ed69be',
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<ItemGrid stackedOnMobile>
					<div className={classes.half}>
						<Heading>Managing the creative team at Flatiron School</Heading>
					</div>
					<div
						className={clsx(
							classes.half,
							classes.cardAnimationWrapper,
						)}
					>
						<Image className={classes.cardImage} size="full" src={FISorg} />
						<Image className={classes.cardBG} size="full" src={Spinner} />
					</div>
				</ItemGrid>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Working with a lean internal team
				</Heading>
				<Spacer />
				<Body>
					In order to amplify the impact of our 4-person creative team, we engaged freelancers and agencies to help us execute across video, photo, and illustration.
				</Body>
				<Spacer height={4} />
				<SubHeading>
					Storytelling through video
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
							Differentiating products while building a brand
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
					Storytelling through photography
				</SubHeading>
				<Spacer />
				<Body>
					Photography by Lauren Kallen
				</Body>
				<Spacer />
				<Body>
					As a brand, Flatiron strives to be authentic and transparent. Some of its key differentiators are its amazing community of students and teachers and its access to beautiful WeWork spaces. I wanted to capture photography that showed real students working together in these comfortable and inspiring spaces. 
				</Body>
				<Spacer />
				<Body>
					Photography was a very important part of the brand that needed to serve many parts of the team including paid advertising, organic social, the website and landing pages.&nbsp;
					<span className={classes.callOutText}>
						These photos supported paid campaigns with a monthly budget of over 1 million dollars.
					</span>
				</Body>
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
					Always be launching
				</Heading>
				<Spacer height={4} />
				<SubHeading>
					Entering New Markets
				</SubHeading>
				<Spacer />
				<Body>
					In my time at Flatiron School, we launched&nbsp;
					<span className={classes.callOutText}>
						10 new locations and 3 new curriculums.
					</span>
					&nbsp;A big part of our regional marketing spend went to out of home buys in various markets both new and established.
				</Body>
				<Spacer />
				<Body>
					In London we had the most success with out of home advertising and, with our first campaign,&nbsp;
					<span className={classes.callOutText}>
						saw a 60% increase in organic traffic to the site.
					</span>
				</Body>
				<Image src={LondonTube} alt="LondonTube Ad" size="full" />
				<Image src={LinkNyc} alt="Nyc Link Ad" size="full" />
				<Spacer height={4} />
				<SubHeading>
					Creating impactful scholarships
				</SubHeading>
				<Spacer />
				<Body>
					One of the most successful scholarships we executed was an initiative to get more women into tech with the ticketing platform, SeatGeek.
				</Body>
				<Spacer />
				<Body>
					<span className={classes.callOutText}>
						665 people applied&nbsp;
					</span>
					for this scholarship over the 3 week period that it was live for and 60 of those applicants&nbsp;
					<span className={classes.callOutText}>
						enrolled, mostly on first conversion.
					</span>
				</Body>
			</ContentBlock>
			<ContentBlock className={classes.HowWeWorkBlock}>
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
		</PageWrapper>
	)
}
