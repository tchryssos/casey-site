import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	imageWrapper:{
		'&:hover': {
			border: '1px solid red',
		},
	},
})

export default ({
	src, alt, className, imageClassName,
}) => {
	const classes = useStyles()
	return (
		<div
			className={
				clsx(
					classes.imageWrapper,
					className,
				)
			}
		>
			<img
				src={src}
				alt={alt}
				className={imageClassName}
			/>
		</div>
	)
}
