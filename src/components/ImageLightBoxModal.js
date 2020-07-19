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
	xWrapper: {
		width: '70%',
		margin: '5% 15%',
		border: '2px solid black',
		position: 'relative',
	},
	image: {
		width: '100%',
	},
	closeModal: {
		position: 'absolute',
		zIndex: 5,
		right: 0,
		top: 0,
		fontSize: 16,
		textDecoration: 'underline',
		borderRadius: 0,
		border: 'none',
		padding: 8,
		backgroundColor: '#2b2b2b',
		color: 'white',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: '#4E7FFF',
		},
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
			<div className={classes.xWrapper}>
				<button
					className={classes.closeModal}
					type="button"
					onClick={setClosed}
				>
					Close
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
