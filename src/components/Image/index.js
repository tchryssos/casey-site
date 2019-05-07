import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Image = (props) => {
	const { src, size, alt } = props

	return (
		<div className={`imageWrapper image${size}`}>
			<img src={src} alt={alt} className="imageImg" />
		</div>
	)
}

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	size: PropTypes.oneOf(['full', 'half']),
}

Image.defaultProps = {
	size: 'half',
}

export default Image
