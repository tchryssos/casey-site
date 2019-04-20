import React from 'react'
import PropTypes from 'prop-types'

const Heading = (props) => {
	const { children } = props
	return (
		<div>
			<h2>
				{children}
			</h2>
		</div>
	)
}

Heading.propTypes = {
	children: PropTypes.node,
}

export default Heading
