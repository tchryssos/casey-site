import { useEffect } from 'react'

import bread from 'static/images/About/bread_sticker.png'
import cocci from 'static/images/About/cocci_sticker.png'
import fishing from 'static/images/About/fishing.gif'
import hottinet from 'static/images/About/hottinet.png'
import kylie from 'static/images/About/kylie_sticker.png'
import shoes from 'static/images/About/shoes_sticker.png'
import terraceHouse from 'static/images/About/terraceHouse_sticker.png'

const stickers = [bread, cocci, fishing, hottinet, kylie, shoes, terraceHouse]
const sticker = (e) => {
	if (stickers.length) {
		const src = stickers.pop()
		const board = document.getElementById('stickerBoard')
		const image = document.createElement('img')
		image.setAttribute('src', src)
		const newWidth = 200
		image.style.cssText = `position: absolute; top: ${e.clientY}px; left: ${e.clientX - (newWidth / 2)}px; z-index: 5; width: ${newWidth}px`
		board.appendChild(image)
	} else {
		document.removeEventListener('click', sticker)
	}
}

export default () => {
	useEffect(() => {
		document.addEventListener('click', sticker)
		return () => document.removeEventListener('click', sticker)
	}, [])
}
