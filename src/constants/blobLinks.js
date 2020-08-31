import ChaseSapphire from 'static/svg/home/ChaseSapphire-4.svg'
import FISMarketing from 'static/svg/home/FISMarketing-4.svg'
import About from 'static/svg/home/About-4.svg'
import Portfolio from 'static/svg/home/Portfolio-4.svg'
import MusicalRug from 'static/svg/home/MusicalRug-4.svg'
import TheUprisingCreative from 'static/svg/home/TheUprisingCreative-4.svg'
import ELO from 'static/svg/home/ELO-4.svg'
import ListenJay from 'static/svg/home/ListenJay-5.svg'
import MensHealth from 'static/svg/home/MensHealth-4.svg'
import Mirror from 'static/svg/home/Mirror-4.svg'

const blobLinkData = {
	MensHealth: {
		src: MensHealth,
		className: 'MensHealth',
		link: '/mens-health',
		altText: "Men's Health Houston Redesign",
		width: 50, // Width in percentage
		zIndex: 3,
		category: 'product',
		descriptionText: "Updating the branding and website design for a men's health clinic",
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
	ListenJay: {
		src: ListenJay,
		className: 'ListenJay',
		link: '/listen-jay',
		altText: 'ListenJay New Feature',
		width: 50,
		zIndex: 3,
		category: 'product',
		descriptionText: 'Adding a feature to a podcast discovery platform',
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
	Portfolio: {
		src: Portfolio,
		className: 'Portfolio',
		link: '/portfolio',
		altText: 'Portfolio Design',
		width: 100,
		zIndex: 3,
		category: 'product',
		descriptionText: 'Designing this website you\'re on right now',
		hideOnAltHome: true,
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
	ChaseSapphire: {
		src: ChaseSapphire,
		className: 'ChaseSapphire',
		link: '/chase-sapphire',
		altText: 'Chase Sapphire Reserve',
		width: 50,
		category: 'graphic',
		descriptionText: 'Art Directing social campaigns for the hottest travel card',
	},
	Mirror: {
		src: Mirror,
		className: 'Mirror',
		link: '/mirror',
		altText: 'Mirror Case Study',
		width: 70,
		category: 'product',
		descriptionText: 'DesignLab case study project focused on a clothing ecommerce site',
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
