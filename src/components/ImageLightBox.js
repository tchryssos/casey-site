import React, { useState } from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import ImageLightBoxModal from 'components/ImageLightBoxModal'

const useStyles = createUseStyles({
	imageWrapper: {
		width: 'calc(50% - 8px)',
		padding: 0,
		margin: 0,
		borderRadius: 0,
		'&:hover': {
			border: '4px solid #4E7FFF',
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
				onClick={() => setIsClicked(true)}
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
