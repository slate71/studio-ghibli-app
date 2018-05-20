import React from 'react';
import ReactDOM from 'react-dom';
import Locations from './Locations';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const category = {
    currentCategory: 'locations',
    categoryItems: []
  };
  ReactDOM.render(<Locations {...category} />, div);
});
