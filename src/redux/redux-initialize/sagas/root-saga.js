import { all } from "redux-saga/effects";

import marketsSaga from '../../redux-markets/sagas/markets-saga';
import searchSaga from '../../redux-search/sagas/search-saga';


export default function* rootSaga() {
  yield all([
    marketsSaga(),
    searchSaga(),
  ])
}