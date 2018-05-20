import { defaultState, categoryReducer } from './category.reducer';
import { CLEAR_CATEGORY } from '../actions';

describe('categoryReducer', () => {
  it('return the defaultState on CLEAR_CATEGORY action', () => {
    expect.assertions(1);
    const state = { foo: 'bar' };
    const action = { type: CLEAR_CATEGORY };
    const received = categoryReducer(state, action);
    expect(received).toBe(defaultState);
  });
});
