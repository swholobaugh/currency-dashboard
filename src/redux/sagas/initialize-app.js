import { getSymbolHistory } from '../../api/index';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchPricesFailed, fetchPricesStarted, fetchPricesSucceeded } from '../reducer';

function* initializeState() {

  try {
    const symbol = 'FVX';
    const data = yield call(getSymbolHistory, symbol);

    yield put (fetchPricesSucceeded({
      prices: data,
    }));

  } catch (e) {
    console.log(e);

    yield put (fetchPricesFailed({
      error: e.message,
    }));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchPricesStarted, initializeState);
}