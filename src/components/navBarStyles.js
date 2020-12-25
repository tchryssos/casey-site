import { createUseStyles } from 'react-jss'
import { white, gray, lightGray } from 'constants/styles/colors'
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
	openMenuText: {
		textAlign: 'left',
	},
	menuVisibleText: {
		color: 'black',
	},
	navTextSpace: {
		width: '8px',
	},
	navLeft: {
		width: '40%',
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
	[MD_MIN_STRING]: {
		menuButton: {
			padding: 0,
			margin: 0,
		},
		menuVisibleText: {
			color: 'white',
		},
		navWrapper: {
			// backgroundColor: lightGray,
			background:
				'linear-gradient(to bottom, rgba(232,232,232,1) 80%, rgba(232,232,232,0) 100%)',
			top: 0,
			bottom: 'initial',
			padding: '16px 0 16px 0',
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
