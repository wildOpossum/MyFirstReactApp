import { configureStore } from '@reduxjs/toolkit';
import pizzas from './slice/pizzaSlice';
import categories from './slice/categoriesSlice';
import sort from './slice/sortSlice';

export const store = configureStore({
	reducer: {
		pizzas,
		categories,
		sort
	}
});

console.log(store);