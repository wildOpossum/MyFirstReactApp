import { configureStore } from '@reduxjs/toolkit';
import pizzas from './slice/pizzaSlice';
import categories from './slice/categoriesSlice';

export const store = configureStore({
	reducer: {
		pizzas,
		categories
	}
});

console.log(store);