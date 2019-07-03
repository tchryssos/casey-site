import { orange, white, gray } from 'constants/styles/colors'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const navContentHeight = {
	height: '32px',
}

export default {
	menu: {
		width: '100%',
		backgroundColor: orange,
		flexDirection: 'column',
		justifyContent: 'center',
		display: 'none',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 1000,
	},
	'displayMenu-true': {
		dispay: 'flex',
	},
	menuButton: {
		cursor: 'pointer',
		border: 'none',
		backgroundColor: 'transparent',
		'&:focus': {
			outline: 'none',
		},
	},
	navWrapper: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		right: 0,
		padding: '24px 0',
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		borderTop: `solid 1px ${gray}`,
		backgroundColor: white,
		zIndex: 1000,
	},
	navContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
		width: '100%',
		padding: '0 3rem',
	},
	logo: {
		extend: navContentHeight,
	},
	openMenuIcon: {
		extend: navContentHeight,
	},
	openMenuText: {
		width: '172px',
		textAlign: 'left',
		display: 'none',
	},
	navTextSpace: {
		width: '0.5rem',
	},
	[MD_MIN_STRING]: {
		menu: {
			backgroundColor: white,
			width: '40%',
			height: '100%',
			justifyContent: 'flex-start',
		},
		menuButton: {
			padding: 0,
			margin: 0,
		},
		navWrapper: {
			backgroundColor: 'transparent',
			top: 0,
			bottom: 'initial',
			padding: '1rem 0 0 0',
			alignItems: 'flex-start',
		},
		navContainer: {
			padding: '0 1rem',
		},
		openMenuIcon: {
			display: 'none',
		},
		openMenuText: {
			display: 'block',
			letterSpacing: 1,
		},
	},
}
