import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(() => ({
  categories: []
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store} children={<App />} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
