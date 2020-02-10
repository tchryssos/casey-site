import ChaseSapphire from 'static/svg/home/ChaseSapphire-2.svg'
import FISMarketing from 'static/svg/home/FISMarketing-2.svg'
import About from 'static/svg/home/About-2.svg'
import Portfolio from 'static/svg/home/Portfolio-2.svg'
import MusicalRug from 'static/svg/home/MusicalRug-2.svg'
import SeatGeekScholarship from 'static/svg/home/SeatGeekScholarship-2.svg'
import TheUprisingCreative from 'static/svg/home/TheUprisingCreative-2.svg'
import ELO from 'static/svg/home/ELO-2.svg'
import FISWeb from 'static/svg/home/FISWeb-2.svg'
import ListenJay from 'static/svg/home/ListenJay-2.svg'

const blobLinkData = {
	ListenJay: {
		src: ListenJay,
		className: 'ListenJay',
		link: '/listen-jay',
		altText: 'Listen Jay UX/UI Design',
		width: 50, // Width in percentage
		zIndex: 3,
		category: 'product',
	},
	ELO: {
		src: ELO,
		className: 'ELO',
		link: '/elo-tracker',
		altText: 'ELO Tracker',
		width: 50,
		category: 'product',
	},
	FISWeb: {
		src: FISWeb,
		className: 'FISWeb',
		link: '/flatiron-school-web-design',
		altText: 'Flatiron School Web Design',
		width: 40,
		zIndex: 4,
		category: 'product',
	},
	FISMarketing: {
		src: FISMarketing,
		className: 'FISMarketing',
		link: '/flatiron-school-marketing',
		altText: 'Flatiron School Marketing Design',
		width: 50,
		zIndex: 2,
		category: 'graphic',
	},
	TheUprisingCreative: {
		src: TheUprisingCreative,
		className: 'TheUprisingCreative',
		link: '/uprising',
		altText: 'Uprising Creative',
		width: 50,
		zIndex: 3,
		category: 'graphic',
	},
	SeatGeekScholarship: {
		src: SeatGeekScholarship,
		className: 'SeatGeekScholarship',
		link: '/seatgeek',
		altText: 'SeatGeek Scholarship',
		width: 100,
		zIndex: 2,
		category: 'graphic',
	},
	Portfolio: {
		src: Portfolio,
		className: 'Portfolio',
		link: '/portfolio',
		altText: 'Portfolio Design',
		width: 100,
		category: 'product',
	},
	ChaseSapphire: {
		src: ChaseSapphire,
		className: 'ChaseSapphire',
		link: '/chase-sapphire',
		altText: 'Chase Sapphire Reserve',
		width: 50,
		zIndex: 2,
		category: 'graphic',
	},
	MusicalRug: {
		src: MusicalRug,
		className: 'MusicalRug',
		link: '/musical-rug',
		altText: 'Musical Rug',
		width: 50,
		category: 'graphic',
	},
	About: {
		src: About,
		className: 'About',
		link: '/about',
		altText: 'About Me Page',
		width: 100,
	},
}

export default blobLinkData
