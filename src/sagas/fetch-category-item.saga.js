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
    const response = yield call(fetchUrl, `${category}/${id}`);

    const urlArrays = pickBy(response, value => (
      Array.isArray(value) ||
      (typeof value === 'string' && value.includes('ghibliapi.herokuapp.com'))
    ));

    const categoryIds = map(urlArrays, (urls, category) => {
      const ids = Array.isArray(urls)
        ? urls.map(url => url.split('/').pop())
        : [urls.split('/').pop()];

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

      if (category === 'url') { continue; }

      const parseCategory = category => ['pilot', 'residents'].includes(category)
        ? 'people'
        : category;

      relatedCategoryItems[category] = yield call(
        fetchUrl,
        `/${parseCategory(category)}${query}`
      );
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
