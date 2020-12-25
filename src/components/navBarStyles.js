import { createUseStyles } from 'react-jss'
import { white, gray, darkGray } from 'constants/styles/colors'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

export const navContentHeight = 32
export const navPaddingHeight = 24

export default createUseStyles({
	navWrapper: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		right: 0,
		padding: '16px 0',
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		borderTop: `solid 1px ${gray}`,
		backgroundColor: darkGray,
		zIndex: 200,
	},
	navContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
		width: '100%',
		padding: '0 24px',
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
	openMenuText: {
		textAlign: 'left',
	},
	menuVisibleText: {
		color: 'black',
	},
	navTextSpace: {
		width: '8px',
	},
	mobileMenuButton: {
		display: 'block',
		color: white,
		cursor: 'pointer',
	},
	[MD_MIN_STRING]: {
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
			background:
				'linear-gradient(to bottom, rgba(232,232,232,1) 85%, rgba(232,232,232,0) 100%)',
			top: 0,
			bottom: 'initial',
			padding: '16px 0 16px 0',
			alignItems: 'flex-start',
			borderTop: 'none',
		},
		navContainer: {
			display: 'flex',
			justifyContent: 'space-between',
			alignContent: 'center',
			width: '100%',
			padding: '0 16px',
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
			'&:hover': {
				borderBottom: '2px solid #2b2b2b',
			},
		},
	},
})
