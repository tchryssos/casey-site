import React, { useRef, useEffect, useState } from 'react'
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
	activeFilter: {
		borderBottom: '2px solid black',
	},
})

const FilterButton = ({
	setFilter, text, filter, onClickHides, activeRef,
	classes,
}) => {
	const active = filter === onClickHides
	return (
		<button
			onClick={() => setFilter(onClickHides)}
			className={clsx(
				classes.filter,
				{ [classes.activeFilter]: active },
			)}
			type="button"
			ref={active ? activeRef : undefined}
		>
			{text}
		</button>
	)
}

export default ({
	setFilter, filter,
}) => {
	const classes = useStyles()
	const activeFilterRef = useRef()
	const [refWidth, setRefWidth] = useState(0)
	const [refOffset, setRefOffset] = useState(0)
	useEffect(() => {
		const { offsetLeft, offsetWidth } = activeFilterRef.current
		setRefWidth(offsetWidth)
		setRefOffset(offsetLeft)
	}, [activeFilterRef.current])
	return (
		<div className={classes.blobNav}>
			<FilterButton
				classes={classes}
				setFilter={setFilter}
				filter={filter}
				onClickHides={null}
				text="All"
				activeRef={activeFilterRef}
			/>
			<FilterButton
				classes={classes}
				setFilter={setFilter}
				onClickHides="graphic"
				filter={filter}
				text="Product Design"
				activeRef={activeFilterRef}
			/>
			<FilterButton
				classes={classes}
				setFilter={setFilter}
				filter={filter}
				onClickHides="product"
				text="Graphic Design"
				activeRef={activeFilterRef}
			/>
		</div>
	)
}
