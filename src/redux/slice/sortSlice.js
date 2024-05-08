import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchValue: '',
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
			state.sort = action.payload;			
		},		
		setSearch: (state, action) => {
			state.searchValue = action.payload;			
		}
	}
});

const {actions, reducer} = sortSlice;

export default reducer;

export const {setSort, setSearch} = actions;