import ChaseSapphire from 'static/svg/home/ChaseSapphire-3.svg'
import FISMarketing from 'static/svg/home/FISMarketing-3.svg'
import About from 'static/svg/home/About-3.svg'
import Portfolio from 'static/svg/home/Portfolio-3.svg'
import MusicalRug from 'static/svg/home/MusicalRug-3.svg'
import TheUprisingCreative from 'static/svg/home/TheUprisingCreative-3.svg'
import ELO from 'static/svg/home/ELO-3.svg'
import ListenJay from 'static/svg/home/ListenJay-3.svg'

const blobLinkData = {
	ListenJay: {
		src: ListenJay,
		className: 'ListenJay',
		link: '/listen-jay',
		altText: 'Listen Jay UX/UI Design',
		width: 50, // Width in percentage
		zIndex: 3,
		category: 'product',
		descriptionText: 'Rethinking the most trafficked pages of a podcast discovery platform',
		descriptionAlignment: 'left',
	},
	FISMarketing: {
		src: FISMarketing,
		className: 'FISMarketing',
		link: '/flatiron-school-marketing',
		altText: 'Flatiron School Marketing',
		width: 50,
		zIndex: 2,
		category: 'graphic',
		descriptionText: 'Managing a creative team working on everything including out-of-home, video, organic and paid social',
	},
	ELO: {
		src: ELO,
		className: 'ELO',
		link: '/elo-tracker',
		altText: 'Ladders ELO Tracker',
		width: 40,
		zIndex: 5,
		category: 'product',
		descriptionText: 'Building a gaming tool from the ground up',
		descriptionAlignment: 'left',
	},
	Portfolio: {
		src: Portfolio,
		className: 'Portfolio',
		link: '/portfolio',
		altText: 'Portfolio Design',
		width: 50,
		zIndex: 3,
		category: 'product',
		descriptionText: 'Designing this website you\'re on right now',
	},
	TheUprisingCreative: {
		src: TheUprisingCreative,
		className: 'TheUprisingCreative',
		link: '/uprising',
		altText: 'Uprising Creative',
		width: 50,
		zIndex: 4,
		category: 'graphic',
		descriptionText: 'Print and web projects from my internship at an LA based design studio',
		descriptionAlignment: 'left',
	},
	ChaseSapphire: {
		src: ChaseSapphire,
		className: 'ChaseSapphire',
		link: '/chase-sapphire',
		altText: 'Chase Sapphire Reserve',
		width: 100,
		zIndex: 3,
		category: 'graphic',
		descriptionText: 'Art Directing social campaigns for the hottest travel card',
	},
	MusicalRug: {
		src: MusicalRug,
		className: 'MusicalRug',
		link: '/musical-rug',
		altText: 'Musical Rug',
		width: 50,
		category: 'graphic',
		descriptionText: 'Combining software and hardware skills to create a textile that plays sound upon touch',
		descriptionAlignment: 'left',
	},
	About: {
		src: About,
		className: 'About',
		link: '/about',
		altText: 'About Me Page',
		width: 50,
		descriptionAlignment: 'none',
	},
}

export default blobLinkData
