import React from 'react'
import injectSheet from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import PageContent from 'components/PageWrapper/components/PageContent'
import PageDescription from 'components/PageWrapper/components/PageDescription'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'

const styles = {
}

const FISWeb = ({ classes }) => (
	<PageWrapper>
		<PageDescription>
			<ContentBlock>
				<Heading>Flatiron School Website Design</Heading>
				<Spacer />
				<Body>
					Coming Soon!
				</Body>
			</ContentBlock>
		</PageDescription>
		<PageContent>
			<ContentBlock>
				<Heading>Coming Soon!</Heading>
			</ContentBlock>
		</PageContent>
	</PageWrapper>
)

export default injectSheet(styles)(FISWeb)
