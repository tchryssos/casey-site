import MensHealth from 'static/svg/home/MHH-8.svg'
import FISMarketing from 'static/svg/home/FISM-8.svg'
import Portfolio from 'static/svg/home/Portfolio-8.svg'
import Chase from 'static/svg/home/Chase-8.svg'
import EHApp from 'static/svg/home/EHApp-8.svg'
import EHWeb from 'static/svg/home/EHWeb-8.svg'
import Irth from 'static/svg/home/Irth-8.svg'

import MHHMobile from 'static/svg/mobile/MHH-Mobile-8.svg'
import FISMobile from 'static/svg/mobile/FISM-Mobile-8.svg'
import PortfolioMobile from 'static/svg/mobile/Portfolio-Mobile-8.svg'
import ChaseMobile from 'static/svg/mobile/Chase-Mobile-8.svg'
import EHAppMobile from 'static/svg/mobile/EHApp-Mobile-8.svg'
import EHWebMobile from 'static/svg/mobile/EHWeb-Mobile-8.svg'
import IrthMobile from 'static/svg/mobile/Irth-Mobile-8.svg'

import { UX_TAG, BRAND_TAG, LEAD_TAG } from 'constants/tags'

import MensHealthDesciption from 'static/images/Descriptions/MMH_Description_v2.png'
import FISMDesciption from 'static/images/Descriptions/FIS_di.png'
import PortfolioDescription from 'static/images/Descriptions/portfolio_di.png'
import ChaseDescription from 'static/images/ChaseSapphire/Chase_Card.png'
import WixDescription from 'static/images/Descriptions/wix_description.png'
import EHAppDescription from 'static/images/Descriptions/EllipsisApp_description.png'

const blobLinkData = {
	MensHealth: {
		src: MensHealth,
		mobileSrc: MHHMobile,
		className: 'MensHealth',
		link: '/mens-health',
		altText: "Men's Health Houston Redesign",
		width: 50, // Width in percentage
		zIndex: 3,
		descriptionText:
			"Updating the branding and website design for a men's health clinic",
		descriptionAlignment: 'left',
		descriptionImage: MensHealthDesciption,
		tags: [UX_TAG, BRAND_TAG],
	},
	Irth: {
		src: Irth,
		mobileSrc: IrthMobile,
		className: 'FISMarketing',
		link: '/irth',
		altText: 'Healthcare Mobile app',
		width: 50,
		zIndex: 2,
		descriptionText: 'Bringing warmth and comfort to a sensitive subject',
		tags: [UX_TAG, BRAND_TAG],
	},
	EHApp: {
		src: EHApp,
		mobileSrc: EHAppMobile,
		className: 'ELO',
		link: '/ellipsis-app',
		altText: 'Designing for Voice Input',
		width: 40,
		zIndex: 5,
		descriptionImage: EHAppDescription,
		descriptionText: 'Creating a mental health assessment using voice',
		descriptionAlignment: 'left',
		tags: [UX_TAG, BRAND_TAG],
	},
	FISMarketing: {
		src: FISMarketing,
		mobileSrc: FISMobile,
		className: 'ListenJay',
		link: '/flatiron-school-marketing',
		altText: 'Flatiron School Marketing',
		width: 50,
		zIndex: 3,
		descriptionText:
			'Managing a creative team working on everything including out-of-home, video, organic and paid social',
		descriptionImage: FISMDesciption,
		tags: [BRAND_TAG, LEAD_TAG],
	},
	Portfolio: {
		src: Portfolio,
		mobileSrc: PortfolioMobile,
		className: 'Mirror',
		link: '/portfolio',
		altText: 'Portfolio Design',
		width: 50,
		zIndex: 4,
		descriptionAlignment: 'left',
		descriptionText: "Designing this website you're on right now",
		descriptionImage: PortfolioDescription,
		tags: [UX_TAG],
	},
	Chase: {
		src: Chase,
		mobileSrc: ChaseMobile,
		className: 'Chase',
		link: '/chase',
		altText: 'Chase Sapphire',
		width: 50,
		zIndex: 3,
		descriptionText: 'Social assets for the Chase Sapphire Reserve Card',
		descriptionAlignment: 'left',
		descriptionImage: ChaseDescription,
		tags: [BRAND_TAG],
	},
	EHWeb: {
		src: EHWeb,
		mobileSrc: EHWebMobile,
		className: 'Portfolio',
		link: '/ellipsis',
		altText: 'Wix Website Design',
		width: 50,
		zIndex: 3,
		descriptionImage: WixDescription,
		descriptionText: 'Designing and building a sustainable website in 1 week',
		tags: [BRAND_TAG, UX_TAG],
	},
}

export default blobLinkData
