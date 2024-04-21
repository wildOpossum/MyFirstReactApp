import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/httpHooks';

/* const pizzasAdapter = createEntityAdapter(); */

const initialState = {
    items: [],
    pizzasLoadingStatus: 'loading'
}

const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        pizzasFetching: state => {state.pizzasLoadingStatus = 'loading'},
        pizzasFetched: (state, action) => {
            state.pizzasLoadingStatus = 'idle';
            state.items = action.payload;            
        },
        pizzasFetchingError: state => {
            state.pizzasLoadingStatus = 'error';
        }
    }
});

const {actions, reducer} = pizzasSlice;

export default reducer;
export const {
    pizzasFetching,
    pizzasFetched,
    pizzasFetchingError,
} = actions;