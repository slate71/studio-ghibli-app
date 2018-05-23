import React from 'react';
import ReactDOM from 'react-dom';
import CategoryItemComponent from './CategoryItemComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoryItemComponent />, div);
});
