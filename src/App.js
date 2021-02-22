import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrices, getIsLoaded } from './redux/selectors/index';
import { fetchPricesStarted } from './redux/reducer';
import Pages from './pages/index';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

const App = () => {
  const dispatch = useDispatch();

  const priceSelector = useSelector(state => getPrices(state));
  const isLoading = useSelector(state => state.reducer.isLoaded);
  console.log(isLoading);
  
  const [prices, setPrices] = useState(null);
  
  useEffect(() => {
    const initializeState = async () => {
      await dispatch(fetchPricesStarted());
      await setPrices(priceSelector);
    }
    initializeState();
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
        isLoading === false
        ? null
        : <Pages prices={priceSelector} />
      }
    </ThemeProvider>
  );
}

export default App;