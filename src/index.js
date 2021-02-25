import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import marketsReducer from './redux/reducer';
import rootSaga from './redux/sagas/initialize-app';

import firebase from 'firebase/app';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import 'firebase/auth';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const rootReducer = (state = {}, action) => {
  return {
    reducer: marketsReducer(state.reducer, action),
  }
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);


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
