import { createSelector } from 'reselect';

const getCommoditiesState = (state) => state.markets;

export const getCommodities = createSelector(
  getCommoditiesState,
  (markets) => {
    return markets.commodities;
  }
);