import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBonds, getEquities, getCommodities } from './redux/selectors/index';
import { fetchBondsStarted } from './redux/reducer';
import Pages from './pages/index';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

const App = () => {
  const dispatch = useDispatch();

  const bondsSelector = useSelector(state => getBonds(state));
  const equitiesSelector = useSelector(state => getEquities(state));
  const commoditiesSelector = useSelector(state => getCommodities(state));
  const isLoading = useSelector(state => state.reducer.isLoaded);
  
  useEffect(() => {
    const initializeState = async () => {
      await dispatch(fetchBondsStarted());
    }
    initializeState();
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
        isLoading === false
        ? null
        : <Pages 
            bonds={bondsSelector} 
            equities={equitiesSelector} 
            commodities={commoditiesSelector} 
          />
      }
    </ThemeProvider>
  );
}

export default App;