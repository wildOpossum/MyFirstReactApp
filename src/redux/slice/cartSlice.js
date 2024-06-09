import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	items: []
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const cartItem = state.items.find((objItem) => {			
				return (
					objItem.id === action.payload.id
					&& objItem.size === action.payload.size
				);
			});

			if (cartItem) {
				cartItem.count++				
			} else {
				state.items.push({
					...action.payload,
					count: 1
				});
			}
			state.totalPrice = state.items.reduce((sum, obj) => {								
				return (obj.price * obj.count) + sum;
			}, 0);			
		},
		decQuantity: (state, action) => {
			const item = state.items.find((obj) => obj.id === action.payload.id && obj.size === action.payload.size);
			console.log(action.payload.size);
			if(item){
				if (item.count < 1) {
					return;
				}
				item.count--;
			}
			state.totalPrice = state.items.reduce((sum, obj) => {								
				return (obj.price * obj.count) + sum;
			}, 0);
		},
		removeProduct: (state, action) => {
			state.items = state.items.filter(obj => obj.id !== action.payload.id || obj.size !== action.payload.size);
			state.totalPrice = state.items.reduce((sum, obj) => {								
				return (obj.price * obj.count) + sum;
			}, 0);
		},
		clearCart: (state) => {
			state.items = [];
			state.totalPrice = 0;
		},

	}
});

const {actions, reducer} = cartSlice;

export default reducer;

export const {addProduct, clearCart, decQuantity, removeProduct} = actions;