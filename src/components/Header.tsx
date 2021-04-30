import React from "react";
import logo from "./../images/logo.svg";
import { AppStore } from "./../store";

const Header = () => {
	const { storeState } = React.useContext(AppStore);

	return (
		<header>
			<img src={logo} alt='logo' className='logo' />
			<div className='score'>
				<small>Score</small>
				<span>{storeState.score}</span>
			</div>
		</header>
	);
};

export default Header;
