import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import orNull from 'util/orNull'

import Tag from 'components/Tag'

import useStyles from './blobLinkStyles'

const Description = ({
	classes, descriptionText, descriptionAlignment, descriptionImage,
	tags,
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
		<div className={classes.tagWrapper}>
			{tags.map(
				(tag) => (
					<Tag tag={tag} />
				),
			)}
		</div>
		<img className={classes.descriptionImage} src={descriptionImage} alt="" />
	</div>
)

export default ({
	src, className, link, altText, category,
	zIndex, width, descriptionText, descriptionImage, descriptionAlignment,
	tags,
}) => {
	const classes = useStyles({ zIndex, width })
	return (
		<div
			category={category}
			className={
				clsx(
					classes.linkWrapper,
					classes[className],
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
					tags={tags}
				/>,
			)}
		</div>
	)
}
