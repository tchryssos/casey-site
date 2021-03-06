import React, { useRef, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import debounce from 'lodash.debounce'

import { MD_MIN_STRING } from 'constants/styles/breakpoints'

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
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
	Button: {
		backgroundColor: '#2b2b2b',
		padding: 8,
		color: 'white',
		display: 'inline-flex',
		textTransform: 'uppercase',
		textDecoration: 'none',
		'&:hover': {
			backgroundColor: '#4e7fff',
		},
	},
	link: {
		textDecoration: 'none',
	},
})

const About = () => {
	useStickers()
	const classes = useStyles()
	const stickerBoardRef = useRef()
	const [aboutScroll, setAboutScroll] = useState(0)
	const aboutScrollLastRef = useRef(0)

	const onScroll = debounce(() => {
		setAboutScroll(stickerBoardRef.current.scrollTop)
	}, 100)

	useEffect(() => {
		if (stickerBoardRef) {
			stickerBoardRef.current.addEventListener('scroll', onScroll)
		}
		return () =>
			stickerBoardRef?.current?.removeEventListener('scroll', onScroll)
	}, [stickerBoardRef])

	const menuOpenOverride = (isMenuOpen, pageWrapperRef) => {
		if (isMenuOpen) {
			// eslint-disable-next-line no-param-reassign
			pageWrapperRef.current.style.top = `-${aboutScroll}px`
			aboutScrollLastRef.current = aboutScroll
		} else if (stickerBoardRef.current) {
			// eslint-disable-next-line no-param-reassign
			pageWrapperRef.current.style.top = ''
			stickerBoardRef.current.scroll(0, aboutScrollLastRef.current)
		}
	}

	return (
		<div
			className={classes.stickerBoard}
			id="stickerBoard"
			ref={stickerBoardRef}
		>
			<PageWrapper menuOpenOverride={menuOpenOverride}>
				<ContentBlock>
					<ResumeButton />
					<Spacer height={4} />
					<Heading>About Me</Heading>
					<Body>(click anywhere)</Body>
					<Spacer height={2} />
					<SubHeading>Email</SubHeading>
					<Body>caseyebradford@gmail.com</Body>
					<Spacer height={2} />
					<ItemGrid startAligned>
						<div className={classes.half}>
							<Heading>Experience</Heading>
							<Spacer height={2} />
							<SubHeading>Product Designer</SubHeading>
							<Body>Core, Feb 2021 - current</Body>
							<Spacer height={2} />
							<SubHeading>Product Designer</SubHeading>
							<Body>Freelance, May 2020 - Feb 2021</Body>
							<Spacer height={2} />
							<SubHeading>Design Manager</SubHeading>
							<Body>WeWork (Flatiron School), Jan 2018 - April 2020</Body>
							<Spacer height={2} />
						</div>
						<div className={classes.half}>
							<Heading>Education</Heading>
							<Spacer height={2} />
							<SubHeading>Design Lab</SubHeading>
							<Body>UX Academy, May - August 2020</Body>
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
					<Heading>What my colleagues are saying</Heading>
					<Spacer height={2} />
					<SubHeading>
						&quot;Her creative talent is equally matched by her well-organized
						way of operating.&quot;
					</SubHeading>
					<Spacer />
					<Body>Kim Miller, CMO</Body>
					<Spacer height={2} />
					<SubHeading>
						&quot;Casey is not only a talented creative, but also business savvy
						and has the ability to anticipate needs before they come up.&quot;
					</SubHeading>
					<Spacer />
					<Body>Nicole Kroese, Director of Marketing</Body>
					<Spacer height={2} />
					<SubHeading>
						&quot;Her ability to juggle multiple high priority projects puts the
						rest of her team at ease.&quot;
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
						<div className={classes.Button}>
							<Body>Read more on my LinkedIn Profile</Body>
						</div>
					</a>
				</ContentBlock>
			</PageWrapper>
		</div>
	)
}

export default About
