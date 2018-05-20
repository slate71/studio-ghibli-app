import {
  CLEAR_CATEGORY,
  FETCH_CATEGORY_SUCCEEDED
} from '../actions';

export const defaultState = null;

export const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCEEDED:
      return action.payload.category;
    case CLEAR_CATEGORY:
      return defaultState;
    default:
      return state;
  }
}
