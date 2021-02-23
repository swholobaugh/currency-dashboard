import { createSelector } from 'reselect';

const getEquitiesState = (state) => {      
  return state.reducer;
}

 export const getEquities = createSelector(
  getEquitiesState,
  (equities) => {
    return equities.equities;
  }
);
