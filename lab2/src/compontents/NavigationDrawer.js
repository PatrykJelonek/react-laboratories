import React, {useState} from "react";
import '../assets/css/navigation-drawer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faTable,
	faBasketShopping,
	faLock,
	faLayerGroup,
	faBox,
	faSquare,
	faTableCells,
	faFontAwesome,
	faSignal,
	faBars,
	faPlus,
	faMinus,
	faCircleHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";

function NavigationDrawer(props) {
	const [isActive, setIsActive] = useState(false);
	const [isIncreaseFontActive, setIsIncreaseFontActive] = useState(true);
	const [isDesreaseFontActive, setIsDesreaseFontActive] = useState(true);
	const [fontSize, setFontSize] = useState(14);

	const menu = [
		{
			name: 'Dashboard',
			link: ``,
			icon: faBasketShopping,
			isHeader: false,
		},
		{
			name: 'Layouts',
			link: `layouts`,
			icon: faTable,
			isHeader: false,
		},
		{
			name: 'Pages',
			link: null,
			icon: null,
			isHeader: true,
		},
		{
			name: 'Account Settings',
			link: `account-settings`,
			icon: faTableCells,
			isHeader: false,
		},
		{
			name: 'Authentication',
			link: `authentication`,
			icon: faLock,
			isHeader: false,
		},
		{
			name: 'Misc',
			link: `misc`,
			icon: faSignal,
			isHeader: false,
		},
		{
			name: 'Components',
			link: null,
			icon: null,
			isHeader: true,
		},
		{
			name: 'Cards',
			link: `cards`,
			icon: faLayerGroup,
			isHeader: false,
		},
		{
			name: 'User Interface',
			link: `user-interface`,
			icon: faBox,
			isHeader: false,
		},
		{
			name: 'Extended UI',
			link: `extended-ui`,
			icon: faSquare,
			isHeader: false,
		},
		{
			name: 'Boxicons',
			link: `boxicons`,
			icon: faFontAwesome,
			isHeader: false,
		},
		{
			name: 'Accessibility',
			link: null,
			icon: null,
			isHeader: true,
		},
	];

	const navigationItems = menu.map((item, index) => {
		return <li
			key={index}
			className={!item.isHeader ? 'navigation__item' : 'navigation__item navigation__item--header'}
		>
			{
				!item.isHeader ?
					<NavLink to={item.link}>
						<FontAwesomeIcon icon={item.icon}/> {item.name}
					</NavLink>
					:
					<li className="navigation__item navigation__item--header">
						{item.name}
					</li>
			}
		</li>
	});

	const handleClick = event => {
		// 👇️ toggle isActive state on click
		setIsActive(current => !current);
	};

	const changeStyle = event => {
		document.querySelector('body').classList.toggle('isDark');
	}

	const increaseFont = event => {
		if (fontSize + 1 > 16) {
			setIsIncreaseFontActive(false);
			document.querySelector('body').style.fontSize = (fontSize + 1) + 'px';
		} else {
			document.querySelector('body').style.fontSize = (fontSize + 1) + 'px';
			setIsDesreaseFontActive(true);
			setFontSize(fontSize + 1);
		}
	}

	const decreaseFont = event => {
		if (fontSize - 1 < 12) {
			setIsDesreaseFontActive(false);
			document.querySelector('body').style.fontSize = (fontSize - 1) + 'px';
		} else {
			document.querySelector('body').style.fontSize = (fontSize - 1) + 'px';
			setIsIncreaseFontActive(true);
			setFontSize(fontSize - 1);
		}
	}

	return <nav className={isActive ? 'navigation navigation--open' : 'navigation'}>
		<div className="navigation__logo">
			<h1><span className="navigation__logo--char">S</span> sneat</h1>
			<FontAwesomeIcon icon={faBars} className="navigation__bars" onClick={handleClick}/>
		</div>
		<ul className="navigation__list">
			{navigationItems}
			<li className='navigation__item navigation__item--empty'
			    onClick={changeStyle}>
				<FontAwesomeIcon icon={faCircleHalfStroke}/> Change style
			</li>
			<li className={isIncreaseFontActive ? 'navigation__item navigation__item--empty' : 'navigation__item navigation__item--empty navigation__item--disabled'}
			    onClick={increaseFont}>
				<FontAwesomeIcon icon={faPlus}/> Font
			</li>
			<li className={isDesreaseFontActive ? 'navigation__item navigation__item--empty' : 'navigation__item navigation__item--empty navigation__item--disabled'}
			    onClick={decreaseFont}>
				<FontAwesomeIcon icon={faMinus}/> Font
			</li>
		</ul>
	</nav>
}

export default NavigationDrawer;