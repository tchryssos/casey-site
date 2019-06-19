import React from 'react'
import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import BlobLink from 'components/BlobLink'
import blobLinkData from 'constants/blobLinks'

import './styles/Home.scss'

const Home = () => {
	const blobLinks = Object.keys(blobLinkData).map(key => (
		<BlobLink svgFileName={key} key={key} />
	))

	return (
		<div className="homeContainer">
			<div className="homeWrapper">
				{blobLinks}
			</div>
		</div>
	)
}

export default Home
