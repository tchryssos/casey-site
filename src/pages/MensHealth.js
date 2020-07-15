import React from 'react'
import { createUseStyles } from 'react-jss'


import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'

const useStyles = createUseStyles({

})

export default () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<Heading>
					Men's Health
				</Heading>
			</ContentBlock>
			<ContentBlock>
				<Heading>
					Getting in the head of the Men's Health user
				</Heading>
			</ContentBlock>
		</PageWrapper>
	)
}
