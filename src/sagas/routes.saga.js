import { router } from 'redux-saga-router';
import { history } from './history';
import { fork } from 'redux-saga/effects';
import {
  clearCategorySaga,
  fetchCategorySaga,
  fetchCategoryItemSaga
} from '../sagas';

const routes = {
  '/': clearCategorySaga,
  '/:category': fetchCategorySaga,
  '/:category/:id': fetchCategoryItemSaga
};

export default function * routesSaga () {
  yield fork(router, history, routes);
}
