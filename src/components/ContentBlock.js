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
			'&:first-child': {
				paddingTop: 150,
			},
		},
	},
})

const ContentBlock = ({ children, className, blockId }) => {
	const classes = useStyles()
	const blockRef = useRef()

	return (
		<div
			className={clsx(classes.contentBlock, className)}
			ref={blockRef}
			id={blockId}
		>
			{children}
		</div>
	)
}

export default ContentBlock
