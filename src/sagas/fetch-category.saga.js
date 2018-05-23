import { call, put } from 'redux-saga/effects';
import { fetchUrl, getComponentFor } from '../utils';
import {
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_SUCCEEDED,
  CLEAR_CATEGORY_ITEM
} from '../actions';

export function * fetchCategorySaga ({ category }) {
  try {
    const response = yield call(fetchUrl, category);

    yield put({
      type: FETCH_CATEGORY_SUCCEEDED,
      payload: {
        currentCategory: category,
        categoryItems: response,
        CategoryComponent: getComponentFor(category)
      }
    });

    yield put({ type: CLEAR_CATEGORY_ITEM });
  } catch (e) {
    yield put({
      type: FETCH_CATEGORY_FAILED,
      payload: { message: e.message }
    });
  }
}
