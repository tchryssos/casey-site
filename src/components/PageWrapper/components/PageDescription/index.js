import React from 'react'
import PropTypes from 'prop-types'
import Spacer from 'components/Spacer'
import './styles.scss'

const PageDescription = (props) => {
	const { children } = props
	return (
		<div className="pageDescriptionWrapper">
			<div className="descriptionSpacer">
				<Spacer height={4} />
			</div>
			{children}
		</div>
	)
}

PageDescription.propTypes = {
	children: PropTypes.node,
}

export default PageDescription
