import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/httpHooks';

/* const pizzasAdapter = createEntityAdapter(); */

const initialState = {
    pizzas: [],
    pizzasLoadingStatus: 'idle'
};

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/pizzas")                
    }
);

const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {

        }, extraReducers: (builder) => {
            builder
                .addCase(fetchPizzas.pending, state => {state.pizzasLoadingStatus = 'loading'})
                .addCase(fetchPizzas.fulfilled, (state, action) => {
                    state.pizzasLoadingStatus = 'idle';
                    state.pizzas = action.payload;                    
                })
                .addCase(fetchPizzas.rejected, state => {state.pizzasLoadingStatus = 'error'})
                .addDefaultCase(() => {})
        }
    }
);

const {actions, reducer} = pizzasSlice;

export default reducer;
export const {} = actions;