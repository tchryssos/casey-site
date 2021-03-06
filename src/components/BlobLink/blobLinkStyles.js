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
	desktopBlobs: {
		display: 'none',
	},
	mobileBlobs: {
		display: 'block',
	},
	// Custom CSS for blob placement
	MensHealth: {
		transform: 'translate(2vw, 7vw)',
	},
	FISMarketing: {
		transform: 'translate(-2vw, 13vw)',
	},
	ListenJay: {
		transform: 'translate(2vw, 15vw)',
	},
	ELO: {
		transform: 'translate(2vw, 5vw)',
	},
	Chase: {
		transform: 'translate(-45vw, -7vw)',
	},
	Portfolio: {
		transform: 'translate(20vw, -25vw)',
	},
	Mirror: {
		transform: 'translate(1vw, 35vw)',
	},
	About: {
		transform: 'translate(0vw, -25vw)',
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
		desktopBlobs: {
			display: 'block',
		},
		mobileBlobs: {
			display: 'none',
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
