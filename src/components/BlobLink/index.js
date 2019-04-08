import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import BlobLinkData from 'constants/blobLinks'

import './styles.scss'

const BlobLink = (props) => {
	const { svgFileName } = props
	return (
		<div
			className={`
				linkWrapper
				${BlobLinkData[svgFileName].zClass}
				${BlobLinkData[svgFileName].sizeClass}
				${svgFileName}
			`}
		>
			<NavLink to={BlobLinkData[svgFileName].link} exact>
				<img
					src={BlobLinkData[svgFileName].src}
					alt={`The ${BlobLinkData[svgFileName].altText} blob.`}
				/>
			</NavLink>
		</div>
	)
}

BlobLink.propTypes = {
	svgFileName: PropTypes.string,
}

export default BlobLink
