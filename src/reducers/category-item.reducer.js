import {
  CLEAR_CATEGORY_ITEM,
  FETCH_CATEGORY_ITEM_SUCCEEDED
} from '../actions';

export const defaultState = {
  currentCategoryItem: null,
  categoryItem: null,
  CategoryItemComponent: null
};

export const categoryItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_ITEM_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      };
    case CLEAR_CATEGORY_ITEM:
      return defaultState;
    default:
      return state;
  }
}
