import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const category = {
    currentCategory: 'foo',
    categoryItems: [],
    CategoryComponent: () => <div />
  };
  ReactDOM.render(
    <Category {...category} />,
    div
  );
});
