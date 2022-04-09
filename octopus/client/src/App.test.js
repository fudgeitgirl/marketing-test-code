import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuantityCounter from './components/quantityCounter';

const testData ={
	product :{
		name: 'mock product',
		price: 1299
	}
};


test('should be able to increase and decrease product quantity', async () => {
  //render quantity counter
  render(
  	<QuantityCounter product={testData}/>
  );
  //grab the increase & decrease button & counter
  const counter = await screen.getByTestId('counter');
  const increaseButton = await screen.getByTestId('increaseBtn');
  const decreaseButton = await screen.getByTestId('decreaseBtn');
  //simulate a click
  userEvent.click(increaseButton);  
  //assert that quantity has increased
  expect(counter.innerHTML).toEqual("2");
  //simulate a click
  userEvent.click(decreaseButton);  
  //assert that quantity has increased
  jest.spyOn(window, 'alert').mockReturnValue();
  expect(counter.innerHTML).toContain("1");
});

test('should be able to add items to the basket', async () => {
  //render quantity counter section
	render(
	  	<QuantityCounter product={testData}/>
	  );
  //grab the add to cart btn & cart array
  const addToCart = await screen.getByTestId('addToCart');
  const ghostCart = await screen.getByTestId('hidden-cart')
  //simulate a click
  userEvent.click(addToCart);
  //assert that cart length has increased.
  expect(ghostCart.innerHTML).toBe("1");
  //simulate a click
  userEvent.click(addToCart);
  jest.spyOn(window, 'alert').mockReturnValue();
  //assert that cart length has increased.
  expect(ghostCart.innerHTML).toBe("2");
});
