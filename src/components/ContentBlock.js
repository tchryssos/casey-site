import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

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
	children, className, blockRef, blockId,
}) => {
	const classes = useStyles()
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
