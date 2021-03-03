import { createSelector } from 'reselect';

const getSearchState = state => {
  console.log(state);

  return state;
}

export const getSearchValue = createSelector(
  getSearchState,
  (search) => {
    //console.log(search);
    return search.searchValue;
  }
);