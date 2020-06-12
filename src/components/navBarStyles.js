import { createUseStyles } from 'react-jss'
import { white, gray } from 'constants/styles/colors'
import {
	MD_MIN_STRING,
} from 'constants/styles/breakpoints'

export const navContentHeight = 32
export const navPaddingHeight = 24

export default createUseStyles({
	menuSlideContainer: {
		position: 'fixed',
		height: '100%',
		width: '100%',
	},
	menu: {
		width: '100%',
		height: `calc(100vh - ${navContentHeight + (navPaddingHeight * 2)}px)`,
		backgroundColor: '#346c63',
		flexDirection: 'column',
		justifyContent: 'space-around',
		transition: 'transform 0.5s',
		position: 'fixed',
		paddingTop: '50px',
		zIndex: -1,
	},
	menuCover: {
		height: '100%',
		backgroundColor: '#e8e8e8',
		transition: 'transform 0.5s',
		width: '100%',
	},
	menuButton: {
		cursor: 'pointer',
		border: 'none',
		backgroundColor: 'transparent',
		display: 'flex',
		alignItems: 'center',
		padding: 0,
		'&:focus': {
			outline: 'none',
		},
	},
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
		textDecoration: 'none',
		color: 'black',
		transition: '',
		display: 'block !important',
	},
	openMenuIcon: {
		height: navContentHeight,
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
	menuSlide: {
		transform: 'translateX(0px)',
		display: 'none',
	},
	[MD_MIN_STRING]: {
		menuSlide: {
			transform: 'translateX(240px)',
			display: 'block',
		},
		logo: {
			transition: 'transform 0.5s',
		},
		menu: {
			backgroundColor: '#0f2b41',
			width: 240,
			height: '100%',
			justifyContent: 'flex-start',
			zIndex: 0,
			paddingTop: 0,
		},
		menuCover: {
			display: 'block',
			position: 'absolute',
			top: 0,
			left: 0,
			backgroundColor: '#e8e8e8',
		},
		menuButton: {
			padding: 0,
			margin: 0,
		},
		menuVisibleText: {
			color: 'white',
		},
		navWrapper: {
			backgroundColor: 'transparent',
			top: 0,
			bottom: 'initial',
			padding: '16px 0 0 0',
			alignItems: 'flex-start',
			borderTop: 'none',
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
