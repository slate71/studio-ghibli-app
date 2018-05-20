import React from 'react';
import ReactDOM from 'react-dom';
import CategoryItem from './CategoryItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const categoryItem = {
    currentCategory: 123,
    categoryItem: {},
    CategoryItemComponent: () => <div />
  };
  ReactDOM.render(
    <CategoryItem {...categoryItem} />,
    div
  );
});
