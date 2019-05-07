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
					{ spacerThirtyTwo: height === 32 },
					{ spacerSixtyFour: height === 64 },
					{ spacerNinetySix: height === 96 },
				)
			}
		/>
	)
}

Spacer.propTypes = {
	height: PropTypes.oneOf([32, 64, 96]),
}

Spacer.defaultProps = {
	height: 32,
}

export default Spacer
