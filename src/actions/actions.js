export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_CATEGORY_FAILED = 'FETCH_CATEGORY_FAILED';
export const FETCH_CATEGORY_SUCCEEDED = 'FETCH_CATEGORY_SUCCEEDED';
export const SET_CATEGORY = 'SET_CATEGORY';
export const CLEAR_CATEGORY = 'CLEAR_CATEGORY';

export const fetchCategory = (category) => ({
  type: FETCH_CATEGORY,
  payload: { category }
});
