import React from 'react'
import { createUseStyles } from 'react-jss'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Heading from 'components/Typography/Heading'
import SubHeading from 'components/Typography/SubHeading'
import Body from 'components/Typography/Body'
import Spacer from 'components/Spacer'

const useStyles = createUseStyles({
	half: {
		width: '100%',
		marginBottom: 64,
		[MD_MIN_STRING]: {
			width: 'calc(50% - 8px)',
			marginBottom: 0,
		},
	},
})

const Philz = () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<ContentBlock>
				<Heading>Philz Coffee Mobile App Analysis</Heading>
				<Spacer />
				<SubHeading>How would we do it differently?</SubHeading>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>About the project</SubHeading>
				<Spacer />
				<Body>
					This is not a project I was hired for. It is merely an exercise in
					product design thinking based on an app I found myself using
					regularly. I am often obsessed with the balance of personality and
					utility in online experiences and the Philz app is one place where I
					think function could be prioritized more than inventive visuals.
				</Body>
				<Spacer height={2} />
				<SubHeading>Who is this app for?</SubHeading>
				<Spacer />
				<Body>
					Regular Philz customers, customers trying to order quickly or
					contactlessly, customers looking for their nearest Philz
				</Body>
				<Spacer height={2} />
				<SubHeading>Problems it solves</SubHeading>
				<Spacer />
				<Body>
					Helps Philz maintain a competitive edge and improves customer
					experience. Having a way for customers to order contactlessly is a
					must in pandemic times.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Goal #1</SubHeading>
				<Heading>
					Create an easy to use experience for first time app users
				</Heading>
				<Spacer />
				<Body>
					During the pandemic, Philz is requiring customers to place their order
					over the app. This makes the experience of a first time user even more
					important since understanding the app is a barrier to getting that
					creamy sweet mint mojito iced coffee that only Philz has.
				</Body>
				<Spacer height={2} />
				<SubHeading>Clear call to order</SubHeading>
				<Spacer />
				<Body>
					Currently when you open the Philz app it will show you a bag of beans
					or a drink with a CTA saying, &quot;I&apos;ll try it!&quot;. Users
					rely heavily on the first piece of information they see when making
					decisions and this CTA does not make it clear what action you are
					taking by trying it.
				</Body>
				<Spacer height={2} />
				<SubHeading>
					Show the cart, even if its empty or Making the navigation clear
				</SubHeading>
				<Spacer />
				<Body>
					Even subtle visual clues can influence how users respond to a given
					task. Currently, Philz does not show the cart in the nav until you
					place your first item in it. Showing the users the cart in the nav
					right away can prime them for a purchase.
				</Body>
				<Spacer />
				<Body>
					Philz also uses a hamburger-like icon with the word &quot;menu&quot;
					to denote their menu of drinks and sweets. Many competitors call this
					tab &quot;order&quot; or use a different icon to represent drinks.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Goal #2</SubHeading>
				<Heading>
					Focus on ultility over personality in the easy reorder component
				</Heading>
				<Spacer height={2} />
				<SubHeading>Things we like</SubHeading>
				<Spacer />
				<Body>
					Allowing users to easily reorder a previous order is a great feature
					that gets users ordering quickly and coming back time and again on
					many apps. It great because it helps users make decisions almost
					unconciously and creates a consitency for them.
				</Body>
				<Spacer height={2} />
				<SubHeading>Things we would change</SubHeading>
				<Spacer />
				<Body>
					Users are highly influenced by the first piece of information they
					see. In the Philz app the reorder feature initially only shows you one
					item from your order. So you could want to reorder that iced tea, but
					you might not remember that in your last order you also had a cookie
					and another drink. To make this more user friendly, we can show them
					their entire order and the price to create clarity and trust.
				</Body>
			</ContentBlock>
			<ContentBlock>
				<SubHeading>Bonus</SubHeading>
				<Heading>Recipe reset additon</Heading>
				<Spacer />
				<Body>
					Other coffee order apps like Starbucks, have a &quot;recipe
					reset&quot; option so if you get too wild swapping milks, adding
					shots, and syrups to your drink, you can always go back to the
					original recipe. At Philz, they often suggest having your drinks
					prepared &quot;Philz Way&quot;. I think that adding a recipe reset
					feature that ties in &quot;Philz Way&quot; would be a great way to
					take guess work away from users and allow them to build trust in the
					Philz brand personality.
				</Body>
			</ContentBlock>
		</PageWrapper>
	)
}

export default Philz
