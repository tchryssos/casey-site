import React from 'react'
import { createUseStyles } from 'react-jss'

import Image from 'components/Image'

import WeWork from 'static/svg/misc/wework.svg'
import FIS from 'static/svg/misc/fis_logo.svg'
import MHH from 'static/svg/misc/MHH_logo.svg'
import Ellipsis from 'static/svg/misc/EllipsisLogo.svg'

const logos = [WeWork, FIS, MHH, Ellipsis]

const useStyles = createUseStyles({
	logoWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 64,
	},
	logo: {
		width: '18%',
	},
})

const LogoCollection = () => {
	const classes = useStyles()
	return (
		<div className={classes.logoWrapper}>
			{logos.map((logo) => (
				<Image className={classes.logo} src={logo} key={logo} />
			))}
		</div>
	)
}

export default LogoCollection
