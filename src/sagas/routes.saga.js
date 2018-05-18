import { call, put, fork, takeLatest } from 'redux-saga/effects';
import {
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_SUCCEEDED,
  fetchCategory
} from '../actions';

const routes = {
  // '/:category': fetchCategorySaga
};

function * fetchCategorySaga ({ category }) {
  try {
    const { results } = yield call(fetchCategory, category);
    yield put({
      type: FETCH_CATEGORY_SUCCEEDED,
      payload: { category: results }
    })
  } catch (e) {
    yield put({
      type: FETCH_CATEGORY_FAILED,
      payload: { message: e.message }
    });
  }
}

export default function * routesSaga () {}
