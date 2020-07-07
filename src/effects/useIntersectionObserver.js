import { useEffect } from 'react'

const defaultThresholds = [
	0.05, 0.1, 0.15, 0.2, 0.25,
	0.3, 0.35, 0.4, 0.45, 0.5,
	0.55, 0.6, 0.65, 0.7, 0.75,
	0.8, 0.85, 0.9, 0.95, 1.0,
]
export default (getScroll) => (
	targets, intersectionCallback, intersectionThresholds = defaultThresholds,
) => {
	useEffect(() => {
		const currents = targets.filter((x) => x.current)
		let observer
		if (intersectionCallback && currents.length === targets.length) {
			const options = {
				root: getScroll(),
				rootMargin: '0px',
				threshold: intersectionThresholds,
			}
			observer = new IntersectionObserver(intersectionCallback, options)
			targets.forEach(
				(t) => observer.observe(t.current),
			)
		}
		return () => targets.forEach(
			(t) => observer?.unobserve(t.current),
		)
	}, [intersectionCallback, ...targets])
}
