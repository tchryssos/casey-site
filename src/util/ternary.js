const ternary = (bool, truthy, falsey) => {
	if (bool) {
		return truthy
	}
	return falsey
}

export default ternary
