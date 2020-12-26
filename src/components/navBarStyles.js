import { createUseStyles } from 'react-jss'
import { white, gray, darkGray } from 'constants/styles/colors'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { lightGray } from '../constants/styles/colors'

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
	},
	navLeft: {
		display: 'none',
	},
	navLeftLink: {
		textDecoration: 'none',
		marginLeft: 40,
		padding: '8px 0',
		'&:hover': {
			borderBottom: '2px solid #2b2b2b',
		},
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
		display: 'flex',
		background: darkGray,
		borderRadius: '50px 50px 0 0',
		flexDirection: 'column',
		marginBottom: 100,
	},
	[MD_MIN_STRING]: {
		mobileMenuOpen: {
			display: 'none',
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
			color: darkGray,
		},
		navWrapper: {
			background: lightGray,
			top: 0,
			bottom: 'initial',
			padding: '16px 0 16px 0',
			alignItems: 'flex-start',
			flexDirection: 'row',
		},
		navContainer: {
			background: lightGray,
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
			color: darkGray,
			'&:hover': {
				borderBottom: '2px solid #2b2b2b',
			},
		},
	},
})
