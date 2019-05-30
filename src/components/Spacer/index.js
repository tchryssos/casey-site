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
					{ spacerSixteen: height === 16 },
					{ spacerThirtyTwo: height === 32 },
					{ spacerSixtyFour: height === 64 },
				)
			}
		/>
	)
}

Spacer.propTypes = {
	height: PropTypes.oneOf([16, 32, 64]),
}

Spacer.defaultProps = {
	height: 32,
}

export default Spacer
