import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { navContentHeight, navPaddingHeight } from 'components/navBarStyles'

export default createUseStyles({
	linkWrapper: ({ zIndex, width }) => ({
		zIndex: zIndex || 1,
		width: `${width}%`,
		'&:last-of-type': {
			paddingBottom: navContentHeight + (navPaddingHeight * 2) + 16,
		},
	}),
	animationWrapper: {
		'&:hover': {
			transform: 'translate(16px, -16px)',
		},
	},
	filtered: {
		opacity: 0.3,
	},
	// Custom CSS for blob placement
	ListenJay: {
		transform: 'translate(8vw, -4vw)',
	},
	ELO: {
		transform: 'translateY(8vw)',
	},
	FISMarketing: {
		transform: 'translate(6vw, 3vw)',
	},
	FISWeb: {
		transform: 'translate(6vw, -2vw)',
	},
	TheUprisingCreative: {
		transform: 'translate(-25vw, -11vw)',
	},
	SeatGeekScholarship: {
		transform: 'translateY(-30vw)',
	},
	Portfolio: {
		transform: 'translateY(-52vw)',
	},
	ChaseSapphire: {
		transform: 'translate(3vw, -55vw)',
	},
	MusicalRug: {
		transform: 'translate(0vw, -55vw)',
	},
	About: {
		transform: 'translateY(-65vw)',
	},
	[MD_MIN_STRING]: {
		linkWrapper: {
			'&:last-of-type': {
				paddingBottom: 0,
			},
		},
		ListenJay: {
			transform: 'translateX(0)',
		},
		ELO: {
			transform: 'translate(-5vw, 5vw)',
		},
		FISMarketing: {
			transform: 'translate(-2vw, 1vw)',
		},
		FISWeb: {
			transform: 'translate(-2vw, -0.5vw)',
		},
		TheUprisingCreative: {
			transform: 'translate(-13vw, -4vw)',
		},
		SeatGeekScholarship: {
			transform: 'translateY(-14vw)',
		},
		Portfolio: {
			transform: 'translateY(-23vw)',
		},
		ChaseSapphire: {
			transform: 'translate(1vw, -26vw)',
		},
		MusicalRug: {
			transform: 'translate(-1vw, -24vw)',
		},
		About: {
			transform: 'translateY(-30vw)',
		},
	},
})
