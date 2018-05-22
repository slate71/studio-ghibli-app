import pickBy from 'lodash.pickby';
import map from 'lodash.map';
import { call, put } from 'redux-saga/effects';
import { fetchUrl, getComponentFor } from '../utils';
import {
  FETCH_CATEGORY_ITEM_FAILED,
  FETCH_CATEGORY_ITEM_SUCCEEDED
} from '../actions';

export function * fetchCategoryItemSaga ({ category, id }) {
  try {
    const response = yield call(fetchUrl, [`${category}/${id}`]);

    const urlArrays = pickBy(response, value => Array.isArray(value));

    const categoryIds = map(urlArrays, (urls, category) => {
      const ids = urls.map(url => url.split('/').pop());
      return [
        category,
        ids.map((id, idx) => idx === 0
          ? `?id=${id}`
          : `&id=${id}`
        ).join('')
      ];
    });

    const relatedCategoryItems = {};
    for (const item in categoryIds) {
      const [ category, query ] = categoryIds[item];
      relatedCategoryItems[category] = yield call(fetchUrl, `/${category}${query}`);
    }

    yield put({
      type: FETCH_CATEGORY_ITEM_SUCCEEDED,
      payload: {
        currentCategoryItem: id,
        categoryItem: response,
        relatedCategoryItems,
        CategoryItemComponent: getComponentFor(`${category}-item`)
      }
    });
  } catch (e) {
    yield put({
      type: FETCH_CATEGORY_ITEM_FAILED,
      payload: { message: e.message }
    });
  }
}
