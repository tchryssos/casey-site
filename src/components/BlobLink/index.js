import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import BlobLinkData from 'constants/blobLinks'
import styles from './styles'

const BlobLink = ({ svgFileName, classes }) => (
	<div
		className={
			classNames(
				classes.linkWrapper,
				classes[BlobLinkData[svgFileName].zClass],
				classes[BlobLinkData[svgFileName].sizeClass],
				classes[svgFileName],
			)
		}
	>
		<NavLink to={BlobLinkData[svgFileName].link} exact>
			<img
				src={BlobLinkData[svgFileName].src}
				alt={`The ${BlobLinkData[svgFileName].altText} blob.`}
			/>
		</NavLink>
	</div>
)

BlobLink.propTypes = {
	svgFileName: PropTypes.string,
}

export default injectSheet(styles)(BlobLink)
