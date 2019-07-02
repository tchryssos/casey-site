import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const ItemGrid = (props) => {
	const { children } = props
	return (
		<div className="itemGridWrapper">
			{children}
		</div>
	)
}

ItemGrid.propTypes = {
	children: PropTypes.node,
}

export default ItemGrid
