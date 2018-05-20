import React from 'react';
import ReactDOM from 'react-dom';
import FilmItem from './FilmItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilmItem />, div);
});
