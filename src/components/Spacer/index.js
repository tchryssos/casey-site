import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './styles.scss'

const Spacer = (props) => {
	const { height } = props
	return (
		<div
			className={
				classnames(
					{ spacerSingle: height === 1 },
					{ spacerDouble: height === 2 },
					{ spacerTriple: height === 3 },
					{ spacerQuad: height === 4 },
				)
			}
		/>
	)
}

Spacer.propTypes = {
	height: PropTypes.oneOf([1, 2, 3, 4]),
}

Spacer.defaultProps = {
	height: 1,
}

export default Spacer
