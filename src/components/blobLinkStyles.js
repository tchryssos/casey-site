import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING, LG_MIN_STRING } from 'constants/styles/breakpoints'

export default createUseStyles({
	linkWrapper: ({ zIndex, width }) => ({
		zIndex: zIndex || 1,
		width: `${width}%`,
		position: 'relative',
		transition: `opacity ${(zIndex || 1) * 0.3}s`,
	}),
	descriptionImage: {
		width: '100%',
		paddingTop: 16,
	},
	blobDescriptionWrapper: {
		position: 'absolute',
		top: '30%',
		right: '-185px',
		opacity: 0,
		transition: 'opacity .15s',
		width: '125px',
		borderTop: '3px solid black',
		paddingTop: '10px',
		paddingLeft: '30px',
		fontSize: '12px',
		lineHeight: 1.25,
		display: 'flex',
		flexDirection: 'column',
	},
	leftAligned: {
		left: '-165px',
		paddingLeft: 0,
		paddingRight: '30px',
	},
	animationWrapper: {
		transition: 'transform .15s',
		'&:hover': {
			transform: 'translate(16px, -16px)',
		},
	},
	// Custom CSS for blob placement
	MensHealth: {
		transform: 'translate(2vw, 2vw)',
	},
	FISMarketing: {
		transform: 'translate(-2vw, 8vw)',
	},
	ListenJay: {
		transform: 'translate(2vw, 6vw)',
	},
	ELO: {
		transform: 'translate(2vw, -3vw)',
	},
	Chase: {
		transform: 'translate(-45vw, -15vw)',
	},
	Portfolio: {
		transform: 'translate(20vw, -35vw)',
	},
	Mirror: {
		transform: 'translate(1vw, 25vw)',
	},
	About: {
		transform: 'translate(0vw, -40vw)',
	},
	tagWrapper: {
		marginTop: 4,
	},
	[MD_MIN_STRING]: {
		linkWrapper: {
			'&:last-of-type': {
				paddingBottom: 0,
			},
			'&:hover $blobDescriptionWrapper': {
				display: 'flex',
				opacity: '100%',
			},
		},
		MensHealth: {
			transform: 'translateX(0)',
		},
		FISMarketing: {
			transform: 'translate(-5vw, 1vw)',
		},
		ListenJay: {
			transform: 'translate(-2vw, 1vw)',
		},
		ELO: {
			transform: 'translate(-2vw, -0.5vw)',
		},
		Chase: {
			transform: 'translate(-24vw, -4vw)',
		},
		Portfolio: {
			transform: 'translate(12vw, -14vw)',
		},
		Mirror: {
			transform: 'translate(1vw, 16vw)',
		},
		About: {
			transform: 'translate(0vw, -15vw)',
		},
	},
	[LG_MIN_STRING]: {
		blobDescriptionWrapper: {
			right: '-275px',
			width: '200px',
			fontSize: '14px',
		},
		leftAligned: {
			left: '-240px',
		},
	},
})
