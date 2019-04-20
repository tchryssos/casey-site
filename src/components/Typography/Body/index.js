import React from 'react'
import PropTypes from 'prop-types'

const Body = (props) => {
	const { children } = props
	return (
		<div>
			<p>
				{children}
			</p>
		</div>
	)
}

Body.propTypes = {
	children: PropTypes.node,
}

export default Body
