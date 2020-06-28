import React, { useRef, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import debounce from 'lodash.debounce'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import { black } from 'constants/styles/colors'

const useStyles = createUseStyles({
	blobNav: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		margin: 20,
	},
	buttonWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
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
	filterBar: {
		height: 2,
		backgroundColor: black,
		width: 1,
		transition: 'all 0.2s',
	},
})

const FilterButton = ({
	setFilter, text, filter, onClickHides, activeRef,
	classes,
}) => {
	const isActive = filter === onClickHides
	return (
		<button
			onClick={() => setFilter(onClickHides)}
			className={classes.filter}
			type="button"
			ref={isActive ? activeRef : undefined}
		>
			{text}
		</button>
	)
}

const FilterBar = ({
	classes, width, offset,
}) => (
	<div
		className={classes.filterBar}
		style={{
			width,
			transform: `translateX(${Math.round(offset)}px)`,
		}}
	/>
)

export default ({
	setFilter, filter,
}) => {
	const classes = useStyles()
	const activeFilterRef = useRef()
	const [refWidth, setRefWidth] = useState(0)
	const [refOffset, setRefOffset] = useState(0)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const updateWindowWidth = debounce(() => setWindowWidth(window.innerWidth), 75)
	useEffect(() => {
		window.addEventListener('resize', updateWindowWidth)
		return () => window.removeEventListener('resize', updateWindowWidth)
	}, [])

	useEffect(() => {
		const { offsetLeft, offsetWidth } = activeFilterRef.current
		setRefWidth(offsetWidth)
		setRefOffset(offsetLeft)
	}, [filter, windowWidth])
	return (
		<div className={classes.blobNav}>
			<div className={classes.buttonWrapper}>
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
			<FilterBar
				classes={classes}
				offset={refOffset}
				width={refWidth}
			/>
		</div>
	)
}
