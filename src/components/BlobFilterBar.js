import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	blobNav: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		margin: 20,
		[MD_MIN_STRING]: {
			justifyContent: 'center',
		},
	},
	filter: {
		backgroundColor: 'transparent',
		padding: [[6, 6]],
		zIndex: 10,
		cursor: 'pointer',
		fontSize: 18,
		appearance: 'none',
		border: 'none',
		'&:focus': {
			outline: 'none',
		},
		[MD_MIN_STRING]: {
			zIndex: 500,
			margin: [[0, 18]],
		},
	},
	lineyBoy: {
		fontSize: 18,
	},
	activeFilter: {
		borderBottom: '2px solid black',
	},
})

const FilterButton = ({
	onClick, text, filter, isActive, classes,
}) => (
	<button
		onClick={onClick}
		className={clsx(
			classes.filter,
			{ [classes.activeFilter]: filter === isActive },
		)}
		type="button"
	>
		{text}
	</button>
)

const Bar = ({ classes }) => (
	<p className={classes.lineyBoy}> | </p>
)

export default ({
	hideGraphic, hideProduct, hideNone, filter,
}) => {
	const classes = useStyles()
	return (
		<div className={classes.blobNav}>
			<FilterButton
				classes={classes}
				onClick={hideNone}
				filter={filter}
				isActive={null}
				text="All"
			/>
			{/* <Bar classes={classes} /> */}
			<FilterButton
				classes={classes}
				onClick={hideGraphic}
				isActive="graphic"
				filter={filter}
				text="Product Design"
			/>
			{/* <Bar classes={classes} /> */}
			<FilterButton
				classes={classes}
				onClick={hideProduct}
				filter={filter}
				isActive="product"
				text="Graphic Design"
			/>
		</div>
	)
}
