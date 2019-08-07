import React from 'react'
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

const ItemGrid = ({ children, classes }) => (
	<div className={classes.itemGridWrapper}>
		{children}
	</div>
)

ItemGrid.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(ItemGrid)
