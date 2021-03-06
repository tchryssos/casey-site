import { createUseStyles } from 'react-jss'
import { white, darkGray, darken } from 'constants/styles/colors'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

export const navContentHeight = 32
export const navPaddingHeight = 24

export default createUseStyles({
	'@keyframes menuSlide': {
		'0%': { transform: 'translate(0, 250px)' },
		'100%': { transform: 'translate(0, 0)' },
	},
	navWrapper: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		right: 0,
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center',
		zIndex: 200,
	},
	navContainer: {
		padding: '16px 24px',
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
		width: '100%',
		backgroundColor: darkGray,
		boxSizing: 'border-box',
		borderTop: '1px solid white',
	},
	navLeft: {
		display: 'none',
	},
	navLeftLink: {
		textDecoration: 'none',
		padding: '16px 0',
	},
	whiteText: {
		color: 'white',
	},
	logo: {
		textDecoration: 'none',
		color: white,
		display: 'block !important',
	},
	mobileMenuButton: {
		display: 'block',
		color: white,
		cursor: 'pointer',
	},
	mobileMenuOpen: {
		display: 'none',
		position: 'absolute',
		width: '100%',
		paddingTop: 50,
		paddingBottom: 8,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: darkGray,
		borderRadius: '250px 250px 0 0',
		bottom: 0,
		height: 250,
		// animation: '$menuSlide 1s',
	},
	menuDarken: {
		display: 'none',
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		width: '100%',
		height: '100%',
		backgroundColor: darken,
		zIndex: 9,
	},
	isVisible: {
		display: 'flex',
	},
	closeX: {
		width: 60,
		cursor: 'pointer',
		marginTop: 25,
	},
	buttonStyleReset: {
		background: 'transparent',
		border: 'none',
		outline: 'none',
	},
	navLeftDesktop: {
		display: 'none',
	},
	logoDesktop: {
		display: 'none',
	},
	[MD_MIN_STRING]: {
		navLeftDesktop: {
			display: 'flex',
			alignItems: 'flex-end',
			flexDirection: 'column',
			position: 'fixed',
			top: 10,
			right: 10,
		},
		logoDesktop: {
			position: 'fixed',
			display: 'flex',
			top: 10,
			left: 10,
			textDecoration: 'none',
			color: darkGray,
		},
		mobileMenuOpen: {
			display: 'none',
		},
		whiteText: {
			color: 'black',
		},
		menuButton: {
			padding: 0,
			margin: 0,
		},
		mobileMenuButton: {
			display: 'none',
		},
		menuVisibleText: {
			color: 'white',
		},
		logo: {
			color: '#000000',
		},
		navWrapper: {
			background: 'transparent',
			top: 0,
			bottom: 'initial',
			padding: '16px 0 16px 0',
			alignItems: 'flex-start',
			flexDirection: 'row',
		},
		navContainer: {
			background: 'transparent',
			display: 'none',
			justifyContent: 'space-between',
			alignContent: 'center',
			width: '100%',
			padding: '0 16px',
			borderTop: 'none',
		},
		navLeft: {
			display: 'flex',
			alignItems: 'flex-end',
			flexDirection: 'column',
		},
		navLeftLink: {
			textDecoration: 'none',
			width: 'fit-content',
			padding: '8px 0',
			color: '#000000',
			borderBottom: '2px solid transparent',
			'&:hover': {
				borderBottom: '2px solid #2b2b2b',
			},
		},
	},
})
