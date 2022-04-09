import React, {useState} from 'react';
import PriceLoad from './priceLoader';

const QuantityCounter = (props) => {
	//set quantity counter and cart
	const [quantity, setQuantity] = useState(1);
	const [cart, setCart] = useState([]);
	//if more quantity is more than 1 allow decrease.
	const countDown = () => {
		quantity > 1 ? setQuantity(quantity - 1): setQuantity(quantity - 0);
	};
	//on click cycle through quantity. add that amount of product to cart with an alert.
	const addToCart = () =>{
		for(let i = 0; i < quantity; i++){
			setCart((cart) => [...cart, props.product]);
		}
		quantity > 1 ? alert(quantity +" "+ props.product.name + "s added to cart") : alert(quantity +" "+ props.product.name + " added to cart");
	}

	return(
		<div className="row priceQuantity">
			<PriceLoad price={props.product.price}/>
			<div className="col-6 mb-cons">
				<div className="d-flex justify-content-end">
					<button className={quantity === 1 ? "notAvailable quantityBtn" : "available quantityBtn"} data-testid="decreaseBtn" onClick={countDown} aria-label="decrease quantity">-</button>
					<p className="quantityCount align-self-center" data-testid="counter">{quantity}</p>
					<button className="quantityBtn" data-testid="increaseBtn" onClick={() => setQuantity(quantity + 1)} aria-label="increase quantity">+</button>
				</div>
			</div>
			<div className="col-12 text-center">
				<button className="shop-btn" data-testid="addToCart" onClick={addToCart} aria-label={"Add " + quantity + " to Cart"}> Add To Cart </button>
			</div>
			<div className="d-none" data-testid="hidden-cart">{cart.length}</div>
		</div>
			
	)
};
export default QuantityCounter;
