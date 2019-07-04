import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import styles from './styles'

const BlobLink = ({
	src, svgFile, link, altText, classes,
}) => (
	<div
		className={
			classNames(
				classes.linkWrapper,
				classes[svgFile],
			)
		}
	>
		<NavLink to={link} exact>
			<img
				src={src}
				alt={`The ${altText} blob.`}
			/>
		</NavLink>
	</div>
)

BlobLink.propTypes = {
	src: PropTypes.string,
	svgFile: PropTypes.string,
	link: PropTypes.string,
	altText: PropTypes.string,
}

export default injectSheet(styles)(BlobLink)
