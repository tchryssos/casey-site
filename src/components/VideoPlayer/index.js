import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	videoWrapper: {
		marginTop: '1rem',
		position: 'relative',
		width: '100%',
		paddingBottom: ({ aspectRatio }) => {
			switch (aspectRatio) {
				case '1:1':
					return '100%'
				default: // 16:9
					return '56.25%'
			}
		},
	},
	video: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
}

const VideoPlayer = ({ src, title, classes }) => (
	<div className={classes.videoWrapper}>
		<iframe
			title={title}
			src={src}
			frameBorder="0"
			allow="autoplay; fullscreen"
			allowFullScreen
			className={classes.video}
		/>
	</div>
)

VideoPlayer.propTypes = {
	src: PropTypes.string,
	title: PropTypes.string,
}

export default injectSheet(styles)(VideoPlayer)
