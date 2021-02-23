import { createSelector } from 'reselect';

const getCommoditiesState = (state) => {      
  return state.reducer;
}

 export const getCommodities = createSelector(
  getCommoditiesState,
  (commodities) => {
    return commodities.commodities;
  }
);