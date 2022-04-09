import React from 'react';

const ProductTitle = (props) =>{
	return(
		<div className="row productTitle">
			<div className="col-12">
				<h1>{props.name}</h1>
				<p className="packInfo">{props.power} // Packet of {props.quantity}</p>
			</div>
		</div>
	)
};
export default ProductTitle;