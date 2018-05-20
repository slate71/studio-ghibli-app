import { router } from 'redux-saga-router';
import { history } from './history';
import { call, put, fork } from 'redux-saga/effects';
import { fetchUrl, getComponentFor } from '../utils';
import {
  CLEAR_CATEGORY,
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_SUCCEEDED
} from '../actions';

const routes = {
  '/': clearCategorySaga,
  '/:category': fetchCategorySaga
};

function * clearCategorySaga () {
  yield put({ type: CLEAR_CATEGORY });
}

function * fetchCategorySaga ({ category }) {
  try {
    const response = yield call(fetchUrl, [category]);

    yield put({
      type: FETCH_CATEGORY_SUCCEEDED,
      payload: {
        currentCategory: category,
        categoryItems: response,
        CategoryComponent: getComponentFor(category)
      }
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
