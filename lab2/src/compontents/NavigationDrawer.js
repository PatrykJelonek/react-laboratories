import React, {useState} from "react";
import '../assets/css/navigation-drawer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTable, faBasketShopping, faLock, faLayerGroup, faBox, faSquare, faTableCells, faFontAwesome, faSignal, faBars, faPlus, faMinus, faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons';

function NavigationDrawer(props) {
	const [isActive, setIsActive] = useState(false);
	const [isIncreaseFontActive, setIsIncreaseFontActive] = useState(true);
	const [isDesreaseFontActive, setIsDesreaseFontActive] = useState(true);
	const [fontSize, setFontSize] = useState(14);

	const handleClick = event => {
		// 👇️ toggle isActive state on click
		setIsActive(current => !current);
	};

	const changeStyle = event => {
		document.querySelector('body').classList.toggle('isDark');
	}

	const increaseFont = event => {
		if (fontSize + 1 > 20) {
			setIsIncreaseFontActive(false);
			document.querySelector('body').style.fontSize = (fontSize + 1) + 'px';
		} else {
			document.querySelector('body').style.fontSize = (fontSize + 1) + 'px';
			setIsDesreaseFontActive(true);
		}

		setFontSize(fontSize + 1);
	}

	const decreaseFont = event => {
		if (fontSize - 1 < 10) {
			setIsDesreaseFontActive(false);
			document.querySelector('body').style.fontSize = (fontSize - 1) + 'px';
		} else {
			document.querySelector('body').style.fontSize = (fontSize - 1) + 'px';
			setIsIncreaseFontActive(true);
		}

		setFontSize(fontSize - 1);
	}
	
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
			<li className={isDesreaseFontActive ? 'navigation__item' : 'navigation__item navigation__item--disabled'} onClick={changeStyle}>
				<FontAwesomeIcon icon={faCircleHalfStroke} /> Change style
			</li>
			<li className={isIncreaseFontActive ? 'navigation__item' : 'navigation__item navigation__item--disabled'} onClick={increaseFont}>
				<FontAwesomeIcon icon={faPlus} /> Font
			</li>
			<li className={isDesreaseFontActive ? 'navigation__item' : 'navigation__item navigation__item--disabled'} onClick={decreaseFont}>
				<FontAwesomeIcon icon={faMinus} /> Font
			</li>
		</ul>
	</nav>
}

export default NavigationDrawer;