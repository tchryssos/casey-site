import React from 'react'

export default React.createContext({
	isMenuOpen: false,
	setIsMenuOpen: () => {},
	scrollY: 0,
})
