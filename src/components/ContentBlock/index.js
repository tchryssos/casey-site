import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const ContentBlock = (props) => {
	const { children } = props
	return (
		<div className="contentBlock">
			{children}
		</div>
	)
}

ContentBlock.propTypes = {
	children: PropTypes.node,
}

export default ContentBlock
