import React from 'react';

const ProductImage = (props) =>{
	return(
		<img src={props.imgUrl} alt={props.name} />
	)
};
export default ProductImage;