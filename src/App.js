import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBonds, getIsLoaded } from './redux/selectors/index';
import { fetchBondsStarted } from './redux/reducer';
import Pages from './pages/index';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

const App = () => {
  const dispatch = useDispatch();

  const bondsSelector = useSelector(state => getBonds(state));
  const isLoading = useSelector(state => state.reducer.isLoaded);
  console.log(isLoading);
  
  const [bonds, setBonds] = useState(null);
  
  useEffect(() => {
    const initializeState = async () => {
      await dispatch(fetchBondsStarted());
      await setBonds(bondsSelector);
    }
    initializeState();
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
        isLoading === false
        ? null
        : <Pages bonds={bondsSelector} />
      }
    </ThemeProvider>
  );
}

export default App;