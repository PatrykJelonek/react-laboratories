import React from "react";
import '../assets/css/search-toolbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faStar} from '@fortawesome/free-solid-svg-icons';

function SearchToolbar(props) {

	return <div className="search-toolbar-container">
		<div className="search-toolbar">
			<div className="search-toolbar__left">
				<div className="search-toolbar__input-container">
					<FontAwesomeIcon icon={faSearch}/>
					<input className='search-toolbar__input' placeholder="Search..."/>
				</div>
			</div>
			<div className="search-toolbar__right">
				<div className="search-toolbar__stars-container">
					<div className="search-toolbar__stars-title">
						<FontAwesomeIcon icon={faStar}/> <span>Star</span>
					</div>
					<div className="search-toolbar__stars-number">69</div>
				</div>
				<div className="search-toolbar__avatar-container">
					<img className="search-toolbar__avatar"
					     src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg" alt="Avatar"/>
				</div>
			</div>
		</div>
	</div>;
}

export default SearchToolbar;