import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prices: [],
  isLoading: false,
  isLoaded: false,
  error: null
}

const priceSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    fetchPricesStarted: state => {
      state.isLoading = true;
    },
    fetchPricesSucceeded: (state, action) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.prices = action.payload
    },
    fetchPricesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    }
  }
});

export const {
  fetchPricesFailed,
  fetchPricesStarted,
  fetchPricesSucceeded
} = priceSlice.actions;
export default priceSlice.reducer;