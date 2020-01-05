import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import styles from './styles'

const BlobLink = ({
	src, svgFile, link, altText, classes, category, filter,
}) => (
	<div
		category={category}
		className={
			classNames(
				classes.linkWrapper,
				classes[svgFile],
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

BlobLink.propTypes = {
	src: PropTypes.string,
	svgFile: PropTypes.string,
	link: PropTypes.string,
	altText: PropTypes.string,
	category: PropTypes.string,
}

export default injectSheet(styles)(BlobLink)
