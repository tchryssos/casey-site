import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import orNull from 'util/orNull'
import useStyles from './blobLinkStyles'

const Description = ({
	classes, descriptionText, descriptionAlignment, descriptionImage,
}) => (
	<div
		className={
			clsx(
				classes.blobDescriptionWrapper,
				{ [classes.leftAligned]: descriptionAlignment === 'left' },
			)
		}
	>
		{descriptionText}
		<img className={classes.descriptionImage} src={descriptionImage} alt="" />
	</div>
)

export default ({
	src, className, link, altText, category, filter,
	zIndex, width, descriptionText, descriptionImage, descriptionAlignment,
}) => {
	const classes = useStyles({ zIndex, width })
	return (
		<div
			category={category}
			className={
				clsx(
					classes.linkWrapper,
					classes[className],
					{ [classes.filtered]: filter === category },
				)
			}
		>
			<div className={classes.animationWrapper}>
				<NavLink to={link} exact>
					<img
						src={src}
						alt={`The ${altText} blob.`}
					/>
				</NavLink>
			</div>
			{orNull(
				descriptionAlignment !== 'none',
				<Description
					classes={classes}
					descriptionText={descriptionText}
					descriptionAlignment={descriptionAlignment}
					descriptionImage={descriptionImage}
				/>,
			)}
		</div>
	)
}
