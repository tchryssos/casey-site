import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { black } from 'constants/styles/colors'

const useStyles = createUseStyles({
	imageImg: {
		display: 'block',
		width: '100%',
	},
	scrollableImageImg: {
		width: 'unset',
	},
	imageWrapper: {
		display: 'inline-block',
		width: '100%',
		marginTop: '16px',
		'&:first-of-type': {
			marginTop: 16,
		},
		'&:nth-of-type(2)': {
			marginTop: 16,
		},
	},
	borderedImageWrapper: {
		border: [[1, black, 'solid']],
		boxSizing: 'border-box',
	},
	halfImageWrapper: {
		width: 'calc(50% - 8px)',
		marginTop: '16px',
		'&:first-of-type': {
			marginTop: 0,
		},
		'&:nth-of-type(2)': {
			marginTop: 0,
		},
	},
	scrollableImageWrapper: {
		overflow: 'scroll',
	},
})

export default ({
	src, alt, className, imageClassName, size = 'half',
	scrollable, bordered,
}) => {
	const classes = useStyles()
	return (
		<div
			className={
				clsx(
					classes.imageWrapper,
					{ [classes.borderedImageWrapper]: bordered },
					{ [classes.scrollableImageWrapper]: scrollable },
					{ [classes.halfImageWrapper]: size === 'half' },
					className,
				)
			}
		>
			<img
				src={src}
				alt={alt}
				className={
					clsx(
						classes.imageImg,
						{ [classes.scrollableImageImg]: scrollable },
						imageClassName,
					)
				}
			/>
		</div>
	)
}
