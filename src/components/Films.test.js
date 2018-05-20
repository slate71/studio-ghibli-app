import React from 'react';
import ReactDOM from 'react-dom';
import Films from './Films';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const category = {
    currentCategory: 'films',
    categoryItems: []
  };
  ReactDOM.render(<Films {...category} />, div);
});
