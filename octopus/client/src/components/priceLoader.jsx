import React from 'react';

const PriceLoad = (props) =>{
	//divide price by 100 to get decimal
	const priceFormat = () =>{
		return props.price/100
	}
	//if price is there format get reult and stringify
	const priceString = props.price ? priceFormat(props.price).toString() : '';
	//split result by decimal
	const [pounds, pence] = priceString.split('.');
	
	return(
		<div className="col-6 mb-cons">
			<p className="price">{pounds}<span>.{pence}</span></p>
		</div>
	)
};
export default PriceLoad;