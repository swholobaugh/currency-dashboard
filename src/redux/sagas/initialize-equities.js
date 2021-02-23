import { getSymbolHistory } from '../../api/index';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchEquitiesFailed, fetchEquitiesStarted, fetchEquitiesSucceeded } from '../reducer';
import { formatData } from '../utils/format-data';

function* initializeState() {

}

export default function* initializeEquities() {
  yield takeLatest(fetchEquitiesStarted, intializeState);
}