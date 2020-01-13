import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	videoWrapper: ({ aspectRatio }) => ({
		marginTop: '16px',
		position: 'relative',
		width: '100%',
		paddingBottom: () => {
			switch (aspectRatio) {
				case '1:1':
					return '100%'
				case '4:3':
					return '75%'
				default: // 16:9
					return '56.25%'
			}
		},
	}),
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
