import React, { useState } from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING, MD_MIN_VALUE } from 'constants/styles/breakpoints'

import ImageLightBoxModal from 'components/ImageLightBoxModal'

const useStyles = createUseStyles({
	imageWrapper: {
		width: '100%',
		padding: 0,
		marginBottom: 16,
		borderRadius: 0,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			margin: 0,
			cursor: 'pointer',
			'&:hover': {
				border: '4px solid #4E7FFF',
			},
		},
	},
	image: {
		width: '100%',
	},
})

export default ({
	src, alt, className, imageClassName,
}) => {
	const [isClicked, setIsClicked] = useState(false)
	const classes = useStyles()
	return (
		<>
			<button
				type="button"
				onClick={() => {
					if (window.innerWidth >= MD_MIN_VALUE) {
						setIsClicked(true)
					}
				}}
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
					className={
						clsx(
							imageClassName,
							classes.image,
						)
					}
				/>
			</button>
			<ImageLightBoxModal
				src={src}
				showModal={isClicked}
				setClosed={() => setIsClicked(false)}
			/>
		</>
	)
}
