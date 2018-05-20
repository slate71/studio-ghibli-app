import React from 'react';
import ReactDOM from 'react-dom';
import VehicleItem from './VehicleItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VehicleItem />, div);
});
