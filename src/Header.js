import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguangeIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header__icon'
					src='https://spng.pngfind.com/pngs/s/13-133395_airbnb-logo-airbnb-logo-png-transparent-png.png'
					alt=''
				/>
			</Link>
			<div className='header__center'>
				<input type='text' />
				<SearchIcon />
			</div>
			<div className='header__right'>
				<p>Become a Host</p>
				<LanguangeIcon />
				<ExpandMoreIcon />
				<Avatar />
			</div>
		</div>
	);
}

export default Header;
