import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING, LG_MIN_STRING } from 'constants/styles/breakpoints'
import { navContentHeight, navPaddingHeight } from 'components/navBarStyles'

export default createUseStyles({
	linkWrapper: ({ zIndex, width }) => ({
		zIndex: zIndex || 1,
		width: `${width}%`,
		position: 'relative',
		transition: `opacity ${(zIndex || 1) * 0.3}s`,
		'&:last-of-type': {
			// paddingBottom: navContentHeight + (navPaddingHeight * 2) + 16,
		},
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
	filtered: {
		opacity: 0.2,
	},
	// Custom CSS for blob placement
	MensHealth: {
		transform: 'translate(8vw, -4vw)',
	},
	FISMarketing: {
		transform: 'translateY(8vw)',
	},
	ListenJay: {
		transform: 'translate(6vw, 3vw)',
	},
	ELO: {
		transform: 'translate(6vw, -2vw)',
	},
	TheUprisingCreative: {
		transform: 'translate(-25vw, -11vw)',
	},
	Portfolio: {
		transform: 'translateY(-30vw)',
	},
	MusicalRug: {
		transform: 'translate(3vw, -35vw)',
	},
	ChaseSapphire: {
		transform: 'translate(0vw, -30vw)',
	},
	Mirror: {
		transform: 'translate(0vw, -34vw)',
	},
	About: {
		transform: 'translate(0vw, -50vw)',
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
		TheUprisingCreative: {
			transform: 'translate(-13vw, -4vw)',
		},
		Portfolio: {
			transform: 'translateY(-14vw)',
		},
		MusicalRug: {
			transform: 'translate(1vw, -15vw)',
		},
		ChaseSapphire: {
			transform: 'translate(-2vw, -15vw)',
		},
		Mirror: {
			transform: 'translate(0vw, -16vw)',
		},
		About: {
			transform: 'translate(0vw, -23vw)',
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
