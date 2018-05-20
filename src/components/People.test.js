import React from 'react';
import ReactDOM from 'react-dom';
import People from './People';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const category = {
    currentCategory: 'people',
    categoryItems: []
  };
  ReactDOM.render(<People {...category} />, div);
});
