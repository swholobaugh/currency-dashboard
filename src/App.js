import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBonds, getEquities, getCommodities } from './redux/redux-markets/selectors/index';
import { fetchBondsStarted } from './redux/redux-markets/reducer';
import Pages from './pages/index';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import Login from './pages/login/login';

import { 
  FirebaseAuthConsumer,
  IfFirebaseUnAuthed,
  IfFirebaseAuthed 
} from '@react-firebase/auth';


const App = () => {
  const dispatch = useDispatch();

  const bondsSelector = useSelector(state => getBonds(state));
  const equitiesSelector = useSelector(state => getEquities(state));
  const commoditiesSelector = useSelector(state => getCommodities(state));
  const isLoading = useSelector(state => state.markets.isLoaded);
  
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
        : 
        <div>
          <IfFirebaseUnAuthed>
            <Login />
          </IfFirebaseUnAuthed>
          <IfFirebaseAuthed>
            <Pages 
              bonds={bondsSelector} 
              equities={equitiesSelector} 
              commodities={commoditiesSelector} 
            />
          </IfFirebaseAuthed>
        </div>
      }
    </ThemeProvider>
  );
}

export default App;