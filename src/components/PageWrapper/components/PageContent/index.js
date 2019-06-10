import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const PageContent = (props) => {
	const { children } = props
	return (
		<div className="pageContentWrapper">
			{children}
		</div>
	)
}

PageContent.propTypes = {
	children: PropTypes.node,
}

export default PageContent
