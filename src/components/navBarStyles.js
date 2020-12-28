import { createUseStyles } from 'react-jss'
import { white, gray, darkGray, darken } from 'constants/styles/colors'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

export const navContentHeight = 32
export const navPaddingHeight = 24

export default createUseStyles({
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
		borderTop: `solid 1px ${gray}`,
		padding: '16px 24px',
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
		width: '100%',
		backgroundColor: darkGray,
		boxSizing: 'border-box',
	},
	navLeft: {
		display: 'none',
	},
	navLeftLink: {
		textDecoration: 'none',
		marginLeft: 0,
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
	},
	isVisible: {
		display: 'flex',
	},
	closeX: {
		width: 60,
		cursor: 'pointer',
		marginTop: 25,
	},
	[MD_MIN_STRING]: {
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
			display: 'flex',
			justifyContent: 'space-between',
			alignContent: 'center',
			width: '100%',
			padding: '0 16px',
			borderTop: 'none',
		},
		navLeft: {
			width: '60%',
			display: 'flex',
			flexDirection: 'row-reverse',
		},
		navLeftLink: {
			textDecoration: 'none',
			marginLeft: 40,
			padding: '8px 0',
			color: '#000000',
			'&:hover': {
				borderBottom: '2px solid #2b2b2b',
			},
		},
	},
})
