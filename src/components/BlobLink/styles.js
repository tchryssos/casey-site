import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { navContentHeight, navPaddingHeight } from 'components/NavBar/styles'

export default {
	linkWrapper: {
		zIndex: ({ zIndex }) => zIndex || 1,
		width: ({ width }) => `${width}%`,
		'&:last-of-type': {
			paddingBottom: `${navContentHeight + (navPaddingHeight * 2) + 16}px`,
		},
	},
	animationWrapper: {
		'&:hover': {
			transform: 'translate(16px, -16px)',
		},
	},
	filtered: {
		opacity: 0.3,
	},
	// Custom CSS for blob placement
	FISMarketing: {
		transform: 'translateX(13vw)',
	},
	UIDesign: {
		transform: 'translateY(13vw)',
	},
	MusicalRug: {
		transform: 'translate(6vw, 3vw)',
	},
	HowToTampons: {
		transform: 'translate(6vw, -2vw)',
	},
	TheUprisingCreative: {
		transform: 'translate(-25vw, -11vw)',
	},
	SeatGeekScholarship: {
		transform: 'translateY(-34vw)',
	},
	ChaseSapphire: {
		transform: 'translateY(-52vw)',
	},
	FISWeb: {
		transform: 'translate(3vw, -65vw)',
	},
	About: {
		transform: 'translate(0vw, -55vw)',
	},
	[MD_MIN_STRING]: {
		linkWrapper: {
			'&:last-of-type': {
				paddingBottom: 0,
			},
		},
		FISMarketing: {
			transform: 'translateX(0)',
		},
		UIDesign: {
			transform: 'translate(-5vw, 5vw)',
		},
		MusicalRug: {
			transform: 'translate(-2vw, 1vw)',
		},
		HowToTampons: {
			transform: 'translate(-2vw, -0.5vw)',
		},
		TheUprisingCreative: {
			transform: 'translate(-13vw, -4vw)',
		},
		SeatGeekScholarship: {
			transform: 'translateY(-14vw)',
		},
		ChaseSapphire: {
			transform: 'translateY(-23vw)',
		},
		FISWeb: {
			transform: 'translate(1vw, -26vw)',
		},
		About: {
			transform: 'translate(1vw, -24vw)',
		},
	},
}
