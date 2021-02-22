import { createSelector } from 'reselect';

const getLoadedState = (state) => {
  return state.reducer;
}

export const getIsLoaded = createSelector(
  getLoadedState,
    (isLoaded) => {
      return isLoaded;
  }
);

