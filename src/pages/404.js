import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import SubHeading from 'components/Typography/SubHeading'

const useStyles = createUseStyles({
	button: {
		backgroundColor: '#346c63',
		padding: 8,
		color: 'white',
		display: 'inline-flex',
		marginTop: 24,
		textDecoration: 'none',
		fontWeight: 600,
		'&:hover': {
			backgroundColor: '#4e7fff',
		},
	},
	cAligned: {
		textAlign: 'center',
	},
})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock className={classes.cAligned}>
				<SubHeading>
					Sorry, we can&apos;t find that page.
				</SubHeading>
				<NavLink className={classes.button} to="/" exact>
					Back to Home
				</NavLink>
			</ContentBlock>
		</PageWrapper>
	)
}
