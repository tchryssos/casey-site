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
		descriptionText: 'Rethinking the most trafficked pages of a podcast discovery platform',
		descriptionAlignment: 'left',
	},
	ELO: {
		src: ELO,
		className: 'ELO',
		link: '/elo-tracker',
		altText: 'ELO Tracker',
		width: 50,
		category: 'product',
		descriptionText: 'Building a gaming tool from the ground up',
	},
	FISWeb: {
		src: FISWeb,
		className: 'FISWeb',
		link: '/flatiron-school-web-design',
		altText: 'Flatiron School Web Design',
		width: 40,
		zIndex: 4,
		category: 'product',
		descriptionText: 'Keeping the Flatiron School site on-brand and accessible',
		descriptionAlignment: 'left',
	},
	FISMarketing: {
		src: FISMarketing,
		className: 'FISMarketing',
		link: '/flatiron-school-marketing',
		altText: 'Flatiron School Marketing Design',
		width: 50,
		zIndex: 2,
		category: 'graphic',
		descriptionText: 'Managing a creative team working on everything including out-of-home, video, organic and paid social',
	},
	TheUprisingCreative: {
		src: TheUprisingCreative,
		className: 'TheUprisingCreative',
		link: '/uprising',
		altText: 'Uprising Creative',
		width: 50,
		zIndex: 3,
		category: 'graphic',
		descriptionText: 'Print and web projects from my internship at an LA based design studio',
		descriptionAlignment: 'left',
	},
	SeatGeekScholarship: {
		src: SeatGeekScholarship,
		className: 'SeatGeekScholarship',
		link: '/seatgeek',
		altText: 'SeatGeek Scholarship',
		width: 90,
		zIndex: 2,
		category: 'graphic',
		descriptionText: 'Building a digital campaign around our scholarship for women in tech',
	},
	Portfolio: {
		src: Portfolio,
		className: 'Portfolio',
		link: '/portfolio',
		altText: 'Portfolio Design',
		width: 90,
		category: 'product',
		descriptionText: 'Designing this website you\'re on right now',
		descriptionAlignment: 'left',
	},
	ChaseSapphire: {
		src: ChaseSapphire,
		className: 'ChaseSapphire',
		link: '/chase-sapphire',
		altText: 'Chase Sapphire Reserve',
		width: 50,
		zIndex: 2,
		category: 'graphic',
		descriptionText: 'Art Directing social campaigns for the hottest travel card',
		descriptionAlignment: 'left',
	},
	MusicalRug: {
		src: MusicalRug,
		className: 'MusicalRug',
		link: '/musical-rug',
		altText: 'Musical Rug',
		width: 50,
		category: 'graphic',
		descriptionText: 'Combining software and hardware skills to create a textile that plays sound upon touch',
	},
	About: {
		src: About,
		className: 'About',
		link: '/about',
		altText: 'About Me Page',
		width: 100,
		descriptionAlignment: 'none',
	},
}

export default blobLinkData
