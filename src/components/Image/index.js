import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	imageImg: {
		width: ({ scrollable }) => (scrollable ? 'unset' : '100%'),
	},
	imageWrapper: {
		width: ({ size }) => (
			size === 'half' ? 'calc(50% - 0.5rem)' : '100%'
		),
		marginTop: '1rem',
		'&:first-of-type': {
			marginTop: ({ size }) => (size === 'half' ? 0 : '1rem'),
		},
		overflow: ({ scrollable }) => (scrollable ? 'scroll' : 'none'),
	},
}

const Image = ({ src, alt, classes }) => (
	<div className={classes.imageWrapper}>
		<img src={src} alt={alt} className={classes.imageImg} />
	</div>
)

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	/* eslint-disable react/no-unused-prop-types */
	size: PropTypes.oneOf(['full', 'half']),
	scrollable: PropTypes.bool,
	/* eslint-enable react/no-unused-prop-types */
}

Image.defaultProps = {
	size: 'half',
}

export default injectSheet(styles)(Image)
