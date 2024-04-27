import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/httpHooks';

/* const pizzasAdapter = createEntityAdapter(); */

const initialState = {
	categories: [],
    categoriesLoadingStatus: 'idle',
	activeCategories: "all"
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/categories")                
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
		categoriesChanged: (state, action) => {
            state.activeCategories = action.payload;
        }
        }, extraReducers: (builder) => {
            builder
                .addCase(fetchCategories.pending, state => {state.categoriesLoadingStatus = 'loading'})
                .addCase(fetchCategories.fulfilled, (state, action) => {
                    state.categoriesLoadingStatus = 'idle';
                    state.categories = action.payload;                    
                })
                .addCase(fetchCategories.rejected, state => {state.categoriesLoadingStatus = 'error'})
                .addDefaultCase(() => {})
        }
    }
);

const {actions, reducer} = categoriesSlice;

export default reducer;
export const {categoriesChanged} = actions;