import has from 'lodash.has';

export const categoryItemSelector = ({ categoryItem }) => (
  has(categoryItem, 'currentCategoryItem') && categoryItem.currentCategoryItem
    ? categoryItem
    : null
);
