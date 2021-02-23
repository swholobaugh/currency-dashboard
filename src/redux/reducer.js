import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bonds: {
    fiveYear: [],
    tenYear: [],
    thirtyYear: [],
  },
  equities: {
    sp500: [],
    ndx: [],
  },
  commodities: {
    usd: [],
    gold: [],
    oil: [],
  },
  isLoading: false,
  isLoaded: false,
  error: null
}

const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    fetchBondsStarted: state => {
      state.isLoading = true;
    },
    fetchBondsSucceeded: (state, action) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.bonds = action.payload
    },
    fetchBondsFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
    fetchEquitiesStarted: state => {
      state.isLoading = true;
    },
    fetchEquitiesSucceeded: (state, action) => {
      state.isLoading = false;
      state.equities = action.payload
    },
    fetchEquitiesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
    fetchCommoditiesStarted: state => {
      state.isLoading = true;
    },
    fetchCommoditiesSucceeded: (state, action) => {
      state.isLoading = false;
      state.commodities = action.payload
    },
    fetchCommoditiesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchBondsFailed,
  fetchBondsStarted,
  fetchBondsSucceeded,
  fetchEquitiesStarted,
  fetchEquitiesSucceeded,
  fetchEquitiesFailed,
  fetchCommoditiesFailed,
  fetchCommoditiesStarted,
  fetchCommoditiesSucceeded
} = marketsSlice.actions;

export default marketsSlice.reducer;