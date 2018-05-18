import { categoriesSelector } from '../selectors';
import { DEFAULT_CATEGORIES } from '../reducers/categories.reducer';

describe('categoriesSelector', () => {
  it('returns and array of category strings from state', () => {
    expect.assertions(1);
    const state = { categories: DEFAULT_CATEGORIES };
    const expectedState = DEFAULT_CATEGORIES;
    const receivedState = categoriesSelector(state);
    expect(receivedState).toBe(expectedState);
  });
});
