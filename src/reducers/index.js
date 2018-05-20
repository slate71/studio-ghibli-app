import { combineReducers } from 'redux';
import { categoriesReducer } from './categories.reducer';
import { categoryReducer } from './category.reducer';

export default combineReducers({
  categories: categoriesReducer,
  category: categoryReducer
});
