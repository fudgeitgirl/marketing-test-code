import React from 'react';


const Header = (props) =>{
	return(
		<header> 
			<div className="header-logo">
				<img src={require("../assets/logo.svg")} alt="Octopus Energy"/>
			</div>
			<div className="header-basket">
				<img src={require("../assets/basket.svg")} alt="basket"/>
			</div>
		</header>
	)
};
export default Header;