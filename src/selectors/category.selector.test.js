import { categorySelector } from './category.selector';

describe('categorySelector', () => {
  it('picks and returns the category off of state', () => {
    const state = { category: { currentCategory: 'fooCategory' } };
    const received = categorySelector(state);
    expect(received).toBe(state.category);
  });

  it('returns null if currentcategory is null', () => {
    const state = { category: { currentCategory: null } };
    const received = categorySelector(state);
    expect(received).toBeNull();
  });
});
