import React from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.css';

export const CategoryItem = ({ CategoryItemComponent, categoryItem, relatedCategoryItems }) => (
  <CategoryItemComponent {...categoryItem} relatedCategoryItems={relatedCategoryItems} />
);

CategoryItem.propTypes = {
  CategoryItemComponent: PropTypes.func,
  categoryItem: PropTypes.object,
  categoryLinks: PropTypes.object,
  relatedCategoryItems: PropTypes.object
};

export default CategoryItem;
