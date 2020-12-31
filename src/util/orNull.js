import ternary from 'util/ternary'

const orNull = (bool, truthy) => ternary(bool, truthy, null)

export default orNull
