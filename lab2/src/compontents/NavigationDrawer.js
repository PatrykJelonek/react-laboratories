import React, {useState} from "react";
import '../assets/css/navigation-drawer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTable, faBasketShopping, faLock, faLayerGroup, faBox, faSquare, faTableCells, faFontAwesome, faSitemap, faSignal, faBars} from '@fortawesome/free-solid-svg-icons';

function NavigationDrawer(props) {
	const [isActive, setIsActive] = useState(false);

	const handleClick = event => {
		// 👇️ toggle isActive state on click
		setIsActive(current => !current);
	};

	return <nav className={isActive ? 'navigation navigation--open' : 'navigation'}>
		<div className="navigation__logo">
			<h1><span className="navigation__logo--char">S</span> sneat</h1>
			<FontAwesomeIcon icon={faBars} className="navigation__bars" onClick={handleClick}/>
		</div>
		<ul className="navigation__list">
			<li className="navigation__item navigation__item--selected">
				<FontAwesomeIcon icon={faBasketShopping}/> Dashboard
			</li>
			<li className="navigation__item">
				<FontAwesomeIcon icon={faTable}/> Layouts
			</li>
			<li className="navigation__item navigation__item--header">
				Pages
			</li>
			<li className="navigation__item">
				<FontAwesomeIcon icon={faTableCells} /> Account Settings
			</li>
			<li className="navigation__item">
				<FontAwesomeIcon icon={faLock} /> Authentication
			</li>
			<li className="navigation__item">
				<FontAwesomeIcon icon={faSignal} /> Misc
			</li>
			<li className="navigation__item navigation__item--header">Components</li>
			<li className="navigation__item">
				<FontAwesomeIcon icon={faLayerGroup} /> Cards
			</li>
			<li className="navigation__item">
				<FontAwesomeIcon icon={faBox} /> User Interface
			</li>
			<li className="navigation__item">
				<FontAwesomeIcon icon={faSquare} /> Extended UI
			</li>
			<li className="navigation__item">
				<FontAwesomeIcon icon={faFontAwesome} /> Boxicons
			</li>
			<li className="navigation__item navigation__item--header">Form & Tables</li>
			<li className="navigation__item">
				<FontAwesomeIcon icon={faSitemap} /> Dashboard
			</li>
		</ul>
	</nav>
}

export default NavigationDrawer;