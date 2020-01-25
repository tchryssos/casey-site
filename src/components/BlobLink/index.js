import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import useStyles from './styles'

export default ({
	src, className, link, altText, category, filter,
	zIndex, width,
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
		</div>
	)
}
