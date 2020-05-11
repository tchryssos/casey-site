import { useEffect } from 'react'

import bread from 'static/images/About/bread_sticker.png'
import cocci from 'static/images/About/cocci_sticker.png'
import fishing from 'static/images/About/fishing.gif'
import hottinet from 'static/images/About/hottinet.png'
import kylie from 'static/images/About/kylie_sticker.png'
import shoes from 'static/images/About/shoes_sticker.png'
import terraceHouse from 'static/images/About/terraceHouse_sticker.png'
import animalCrossing from 'static/images/About/animalcrossing.png'

const stickers = [bread, cocci, hottinet, kylie, shoes, terraceHouse, animalCrossing]
const sticker = (e) => {
	const src = stickers[Math.floor(Math.random() * stickers.length)]
	const board = document.getElementById('stickerBoard')
	const image = document.createElement('img')
	image.setAttribute('src', src)
	const stickerDimension = 200
	const top = (e.clientY - (stickerDimension / 2)) + board.scrollTop
	const left = e.clientX - (stickerDimension / 2)
	image.style.cssText = `
		position: absolute;
		top: ${top}px;
		left: ${left}px;
		z-index: 5;
		width: ${stickerDimension}px;
		height: ${stickerDimension}px
	`
	board.appendChild(image)
}

export default () => {
	useEffect(() => {
		document.addEventListener('click', sticker)
		return () => document.removeEventListener('click', sticker)
	}, [])
}
