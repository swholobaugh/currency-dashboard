import { createSelector } from 'reselect';

const getBondsState = (state) => state.markets;

export const getBonds = createSelector(
  getBondsState,
  (markets) => {
    return markets.bonds;
  }
);
