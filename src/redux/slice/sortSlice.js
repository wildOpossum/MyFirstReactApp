import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sort: {
		name: 'by popularity', 
		sortProperty: 'rating'
	}
}

const sortSlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
		setSort: (state, action) => {
			state.sort = action.payload
			console.log(state.sort);
		},
	}
});

const {actions, reducer} = sortSlice;

export default reducer;

export const {setSort} = actions;