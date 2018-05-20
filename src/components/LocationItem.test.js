import React from 'react';
import ReactDOM from 'react-dom';
import LocationItem from './LocationItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocationItem />, div);
});
