import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	itemGridWrapper: {
		marginTop: '16px',
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
}

const ItemGrid = ({ children, className, classes }) => (
	<div className={clsx(classes.itemGridWrapper, className)}>
		{children}
	</div>
)

ItemGrid.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(ItemGrid)
