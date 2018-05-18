import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import reducer from './reducers';
import routesSaga from './sagas/routes.saga';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(routesSaga);

ReactDOM.render(
  <Provider
    store={store}
    children={<App />}
  />,
  document.getElementById('root')
);

registerServiceWorker();
