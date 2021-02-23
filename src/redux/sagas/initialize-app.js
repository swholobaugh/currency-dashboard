import { getSymbolHistory } from '../../api/index';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchBondsFailed, fetchBondsStarted, fetchBondsSucceeded } from '../reducer';

const formatData = async (data) => {
  
  const ohlc = data.candles.map(item => {
    return [item.datetime, item.open, item.high, item.low, item.close]
  });

  const volume = data.candles.map(item => {
    return [item.datetime, item.volume]
  });

  const symbol = data.symbol;
  
  const empty = data.empty;
  
  return { ohlc, volume, symbol, empty };
}

function* initializeState() {

  try {
    const fiveYearResponse = yield call(getSymbolHistory, 'FVX');
    const tenYearResponse = yield call(getSymbolHistory, 'TNX');
    const thirtyYearResponse = yield call(getSymbolHistory, 'TYX');
    //const appleResponse = yield call(getSymbolHistory, 'AAPL');

    const fiveYearData = yield formatData(fiveYearResponse);
    const tenYearData = yield formatData(tenYearResponse);
    const thirtyYearData = yield formatData(thirtyYearResponse);

    yield put (fetchBondsSucceeded({
      fiveYear: fiveYearData,
      tenYear: tenYearData,
      thirtyYear: thirtyYearData
    }));

  } catch (e) {
    console.log(e);

    yield put (fetchBondsFailed({
      error: e.message,
    }));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchBondsStarted, initializeState);
}