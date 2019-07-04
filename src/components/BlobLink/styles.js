import { MD_MIN_STRING } from 'constants/styles/breakpoints'

export default {
	linkWrapper: {
		'&:last-of-type': {
			paddingBottom: '84px',
		},
		width: ({ width }) => `${width}%`,
		zIndex: ({ zIndex }) => zIndex || 1,
	},
	// Custom CSS for blob placement
	// This is ugly because of the "arbitrary" placement of the links
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
		transform: 'translate(5vw, -55vw)',
	},
	How: {
		transform: 'translate(-3vw, -59vw)',
	},
	ChangeThingsVideo: {
		transform: 'translate(-13vw, -60vw)',
	},
	[MD_MIN_STRING]: {
		linkWrapper: {
			'&:last-of-type': {
				paddingBottom: '1rem',
			},
		},
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
		How: {
			transform: 'translate(-1vw, -25vw)',
		},
		ChangeThingsVideo: {
			transform: 'translate(-5vw, -25vw)',
		},
	},
}
