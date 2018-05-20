import React from 'react';
import ReactDOM from 'react-dom';
import SpeciesItem from './SpeciesItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SpeciesItem />, div);
});
