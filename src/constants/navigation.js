export const homePath = '/'
export const allProjectsPath = '/all-projects'
export const aboutPath = '/about'

export const ellipsisPath = '/ellipsis'
export const irthPath = '/irth'
export const philzPath = '/philz'
export const mirrorPath = '/mirror'
export const ELOPath = '/elo-tracker'
export const listenJayPath = '/listen-jay'
export const EllipsisAppPath = '/ellipsis-app'

export const lockedRoutesArray = [irthPath, EllipsisAppPath]

export const lockedRoutes = lockedRoutesArray.reduce((acc, route) => {
	acc[route] = route
	return acc
}, {})
