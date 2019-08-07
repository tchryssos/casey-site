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
	// Custom CSS for blob placement
	FISMarketing: {
		transform: 'translateX(13vw)',
	},
	UXUICourse: {
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
	FlatironSchoolStyleGuide: {
		transform: 'translate(5vw, -70vw)',
	},
	ChangeThingsVideo: {
		transform: 'translate(-3vw, -59vw)',
	},
	[MD_MIN_STRING]: {
		FISMarketing: {
			transform: 'translateX(0)',
		},
		UXUICourse: {
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
		FlatironSchoolStyleGuide: {
			transform: 'translate(2vw, -23vw)',
		},
		ChangeThingsVideo: {
			transform: 'translate(-1vw, -25vw)',
		},
	},
}
