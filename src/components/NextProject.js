
import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

import PageGatingContext from 'contexts/pageGating'
import orNull from 'util/orNull'


import ContentBlock from 'components/ContentBlock'
import Body from 'components/Typography/Body'

const useStyles = createUseStyles({
	lastBlock: {
		paddingBottom: 148,
	},
	aboutLink: {
		textDecoration: 'none',
		borderBottom: '2px solid blue',
		color: 'blue',
	},
	aboutBody: {
		lineHeight: 1.75,
		textAlign: 'center',
	},
})

export default ({ link }) => {
	const { isAltHome } = useContext(PageGatingContext)
	const classes = useStyles()
	return orNull(
		!isAltHome,
		<ContentBlock className={classes.lastBlock}>
			<Body className={classes.aboutBody}>
				View the next project&nbsp;
				<NavLink className={classes.aboutLink} to={link} exact>
					here
				</NavLink>
			</Body>
		</ContentBlock>,
	)
}