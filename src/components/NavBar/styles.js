import { orange, white, gray } from 'constants/styles/colors'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

export const navContentHeight = 32
export const navPaddingHeight = 24

export default {
	menu: {
		width: '100%',
		height: `calc(100vh - ${navContentHeight + (navPaddingHeight * 2)}px)`,
		backgroundColor: orange,
		flexDirection: 'column',
		justifyContent: 'space-around',
		display: 'none',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 1000,
	},
	menuVisible: {
		display: 'flex',
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
		padding: `${navPaddingHeight}px 0`,
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
		height: navContentHeight,
	},
	openMenuIcon: {
		height: navContentHeight,
	},
	openMenuText: {
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
