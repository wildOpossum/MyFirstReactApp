import { configureStore } from '@reduxjs/toolkit';
import pizzas from './slice/pizzaSlice';
import categories from './slice/categoriesSlice';
import sort from './slice/sortSlice';
import cart from './slice/cartSlice';

export const store = configureStore({
	reducer: {
		pizzas,
		categories,
		sort,
		cart
	}
});

