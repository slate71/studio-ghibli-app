import React from 'react';
import ReactDOM from 'react-dom';
import PersonItem from './PersonItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonItem />, div);
});
