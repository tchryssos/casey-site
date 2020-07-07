import React, { useContext, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
import ScrollContext from 'contexts/scroll'

const useStyles = createUseStyles({
	contentBlock: {
		padding: '48px 32px',
	},
	[MD_MIN_STRING]: {
		contentBlock: {
			margin: '0',
			padding: '100px 20%',
		},
	},
})

const defaultThresh = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
export default ({
	children, className, intersectionCallback, intersectionThresholds = defaultThresh,
}) => {
	const classes = useStyles()
	const { getScroll } = useContext(ScrollContext)
	const blockRef = useRef()
	// @TODO One observer for all elements
	useEffect(() => {
		if (intersectionCallback && blockRef.current) {
			const options = {
				root: getScroll(),
				rootMargin: '0px',
				threshold: intersectionThresholds,
			}
			const observer = new IntersectionObserver(intersectionCallback, options)
			observer.observe(blockRef.current)
		}
	}, [intersectionCallback, blockRef.current])
	return (
		<div
			className={clsx(
				classes.contentBlock,
				className,
			)}
			ref={blockRef}
		>
			{children}
		</div>
	)
}
