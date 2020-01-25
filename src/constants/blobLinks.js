// import ChangeThingsVideo from 'static/svg/home/ChangeThingsVideo.svg'
import ChaseSapphire from 'static/svg/home/ChaseSapphire-1.svg'
import FISMarketing from 'static/svg/home/FISMarketing-1.svg'
import About from 'static/svg/home/About-1.svg'
import Portfolio from 'static/svg/home/Portfolio-1.svg'
import MusicalRug from 'static/svg/home/MusicalRug-1.svg'
import SeatGeekScholarship from 'static/svg/home/SeatGeekScholarship-1.svg'
import TheUprisingCreative from 'static/svg/home/TheUprisingCreative-1.svg'
import UIDesign from 'static/svg/home/UIDesign-1.svg'
import FISWeb from 'static/svg/home/FISWeb-1.svg'
import ListenJay from 'static/svg/home/ListenJay-1.svg'

const blobLinkData = {
	FISMarketing: {
		src: FISMarketing,
		className: 'FISMarketing',
		link: '/flatiron-marketing',
		altText: 'Flatiron School Marketing',
		width: 50, // Width in percentage
		zIndex: 3,
		category: 'graphic',
	},
	FISWeb: {
		src: FISWeb,
		className: 'FISWeb',
		link: '/fis-web',
		altText: 'Flatiron School Web Design',
		width: 50,
		category: 'product',
	},
	ListenJay: {
		src: ListenJay,
		className: 'ListenJay',
		link: '/listenjay',
		altText: 'Listen Jay UX/UI Design',
		width: 40,
		zIndex: 4,
		category: 'product',
	},
	MusicalRug: {
		src: MusicalRug,
		className: 'MusicalRug',
		link: '/musical-rug',
		altText: 'Musical Rug',
		width: 40,
		zIndex: 2,
		category: 'product',
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
	UIDesign: {
		src: UIDesign,
		className: 'UIDesign',
		link: '/UI-design',
		altText: 'UI Design',
		width: 50,
		category: 'product',
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
