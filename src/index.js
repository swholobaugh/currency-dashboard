import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import priceReducer from './redux/reducer';
import rootSaga from './redux/sagas/initialize-app';
/*
import rootSaga from './redux/middleware/sagas';
import equipmentReducer from './redux/reducers/equipment';
import locationsReducer from './redux/reducers/locations';
*/

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const rootReducer = (state = {}, action) => {
  return {
    reducer: priceReducer(state.reducer, action),
  }
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);

/* root reducer example
const rootReducer = (state = {}, action) => {
  return {
    equipment: equipmentReducer(state.equipment, action),
  }
}
*/

/*store example
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);
*/


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
