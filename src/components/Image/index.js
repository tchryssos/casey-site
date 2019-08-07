import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import injectSheet from 'react-jss'

const styles = {
	imageImg: {
		display: 'block',
		width: ({ scrollable }) => (scrollable ? 'unset' : '100%'),
	},
	imageWrapper: {
		display: 'inherit',
		width: ({ size }) => (
			size === 'half' ? 'calc(50% - 8px)' : '100%'
		),
		border: ({ bordered }) => (
			bordered ? '1px black solid' : ''
		),
		marginTop: '16px',
		'&:first-of-type': {
			marginTop: ({ size }) => (size === 'half' ? 0 : '16px'),
		},
		'&:nth-of-type(2)': {
			marginTop: ({ size }) => (size === 'half' ? 0 : '16px'),
		},
		overflow: ({ scrollable }) => (scrollable ? 'scroll' : 'none'),
	},
}

const Image = ({ src, alt, className, imageClassName, classes }) => (
	<div
		className={
			classNames(
				classes.imageWrapper,
				className,
			)
		}
	>
		<img
			src={src}
			alt={alt}
			className={
				classNames(
					classes.imageImg,
					imageClassName,
				)
			}
		/>
	</div>
)

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	imageClassName: PropTypes.string,
	/* eslint-disable react/no-unused-prop-types */
	size: PropTypes.oneOf(['full', 'half']),
	scrollable: PropTypes.bool,
	/* eslint-enable react/no-unused-prop-types */
}

Image.defaultProps = {
	size: 'half',
}

export default injectSheet(styles)(Image)
