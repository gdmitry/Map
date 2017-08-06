import React from "react";
import { NavLink } from 'react-router-dom'

export class Header extends React.Component {
	render() {
		return <header>
		<nav>
			<div className="nav-wrapper">
				<ul id="nav-mobile" className="left hide-on-med-and-down">
					<li><NavLink  to='/'>Main</NavLink ></li>
					<li><NavLink  to='/about'>About</NavLink ></li>
					<li><NavLink  to='/auth'>Home</NavLink ></li>
				</ul>
			</div>
		</nav>
  	</header>
	}
}