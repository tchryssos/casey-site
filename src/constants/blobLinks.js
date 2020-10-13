import FISMarketing from 'static/svg/home/FISMarketing-5.svg'
import About from 'static/svg/home/About-5.svg'
import Portfolio from 'static/svg/home/Portfolio-5.svg'
import ELO from 'static/svg/home/ELO-5.svg'
import ListenJay from 'static/svg/home/ListenJay-6.svg'
import MensHealth from 'static/svg/home/MHH-5.svg'
import Mirror from 'static/svg/home/Mirror-6.svg'

import { UX_TAG, BRAND_TAG, LEAD_TAG } from 'constants/tags'

import MensHealthDesciption from 'static/images/Descriptions/mhh_di-01.png'
import FISMDesciption from 'static/images/Descriptions/FIS_di.png'
import ELODesciption from 'static/images/Descriptions/ELO_di.png'
import LJUXADesciption from 'static/images/Descriptions/LJ_di.png'
import MirrorDescription from 'static/images/Descriptions/Mirror-di.png'
import PortfolioDescription from 'static/images/Descriptions/portfolio_di.png'

const blobLinkData = {
	MensHealth: {
		src: MensHealth,
		className: 'MensHealth',
		link: '/mens-health',
		altText: "Men's Health Houston Redesign",
		width: 50, // Width in percentage
		zIndex: 3,
		descriptionText: "Updating the branding and website design for a men's health clinic",
		descriptionAlignment: 'left',
		descriptionImage: MensHealthDesciption,
		tags: [UX_TAG, BRAND_TAG],
	},
	FISMarketing: {
		src: FISMarketing,
		className: 'FISMarketing',
		link: '/flatiron-school-marketing',
		altText: 'Flatiron School Marketing',
		width: 50,
		zIndex: 2,
		descriptionText: 'Managing a creative team working on everything including out-of-home, video, organic and paid social',
		descriptionImage: FISMDesciption,
		tags: [BRAND_TAG, LEAD_TAG],
	},
	ELO: {
		src: ELO,
		className: 'ELO',
		link: '/elo-tracker',
		altText: 'Ladders ELO Tracker',
		width: 40,
		zIndex: 5,
		descriptionText: 'Building a gaming tool from the ground up',
		descriptionAlignment: 'left',
		descriptionImage: ELODesciption,
		tags: [UX_TAG, BRAND_TAG],
	},
	ListenJay: {
		src: ListenJay,
		className: 'ListenJay',
		link: '/listen-jay',
		altText: 'ListenJay New Feature',
		width: 50,
		zIndex: 3,
		descriptionText: 'Adding a feature to a podcast discovery platform',
		descriptionImage: LJUXADesciption,
		tags: [UX_TAG],
	},
	Mirror: {
		src: Mirror,
		className: 'Mirror',
		link: '/mirror',
		altText: 'Mirror Case Study',
		width: 50,
		zIndex: 4,
		descriptionText: 'DesignLab case study project focused on a clothing ecommerce site',
		descriptionAlignment: 'left',
		descriptionImage: MirrorDescription,
		tags: [UX_TAG, BRAND_TAG],
	},
	Portfolio: {
		src: Portfolio,
		className: 'Portfolio',
		link: '/portfolio',
		altText: 'Portfolio Design',
		width: 100,
		zIndex: 3,
		descriptionText: 'Designing this website you\'re on right now',
		hideOnAltHome: true,
		descriptionImage: PortfolioDescription,
		tags: [UX_TAG],
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
