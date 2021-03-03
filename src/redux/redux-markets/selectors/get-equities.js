import { createSelector } from 'reselect';

const getEquitiesState = (state) => state.markets;

export const getEquities = createSelector(
  getEquitiesState,
  (markets) => {
    return markets.equities;
  }
);
