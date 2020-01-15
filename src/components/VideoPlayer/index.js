import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	videoWrapper: ({ aspectRatio }) => {
		let aspectString

		switch (aspectRatio) {
			case '1:1':
				aspectString = '100%'
				break
			case '4:3':
				aspectString = '75%'
				break
			default: // 16:9
				aspectString = '56.25%'
		}
		return {
			marginTop: '16px',
			position: 'relative',
			width: '100%',
			paddingBottom: aspectString,
		}
	},
	video: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
})

export default ({ src, title, aspectRatio }) => {
	const classes = useStyles({ aspectRatio })
	return (
		<div className={classes.videoWrapper}>
			<iframe
				title={title}
				src={src}
				frameBorder="0"
				allow="autoplay; fullscreen"
				allowFullScreen
				className={classes.video}
			/>
		</div>
	)
}
