import { configureStore } from '@reduxjs/toolkit';
import pizzas from './slice/pizzaSlice';

export const store = configureStore({
	reducer: {
		pizzas
	}
});

console.log(store);