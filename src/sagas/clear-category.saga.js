import { put } from 'redux-saga/effects';
import { CLEAR_CATEGORY, CLEAR_CATEGORY_ITEM } from '../actions';

export function * clearCategorySaga () {
  yield put({ type: CLEAR_CATEGORY });
  yield put({ type: CLEAR_CATEGORY_ITEM });
}
