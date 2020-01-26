import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { gray } from 'constants/styles/colors'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	blobNav: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
	},
	filter: {
		backgroundColor: 'transparent',
		padding: [[6, 12]],
		margin: [[0, 12]],
		zIndex: 10,
		cursor: 'pointer',
		fontSize: 18,
		appearance: 'none',
		border: 'none',
		'&:focus': {
			outline: 'none',
		},
	},
	lineyBoy: {
		fontSize: 18,
	},
	activeFilter: {
		backgroundColor: '#efefef',
	},
	[MD_MIN_STRING]: {
		filter: {
			zIndex: 500,
		},
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
				onClick={hideProduct}
				filter={filter}
				isActive="product"
				text="Graphic Design"
			/>
			{/* <Bar classes={classes} /> */}
			<FilterButton
				classes={classes}
				onClick={hideGraphic}
				isActive="graphic"
				filter={filter}
				text="Product Design"
			/>
		</div>
	)
}
