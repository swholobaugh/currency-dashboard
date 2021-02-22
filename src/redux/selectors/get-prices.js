import { createSelector } from 'reselect';

const getPriceState = (state) => {      
  return state.reducer;
}

 export const getPrices = createSelector(
  getPriceState,
  (prices) => {
    return prices.prices;
  }
);
