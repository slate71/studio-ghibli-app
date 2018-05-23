import { router } from 'redux-saga-router';
import { history } from './history';
import { fork } from 'redux-saga/effects';
import {
  clearCategorySaga,
  fetchCategorySaga,
  fetchCategoryItemSaga
} from '../sagas';

const routes = {
  '/studio-ghibli-app/': clearCategorySaga,
  '/studio-ghibli-app/:category': fetchCategorySaga,
  '/studio-ghibli-app/:category/:id': fetchCategoryItemSaga
};

export default function * routesSaga () {
  yield fork(router, history, routes);
}
