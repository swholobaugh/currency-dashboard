import { getSymbolHistory } from '../../api/index';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchBondsFailed, 
          fetchBondsStarted, 
          fetchBondsSucceeded, 
          fetchCommoditiesFailed, 
          fetchCommoditiesSucceeded, 
          fetchEquitiesFailed,
          fetchEquitiesSucceeded 
        } from '../reducer';
import { formatData } from '../utils/format-data';

function* initializeState() {

  try {
    const sp500Response = yield call(getSymbolHistory, 'SPX');
    const ndxResponse = yield call(getSymbolHistory, 'NDX');

    const sp500Data = yield formatData(sp500Response);
    const ndxData = yield formatData(ndxResponse);

    yield put (fetchEquitiesSucceeded({
      sp500: sp500Data,
      ndx: ndxData
    }));

  } catch (e) {
    yield put (fetchEquitiesFailed({
      error: e.message,
    }));
  }


  try {
    const goldResponse = yield call(getSymbolHistory, 'GLD');
    const dollarResponse = yield call(getSymbolHistory, '$DXY');

    const goldData = yield formatData(goldResponse);
    const dollarData = yield formatData(dollarResponse);

    yield put (fetchCommoditiesSucceeded({
      gold: goldData,
      usd: dollarData,
    }));

  } catch (e) {
    yield put (fetchCommoditiesFailed({
      error: e.message,
    }));
  }


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

    yield put (fetchBondsFailed({
      error: e.message,
    }));
  }

}

export default function* rootSaga() {
  yield takeLatest(fetchBondsStarted, initializeState);
}