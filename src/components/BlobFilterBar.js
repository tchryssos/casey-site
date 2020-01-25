import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	blobNav: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		margin: 20,
	},
	filter: {
		marginRight: 10,
		marginLeft: 10,
		zIndex: 2000,
		cursor: 'pointer',
		fontSize: 18,
		appearance: 'none',
		border: 'none',
		paddingTop: 0,
		marginTop: 0,
		'&:hover': {
			textDecoration: 'underline',
		},
		'&:focus': {
			outline: 'none',
			textDecoration: 'underline',
		},
	},
	lineyBoy: {
		fontSize: 18,
	},
})

const FilterButton = ({ onClick, text, classes }) => (
	<button
		onClick={onClick}
		className={classes.filter}
		type="button"
	>
		{text}
	</button>
)

const Bar = ({ classes }) => (
	<p className={classes.lineyBoy}> | </p>
)

export default ({ hideGraphic, hideProduct, hideNone }) => {
	const classes = useStyles()
	return (
		<div className={classes.blobNav}>
			<FilterButton classes={classes} onClick={hideNone} text="All" />
			<Bar classes={classes} />
			<FilterButton classes={classes} onClick={hideProduct} text="Graphic Design" />
			<Bar classes={classes} />
			<FilterButton classes={classes} onClick={hideGraphic} text="Product Design" />
		</div>
	)
}
