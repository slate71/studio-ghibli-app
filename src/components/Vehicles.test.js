import React from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './Vehicles';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const category = {
    currentCategory: 'vehicles',
    categoryItems: []
  };
  ReactDOM.render(<Vehicles {...category} />, div);
});
