import React, { useState } from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import Image from 'components/Image'

import resumeCircleRed from 'static/svg/about/resume-circle-red.svg'
import resumeCircle from 'static/svg/about/resume-circle.svg'
import resumeTextRed from 'static/svg/about/resume-text-red.svg'
import resumeText from 'static/svg/about/resume-text.svg'
import resumePdf from 'static/files/resume.pdf'

const svgHeight = '120px'
const svgWidth = '160px'
const useStyles = createUseStyles({
	'@keyframes spin': {
		from: { transform: 'rotate(0deg)' },
		to: { transform: 'rotate(90deg)' },
	},
	inline: {
		display: 'inline',
	},
	hidden: {
		display: 'none',
	},
	svgContainer: {
		position: 'relative',
		display: 'inline-block',
		height: svgHeight,
		width: svgWidth,
	},
	resumeSvg: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: svgHeight,
		width: svgWidth,
	},
	spinAnimation: {
		animation: '$spin infinite 1s linear',
	},
})

const srcSwitch = (isText, isRed) => {
	if (isText) {
		return isRed ? resumeTextRed : resumeText
	}
	return isRed ? resumeCircleRed : resumeCircle
}

const SvgComponent = ({
	isText, isRed, isHovered, classes,
}) => (
	<Image
		className={classes.inline}
		src={srcSwitch(isText, isRed)}
		alt={isText ? 'Download resume Text' : 'Spiney spinner'}
		imageClassName={
			clsx(
				classes.resumeSvg,
				{ [classes.spinAnimation]: !isText },
				{ [classes.hidden]: (isRed && !isHovered) || (!isRed && isHovered) },
			)
		}
	/>
)

const renderSvgs = (classes, isHovered) => (
	<>
		<SvgComponent isRed isHovered={isHovered} classes={classes} />
		<SvgComponent isHovered={isHovered} classes={classes} />
		<SvgComponent isText isRed isHovered={isHovered} classes={classes} />
		<SvgComponent isText isHovered={isHovered} classes={classes} />
	</>
)

export default () => {
	const [isHovered, setIsHovered] = useState(false)
	const classes = useStyles()

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={classes.inline}
		>
			<a
				href={resumePdf}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className={classes.svgContainer}>
					{renderSvgs(classes, isHovered)}
				</div>
			</a>
		</div>
	)
}
