import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrency } from '../asynkThunk/currencyAsyncThunk';
import { CurrencySchema } from '../type/type';

const initialState: CurrencySchema = {
    result: undefined,
    error: undefined,
    isLoading: false,
};

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCurrency.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getCurrency.fulfilled, (state, action) => {
                state.isLoading = false;
                state.result = action.payload;
            })
            .addCase(getCurrency.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: currencyActions } = currencySlice;
export const { reducer: currencyReducer } = currencySlice;