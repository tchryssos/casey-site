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

export default ({
	children, className, intersectionCallback, intersectionThresholds = [0.1, 0.9],
}) => {
	const classes = useStyles()
	const { getScroll } = useContext(ScrollContext)
	const blockRef = useRef()
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
