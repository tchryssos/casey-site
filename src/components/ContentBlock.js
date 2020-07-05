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
	children, className, intersectionCallback, intersectionThreshold,
}) => {
	const classes = useStyles()
	if (intersectionCallback) {
		const options = {
			root: document.querySelector('#scrollApp'),
			rootMargin: '0px',
			threshold: intersectionThreshold || 0.1,
		}
		const observer = new IntersectionObserver(intersectionCallback, options)
	}
	return (
		<div
			className={clsx(
				classes.contentBlock,
				className,
			)}
		>
			{children}
		</div>
	)
}
