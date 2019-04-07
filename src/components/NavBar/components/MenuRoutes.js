import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

const MenuRoutes = () => (
	<>
		<div className="menuRouteChunk">
			<NavLink
				className="menuLink"
				exact
				to="/"
			>
				Flatiron School Marketing
			</NavLink>
			<NavLink
				className="menuLink"
				exact
				to="/"
			>
				UX/UI Course Branding
			</NavLink>
			<NavLink
				className="menuLink"
				exact
				to="/"
			>
				Flatiron x SeatGeek Scholarship
			</NavLink>
			<NavLink
				className="menuLink"
				exact
				to="/"
			>
				Chase Sapphire Reserve
			</NavLink>
			<NavLink
				className="menuLink"
				exact
				to="/"
			>
				The Uprising Creative
			</NavLink>
		</div>
		<div className="menuRouteChunk">
			<NavLink
				className="menuLink"
				exact
				to="/"
			>
				Musical Rug
			</NavLink>
			<NavLink
				className="menuLink"
				exact
				to="/"
			>
				How to put in a tampon
			</NavLink>
		</div>
		<div className="menuRouteChunk">
			<NavLink
				className="menuLink"
				exact
				to="/"
			>
				About
			</NavLink>
		</div>
	</>
)

export default MenuRoutes
