import { call, put } from 'redux-saga/effects';
import { fetchUrl, getComponentFor } from '../utils';
import {
  FETCH_CATEGORY_ITEM_FAILED,
  FETCH_CATEGORY_ITEM_SUCCEEDED
} from '../actions';

export function * fetchCategoryItemSaga ({ category, id }) {
  try {
    const response = yield call(fetchUrl, [`${category}/${id}`]);

    yield put({
      type: FETCH_CATEGORY_ITEM_SUCCEEDED,
      payload: {
        currentCategoryItem: id,
        categoryItem: response,
        CategoryItemComponent: getComponentFor(`${category}-item`)
      }
    })
  } catch (e) {
    yield put({
      type: FETCH_CATEGORY_ITEM_FAILED,
      payload: { message: e.message }
    });
  }
}
