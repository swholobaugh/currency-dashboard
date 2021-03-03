import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  symbols: [],
  isLoading: false,
  isLoaded: false,
  error: null
}

const marketsSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    fetchSymbolsStarted: (state, action) => {
      state.isLoading = true;
      state.searchValue = action.payload;
    },
    fetchSymbolsSucceeded: (state, action) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.symbols = action.payload;
    },
    fetchSymbolsFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    }
  }
});

export const {
  fetchSymbolsFailed,
  fetchSymbolsStarted,
  fetchSymbolsSucceeded,
} = marketsSlice.actions;

export default marketsSlice.reducer;