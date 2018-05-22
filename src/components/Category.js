import React from 'react';
import './Category.css';

export default ({ CategoryComponent, ...props }) => (
  <CategoryComponent {...props} />
);
