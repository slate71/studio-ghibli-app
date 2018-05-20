import React from 'react';

export const CategoryItem = ({ CategoryItemComponent, categoryItem }) => (
  <CategoryItemComponent {...categoryItem} />
);

export default CategoryItem;
