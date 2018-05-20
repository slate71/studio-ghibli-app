import React from 'react';
import ReactDOM from 'react-dom';
import Species from './Species';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const category = {
    currentCategory: 'species',
    categoryItems: []
  };
  ReactDOM.render(<Species {...category} />, div);
});
