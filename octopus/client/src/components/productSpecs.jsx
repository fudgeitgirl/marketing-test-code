import React from 'react';

const ProductSpecs = (props) =>{
	return(
		<div className="row productSpecs">
			<div className="col-12">
				<h2>Specifications</h2>
				<table>
					<tbody>
						<tr>
							<td>Brand</td>
							<td>{props.brand}</td>
						</tr>
						<tr>
							<td>Item weight</td>
							<td>{props.weight}</td>
						</tr>
						<tr>
							<td>Dimensions</td>
							<td>{props.height} x {props.width} x {props.length}</td>
						</tr>
						<tr>
							<td>Item model number</td>
							<td>{props.modelCode}</td>
						</tr>
						<tr>
							<td>Colour</td>
							<td>{props.colour}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
};
export default ProductSpecs;