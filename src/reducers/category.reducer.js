import {
  CLEAR_CATEGORY,
  FETCH_CATEGORY_SUCCEEDED,
  FETCH_CATEGORY_FAILED
} from '../actions';

export const defaultState = {
  currentCategory: null,
  categoryItems: null,
  categoryComponent: null
};

export const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCEEDED:
      return action.payload;
    case FETCH_CATEGORY_FAILED:
      console.error(action.payload.message);
      return state;
    case CLEAR_CATEGORY:
      return defaultState;
    default:
      return state;
  }
};
