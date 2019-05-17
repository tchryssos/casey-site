import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const VideoPlayer = (props) => {
	const { src, title } = props

	return (
		<div className="videoWrapper">
			<iframe
				title={title}
				src={src}
				frameBorder="0"
				allow="autoplay; fullscreen"
				allowFullScreen
				className="video"
			/>
		</div>
	)
}

VideoPlayer.propTypes = {
	src: PropTypes.string,
	title: PropTypes.string,
}

export default VideoPlayer
