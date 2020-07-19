import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	hideModal: {
		display: 'none',
	},
	imageWrapper: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
	},
	image: {
		width: '70%',
		margin: '5% 15%',
		border: '2px solid black',
	},
	closeModal: {
		position: 'absolute',
		right: '50%',
		top: 0,
		fontSize: 64,
	},
	showModal: {
		display: 'block',
	},
})

export default ({
	src, alt, className, imageClassName, showModal,
	setClosed,
}) => {
	const classes = useStyles()
	return (
		<div
			className={
				clsx(
					classes.imageWrapper,
					classes.hideModal,
					{ [classes.showModal]: showModal },
					className,
				)
			}
		>
			<div>
				<button
					className={classes.closeModal}
					type="button"
					onClick={setClosed}
				>
					x
				</button>
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
			</div>
		</div>
	)
}
