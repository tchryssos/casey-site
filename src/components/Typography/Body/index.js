import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ children }) => (
	<div>
		<p>
			{children}
		</p>
	</div>
)

Body.propTypes = {
	children: PropTypes.node,
}

export default Body
