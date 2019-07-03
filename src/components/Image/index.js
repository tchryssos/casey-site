import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import injectSheet from 'react-jss'

const styles = {
	imageImg: {
		width: '100%',
	},
	imagehalf: {
		width: 'calc(50% - 0.5rem)',
	},
	imagefull: {
		width: '100%',
	},
	imageWrapper: {
		marginTop: '1rem',
	},
	firstNoWrapper: {
		'&:first-of-type': {
			marginTop: 0,
		},
	},
}

const Image = ({ src, size, alt, classes }) => (
	<div
		className={
			classNames(
				classes.imageWrapper,
				classes[`image${size}`],
				size !== 'half' ? classes.firstNomargin : '',
			)}
	>
		<img src={src} alt={alt} className={classes.imageImg} />
	</div>
)

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	size: PropTypes.oneOf(['full', 'half']),
}

Image.defaultProps = {
	size: 'half',
}

export default injectSheet(styles)(Image)
