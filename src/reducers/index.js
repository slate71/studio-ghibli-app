import { combineReducers } from 'redux';
import { categoriesReducer } from './categories.reducer';
import { categoryReducer } from './category.reducer';
import { categoryItemReducer } from './category-item.reducer';

export default combineReducers({
  categories: categoriesReducer,
  category: categoryReducer,
  categoryItem: categoryItemReducer
});
