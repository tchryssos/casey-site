import React, { useContext, useRef, useEffect } from 'react'
import ScrollContext from 'contexts/scroll'


export default ({
	children, className, intersectionCallback, intersectionThreshold,
}) => {
	const { getScroll } = useContext(ScrollContext)
	const blockRef = useRef()
	useEffect(() => {
		if (intersectionCallback && blockRef.current) {
			const options = {
				root: getScroll(),
				rootMargin: '0px',
				threshold: intersectionThreshold || 0.1,
			}
			const observer = new IntersectionObserver(intersectionCallback, options)
			observer.observe(blockRef.current)
		}
	}, [intersectionCallback, blockRef.current])
	return (
		<div
			className={className}
			ref={blockRef}
		>
			{children}
		</div>
	)
}
