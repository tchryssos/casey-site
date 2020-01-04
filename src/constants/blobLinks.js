// import ChangeThingsVideo from 'static/svg/home/ChangeThingsVideo.svg'
import ChaseSapphire from 'static/svg/home/ChaseSapphire.svg'
import FISMarketing from 'static/svg/home/FISMarketing.svg'
import About from 'static/svg/home/About.svg'
import Portfolio from 'static/svg/home/Portfolio.svg'
import MusicalRug from 'static/svg/home/MusicalRug.svg'
import SeatGeekScholarship from 'static/svg/home/SeatGeekScholarship.svg'
import TheUprisingCreative from 'static/svg/home/TheUprisingCreative.svg'
import UIDesign from 'static/svg/home/UIDesign.svg'
import FISWeb from 'static/svg/home/FISWeb.svg'

const blobLinkData = {
	FISMarketing: {
		src: FISMarketing,
		svgFile: 'FISMarketing',
		link: '/flatiron-marketing',
		altText: 'Flatiron School Marketing',
		width: 50, // Width in percentage
		zIndex: 3,
		category: 'graphic',
	},
	UIDesign: {
		src: UIDesign,
		svgFile: 'UIDesign',
		link: '/ui-design',
		altText: 'UI Design',
		width: 50,
		category: 'product',
	},
	Portfolio: {
		src: Portfolio,
		svgFile: 'Portfolio',
		link: '/portfolio',
		altText: 'Portfolio Design',
		width: 40,
		zIndex: 4,
		category: 'product',
	},
	MusicalRug: {
		src: MusicalRug,
		svgFile: 'MusicalRug',
		link: '/musical-rug',
		altText: 'Musical Rug',
		width: 40,
		zIndex: 2,
		category: 'product',
	},
	TheUprisingCreative: {
		src: TheUprisingCreative,
		svgFile: 'TheUprisingCreative',
		link: '/uprising',
		altText: 'Uprising Creative',
		width: 50,
		zIndex: 3,
		category: 'graphic',
	},
	SeatGeekScholarship: {
		src: SeatGeekScholarship,
		svgFile: 'SeatGeekScholarship',
		link: '/seatgeek',
		altText: 'SeatGeek Scholarship',
		width: 100,
		zIndex: 2,
		category: 'graphic',
	},
	ChaseSapphire: {
		src: ChaseSapphire,
		svgFile: 'ChaseSapphire',
		link: '/chase-sapphire',
		altText: 'Chase Sapphire',
		width: 100,
		category: 'graphic',
	},
	FISWeb: {
		src: FISWeb,
		svgFile: 'FISWeb',
		link: '/FIS-web',
		altText: 'Flatiron School Web Design',
		width: 50,
		zIndex: 2,
		category: 'product',
	},
	About: {
		src: About,
		svgFile: 'About',
		link: '/about',
		altText: 'About Page',
		width: 50,
	},
}

export default blobLinkData
