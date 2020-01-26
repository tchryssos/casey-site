import { createUseStyles } from 'react-jss'
import { orange, white, gray } from 'constants/styles/colors'
import {
	MD_MIN_STRING, fixedColumnWidthPerc,
} from 'constants/styles/breakpoints'

export const navContentHeight = 32
export const navPaddingHeight = 24

export default createUseStyles({
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
		zIndex: 100,
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
		zIndex: 200,
	},
	navContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
		width: '100%',
		padding: '0 24px',
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
		width: '8px',
	},
	[MD_MIN_STRING]: {
		// navWrapper: {
		// 	zIndex: 50,
		// },
		menu: {
			backgroundColor: white,
			width: `calc(${fixedColumnWidthPerc}% - 16px)`,
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
			padding: '16px 0 0 0',
			alignItems: 'flex-start',
		},
		navContainer: {
			padding: '0 16px',
		},
		openMenuIcon: {
			display: 'none',
		},
		openMenuText: {
			display: 'block',
			letterSpacing: 1,
		},
	},
})
