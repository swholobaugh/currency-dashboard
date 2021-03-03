import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import marketsReducer from './redux/redux-markets/reducer';
import searchReducer from './redux/redux-search/reducer';
import rootSaga from './redux/redux-initialize/sagas/root-saga';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import firebase from 'firebase/app';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import 'firebase/auth';
import firebaseConfig from './auth/firebase';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = configureStore({
  reducer: {
    markets: marketsReducer,
    search: searchReducer
  },
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);


ReactDOM.render(      
  <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
    <Provider store={store}>
        <App />
    </Provider>
  </FirebaseAuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
