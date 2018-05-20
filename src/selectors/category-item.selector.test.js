import { categoryItemSelector } from './category-item.selector';

describe('categoryItemSelector', () => {
  it('should select categoryItem from state', () => {
    const state = { categoryItem: { currentCategoryItem: 123 } };
    const received = categoryItemSelector(state);
    expect(received).toBe(state.categoryItem);
  });

  it('should return null if currentCategoryItem is null', () => {
    const state = { categoryItem: { currentCategoryItem: null } };
    const received = categoryItemSelector(state);
    expect(received).toBeNull();
  });
});
