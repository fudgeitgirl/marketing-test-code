import React from 'react';

const ProductDesc = (props) =>{
	return(
		<div className="row productDesc">
			<div className="col-12">
				<h2>Description</h2>
				<p>{props.description}</p>
			</div>
		</div>
	)
};
export default ProductDesc;