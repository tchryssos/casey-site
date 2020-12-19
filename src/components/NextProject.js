import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

import ContentBlock from 'components/ContentBlock'
import Body from 'components/Typography/Body'

const useStyles = createUseStyles({
	lastBlock: {
		padding: 20,
		backgroundColor: '#2b2b2b',
		color: 'white',
	},
	aboutLink: {
		textDecoration: 'none',
		borderBottom: '2px solid #4e7fff',
		color: '#ea9b41',
		'&:hover': {
			borderBottom: '2px solid #ea9b41',
			color: '#4e7fff',
		},
	},
	aboutBody: {
		lineHeight: 1.75,
		textAlign: 'center',
	},
})

export default ({ link }) => {
	const classes = useStyles()
	return (
		<ContentBlock className={classes.lastBlock}>
			<Body className={classes.aboutBody}>
				View the next project&nbsp;
				<NavLink className={classes.aboutLink} to={link} exact>
					here
				</NavLink>
			</Body>
		</ContentBlock>
	)
}
