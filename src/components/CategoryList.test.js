import React from 'react';
import ReactDOM from 'react-dom';
import CategoryList from './CategoryList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    categories: [],
    classes: { root: 'root' },
  };
  ReactDOM.render(
    <CategoryList {...props} />,
    div
  );
});
