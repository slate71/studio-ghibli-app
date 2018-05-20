import { router } from 'redux-saga-router';
import { history } from './history';
import { call, put, fork } from 'redux-saga/effects';
import { fetchUrl } from '../utils';
import {
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_SUCCEEDED
} from '../actions';

const routes = {
  '/:category': fetchCategorySaga
};

function * fetchCategorySaga ({ category }) {
  try {
    const response = yield call(fetchUrl, [category]);

    yield put({
      type: FETCH_CATEGORY_SUCCEEDED,
      payload: { category: response }
    })
  } catch (e) {
    yield put({
      type: FETCH_CATEGORY_FAILED,
      payload: { message: e.message }
    });
  }
}

export default function * routesSaga () {
  yield fork(router, history, routes);
}
