import React from 'react';
import ReactDOM from 'react-dom';
import { CategoryListItem } from './CategoryListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoryListItem />, div);
});
