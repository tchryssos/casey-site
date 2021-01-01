export const homePath = '/'
export const allProjectsPath = '/all-projects'

export const ellipsisPath = '/ellipsis'
export const irthPath = '/irth'
export const mirrorPath = '/mirror'

export const lockedRoutesArray = [irthPath]

export const lockedRoutes = lockedRoutesArray.reduce((acc, route) => {
	acc[route] = route
	return acc
}, {})
