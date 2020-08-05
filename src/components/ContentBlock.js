import React, { useRef } from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'
// import ScrollContext from 'contexts/scroll'

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
	children, className, setCurrentBlock, blockId,
}) => {
	// const { getScroll } = useContext(ScrollContext)
	const classes = useStyles()
	const blockRef = useRef()

	// useEffect(() => {
	// 	if (setCurrentBlock) {
	// 		const onScroll = debounce(() => {
	// 			const { scrollTop } = getScroll()
	// 			const { offsetTop, offsetHeight } = blockRef.current
	// 			const inView = scrollTop >= offsetTop && scrollTop <= offsetTop + offsetHeight
	// 			if (inView) {
	// 				setCurrentBlock(blockId)
	// 			}
	// 		}, 100)
	// 		const scrollable = getScroll()
	// 		scrollable.addEventListener('scroll', onScroll)
	// 		return () => scrollable.removeEventListener('scroll', onScroll)
	// 	}
	// }, [])

	return (
		<div
			className={clsx(
				classes.contentBlock,
				className,
			)}
			ref={blockRef}
			id={blockId}
		>
			{children}
		</div>
	)
}
