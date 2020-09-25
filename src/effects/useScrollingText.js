/* eslint-disable no-param-reassign */
import { useContext, useEffect } from 'react'
import ScrollContext from 'contexts/scroll'
import throttle from 'lodash.throttle'

import { MD_MIN_VALUE } from 'constants/styles/breakpoints'

export default (scrollingContainerRef, scrollingTextRef, offset = -100) => {
	const { getScroll } = useContext(ScrollContext)

	const scrollListener = throttle(() => {
		if (window.innerWidth >= MD_MIN_VALUE) {
			const scrollOffset = getScroll()?.scrollTop - scrollingContainerRef.current.offsetTop
			const containerHeight = scrollingContainerRef.current.offsetHeight
			const textHeight = scrollingTextRef.current.offsetHeight
			if (scrollOffset >= offset && scrollOffset <= containerHeight - textHeight) {
				scrollingTextRef.current.style.transform = `translateY(${scrollOffset}px)`
			}
		} else {
			scrollingTextRef.current.style.transform = 'translateY(0px)'
		}
	}, 16)

	useEffect(() => {
		if (window.innerWidth >= MD_MIN_VALUE) {
			window.addEventListener('scroll', scrollListener)
		}
		return () => window.removeEventListener('scroll', scrollListener)
	}, [])
}
