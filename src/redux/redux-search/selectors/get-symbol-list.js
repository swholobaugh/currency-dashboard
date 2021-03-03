import { createSelector } from 'reselect';

const getSymbolState = state => state.search;

export const getSymbolList = createSelector(
  getSymbolState,
  (search) => {
    return search.symbols;
  }
);