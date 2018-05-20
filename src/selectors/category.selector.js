import has from 'lodash.has';

export const categorySelector = ({ category }) => (
  has(category, 'currentCategory') && category.currentCategory
    ? category
    : null
);
