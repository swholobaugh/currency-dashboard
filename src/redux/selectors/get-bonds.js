import { createSelector } from 'reselect';

const getBondsState = (state) => {      
  return state.reducer;
}

 export const getBonds = createSelector(
  getBondsState,
  (bonds) => {
    return bonds.bonds;
  }
);
